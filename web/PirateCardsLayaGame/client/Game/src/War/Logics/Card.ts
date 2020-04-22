import CardView from "../../FGUI/Extends/GameHome/CardView";
import { CardScoreType } from "../Enums/CardScoreType";
import GameStatus from "../Datas/GameStatus";
import Consts from "../Enums/Consts";
import { HeroType } from "../Enums/HeroType";
import TweenHelper from "../Utils/TweenHelper";
import SoundController from "./SoundController";
import SoundConsts from "../Enums/SoundConsts";
import TweenContainer from "../Utils/TweenContainer";
import CardConfig from "../../Config/ConfigExtends/CardConfig";
import Game from "../../Game";
import AbstractCard from "./AbstractCard";
import NullCard from "./NullCard";

export default class Card extends AbstractCard
{
    
    
    static GetDefault(game) 
    {
        console.log("Card 创建空牌");
        var card = <NullCard> Pool.createByClass(NullCard);
        card.game = game;
        card.type = CardScoreType.None;
        card.SetEmpty();
        return card;
    }
    static GetNew(game, cardScoreType: CardScoreType, level: number, score: number) {
        
        console.log("Card 创建", cardScoreType);
        var config: CardConfig = Game.config.card.getTypeLevelConfig(cardScoreType, level);
        if(config == null)
        {
            console.error("没有找到卡牌配置", cardScoreType, level,score );
        }
        var card = <Card> Pool.createByClass(Card);
        card.game = game;
        card.type = cardScoreType;
        card.SetConfig(config);
        card.setScore(score);
        GameStatus.updateCardCounter(cardScoreType),
        GameStatus.updateMovesAfterSpecialCard(cardScoreType);
        return card;
    }




    /** 生命--初始 */
    initialLife = 0;
    /** 生命--当前 */
    lifeAmount = 0;
    /** 能量--当前 */
    powerUpAmount = 0;

    





    // 是否是打开状态, 桥
    isOpen: boolean = false;

    // 设置该卡牌 闪电忙碌状态 罢工
    canLightningStrike: boolean = false;
    

    
    /** 重置 */
    reset()
    {
        super.reset();

        // 生命--初始
        this.initialLife = 0;
        // 生命--当前
        this.lifeAmount = 0;
        // 能量--当前
        this.powerUpAmount = 0;
    
    
    
        // 是否是打开状态
        this.isOpen = false;
    
        // 设置该卡牌 闪电忙碌状态 罢工
        this.canLightningStrike = false;
        
    }






    
    
    //=====================================
    // 设置 血量、能量 和对应视图
    //-------------------------------------


    /** 倍数，积分 */
    multiplyScore(mul) 
    {
        if(this.lifeAmount > 0)
        {
            this.increaseLife(this.lifeAmount * mul);

            var tween = this.view.tweenLife();
            tween.onComplete.addOnce(()=>{
                this.increaseLife(mul);
            }, this);
            return tween;
        }
        else if(this.powerUpAmount > 0 )
        {
            var tween = this.view.tweenLife();
            tween.onComplete.addOnce(()=>{
                this.increasePowerUp(mul);
            }, this);
            return tween;
        }
        else
        {
            return null;
        }

    }


    /** 设置分数 */
    setScore(score: number) 
    {
        switch (this.type) 
        {
        case CardScoreType.Boss:
        case CardScoreType.Enemy:
            this.initialLife = score;
            this.setLife(score);
            break;
        case CardScoreType.Gold:
        case CardScoreType.Health:
        case CardScoreType.Armor:
        case CardScoreType.Poison:
        case CardScoreType.Cannon:
        case CardScoreType.Lightning:
        case CardScoreType.Multiplier:
        case CardScoreType.Skull:
        case CardScoreType.Barrel:
            this.setPowerUp(score);
            break;
        case CardScoreType.Bomb:
            this.setLife(score),
            this.setPowerUp(10);
            break;
        case CardScoreType.Trap:
            this.setPowerUp(score),
            this.setLife(score);
            this.changeStatus();
            break;
        case CardScoreType.Chest:
            break;
        case CardScoreType.Horseshoe:
            this.setPowerUp(1)
        }
    }

    
    //=====================================
    // 设置 血量、能量 和对应视图
    //-------------------------------------

    
    /** 获取，血量 */
    getLife() 
    {
        return this.lifeAmount
    }

    /** 获取，能量 */
    getPowerUp() 
    {
        return this.powerUpAmount
    }


    /** 修改，能量 */
    setPowerUp(val: number) 
    {
        this.powerUpAmount = val,
        this.setPowerUpText()
    }

    /** 修改，血量 */
    setLife(val?: number) 
    {
        if(val != undefined)
        {
            this.lifeAmount = val;
        }
        this.setHealthText()
    }

    /** 设置视图, 血量 */
    setHealthText() 
    {
        if(this.isDisplayLife())
        {
            this.view.setHealthText();
        }
    }

    /** 设置视图, 能量 */
    setPowerUpText() 
    {
        if(!this.isDisplayLife())
        {
            this.view.setPowerUpText();
        }
    }


    /** tween更新视图 -- 能量 */
    increasePowerUpTween() 
    {
        var tweenContainer = this.view.tweenPowerUp();
        tweenContainer.restart();
    }

    /** tween更新视图 -- 血量 */
    increaseLifeTween() 
    {
        var tweenContainer = this.view.tweenLife();
        tweenContainer.restart();
    }

    
    /** 乘倍数， 血量  */
    increaseLife(mul) 
    {
        this.setLife(this.lifeAmount * mul);
        this.type === CardScoreType.Trap && this.setPowerUp(this.powerUpAmount * mul);
    }

    /** 乘倍数， 能量  */
    increasePowerUp(mul) 
    {
        this.setPowerUp(this.powerUpAmount * mul)
    }



    
    //=====================================
    // 抽象方法
    //-------------------------------------

    
    /** 是否是坏牌 */
    isNegative(): boolean
    {
        switch (this.type) 
        {
            case CardScoreType.Boss:
            case CardScoreType.Enemy:
            case CardScoreType.Trap:
            case CardScoreType.Bomb:
            case CardScoreType.Poison:
                return true;
            case CardScoreType.Health:
            case CardScoreType.Gold:
            case CardScoreType.Armor:
            case CardScoreType.Cannon:
            case CardScoreType.Chest:
            case CardScoreType.Barrel:
            case CardScoreType.Horseshoe:
            case CardScoreType.Lightning:
            case CardScoreType.Multiplier:
            case CardScoreType.Skull:
            case CardScoreType.Hero:
            case CardScoreType.None:
                return false;
        }
    }
    
    /** 是否显示生命 */
    isDisplayLife(): boolean
    {
        switch(this.type)
        {
            case CardScoreType.Boss:
            case CardScoreType.Enemy:
            case CardScoreType.Trap:
            case CardScoreType.Poison:
                return true;
        }
        return false;
    }

    /** 获取分数 */
    getScore(): number 
    {
        return this.type == CardScoreType.Trap ? this.lifeAmount: this.lifeAmount + this.powerUpAmount;
    }

    /** 获取金币数量 */
    getGoldValue(): number 
    {
        return this.initialLife;
    }

    /** 减少血量, 延迟 */
    reduceScoreInNSeconds(score: number, delay: number) 
    {
        if(this.powerUpAmount > 0)
        {
            this.powerUpAmount = this.powerUpAmount - score;
            setTimeout(this.setPowerUpText.bind(this), delay);
        }

        if(this.lifeAmount > 0)
        {
            this.lifeAmount = this.lifeAmount - score;
            setTimeout(this.setHealthText.bind(this), delay);
        }
    }

    
    /** 添加血量, 延迟 */
    increaseScoreInNSeconds(score: number, delay: number) 
    {
        if(this.powerUpAmount > 0)
        {
            this.powerUpAmount = this.powerUpAmount + score;
            if(!this.isDisplayLife())
            {
                setTimeout(this.increasePowerUpTween.bind(this), delay);
            }
        }

        if(this.lifeAmount > 0)
        {
            this.lifeAmount = this.lifeAmount + score;
            if(this.isDisplayLife())
            {
                setTimeout(this.increaseLifeTween.bind(this), delay);
            }
        }
        
    }



    /** 刷新步骤 */
    stepUpdate() 
    {
        if (this.isTrap) 
        {
            var isOpened = this.changeStatus();
            var isGrun = GameStatus.currentHero == HeroType.Gun;
            this.lifeAmount = isGrun ? 0 : isOpened ? this.powerUpAmount: 0;
            this.setHealthText()
        }
        this.type == CardScoreType.Poison && this.setPowerUp(this.powerUpAmount + 1),
        this.type == CardScoreType.Bomb && this.setPowerUp(this.powerUpAmount - 1),
        this.type == CardScoreType.Barrel && this.powerUpAmount > 2 && this.setPowerUp(this.powerUpAmount - 1)
    }
    
    //=====================================
    // 状态
    //-------------------------------------

    /** 改变状态, 桥 */
    changeStatus()
    {
        if(this.isOpen)
        {
            this.view.setClose()
            this.isOpen = false;
        }
        else
        {
            this.view.setOpen()
            this.isOpen = true;
        }
        return this.isOpen;
    }

    
    open(): Laya.Tween
    {
        return null;
    }


}