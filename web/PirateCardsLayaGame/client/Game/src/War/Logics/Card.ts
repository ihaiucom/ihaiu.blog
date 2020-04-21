import CardView from "../../FGUI/Extends/GameHome/CardView";
import { CardScoreType } from "../Enums/CardScoreType";
import GameStatus from "../Datas/GameStatus";
import WarGame from "../WarGame";
import Consts from "../Enums/Consts";
import { HeroType } from "../Enums/HeroType";
import Point from "../Datas/Point";
import TweenUtil from "../Utils/TweenUtil";
import TweenHelper from "../Utils/TweenHelper";
import SoundController from "./SoundController";
import SoundConsts from "../Enums/SoundConsts";
import TweenContainer from "../Utils/TweenContainer";
import CardViewFrontWarriowBoss from "../../FGUI/Extends/GameHome/CardViewFrontWarriowBoss";
import CardViewBack from "../../FGUI/Extends/GameHome/CardViewBack";
import CardConfig from "../../Config/ConfigExtends/CardConfig";
import { CardBackgroundType } from "../Enums/CardBackgroundType";
import Game from "../../Game";
import FxShootLightningBig from "../../FGUI/Extends/GameHome/FxShootLightningBig";

export default class Card
{
    
    
    static GetDefault(game) 
    {
        console.log("Card 创建空牌");
        var card = <Card> Pool.createByClass(Card);
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
        card.setScore(score),
        GameStatus.updateCardCounter(cardScoreType),
        GameStatus.updateMovesAfterSpecialCard(cardScoreType);
        return card;
    }

    poolRecover()
    {
        this.reset();
        Pool.recoverByClass(this);
    }



    game: WarGame;
    config: CardConfig;
    type: CardScoreType = CardScoreType.None;
    view: CardView;
    
    isOnClickInitiated = false;
    powerUpAmount = 0;

    lifeAmount = 0;
    // 初始血量
    initialLife: number = 0;

    // 当前血量
    currentLife: number = 0;

    // 是否是打开状态
    isOpen: boolean = false;

    // 设置该卡牌 闪电忙碌状态 罢工
    canLightningStrike: boolean = false;
    

    
    constructor()
    {
        this.view = CardView.PoolGet();
        this.reset();
    }

    reset()
    {
        
        this.view.setXY(-300, -400);
        this.view.setScale(1, 1);

        this.isOnClickInitiated = false;
        this.powerUpAmount = 0;
    
        this.lifeAmount = 0;
        // 初始血量
        this.initialLife = 0;
    
        // 当前血量
        this.currentLife = 0;
    
        // 是否是打开状态
        this.isOpen = false;
    
        // 设置该卡牌 闪电忙碌状态 罢工
        this.canLightningStrike = false;
        
    }

    SetEmpty()
    {
        this.SetConfig(null);
    }

    SetConfig(config: CardConfig)
    {
        this.config = config;
        this.view.game = this.game;
        this.view.SetConfig(config);
        this.view.SetCard(this);
    }

    get isEmpty()
    {
        return this.type == CardScoreType.None;
    }

    get isHero(): boolean
    {
        return this.type == CardScoreType.Hero;
    }

    get isBoss(): boolean
    {
        return this.type == CardScoreType.Boss;
    }

    get isTrap(): boolean
    {
        return this.type == CardScoreType.Trap;
    }

    get level(): number
    {
        return this.config.level;
    }


    stepUpdate() 
    {
        if (this.isTrap) 
        {
            var isOpened = this.changeStatus();
            var isGrun = GameStatus.currentHero == HeroType.Gun;
            this.lifeAmount = isGrun ? 0 : isOpened ? this.powerUpAmount: 0;
            this.currentLife = this.lifeAmount;
            this.setHealthText()
        }
        this.type == CardScoreType.Poison && this.setPowerUp(this.powerUpAmount + 1),
        this.type == CardScoreType.Bomb && this.setPowerUp(this.powerUpAmount - 1),
        this.type == CardScoreType.Barrel && this.powerUpAmount > 2 && this.setPowerUp(this.powerUpAmount - 1)
    }

    changeStatus()
    {
        if(this.isOpen)
        {
            this.view.setClose()
            this.isOpen = false;
        }
        else
        {
            this.view.setClose()
            this.isOpen = true;
        }
        return this.isOpen;
    }

    
    getScore() 
    {
        return this.type == CardScoreType.Trap ? this.lifeAmount: this.lifeAmount + this.powerUpAmount
    }

    // 血量
    getLife() {
        return this.lifeAmount
    }
    // 能量
    getPowerUp() {
        return this.powerUpAmount
    }

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

    // 血量 乘倍数
    increaseLife(mul) 
    {
        this.setLife(this.lifeAmount * mul);
        this.type === CardScoreType.Trap && this.setPowerUp(this.powerUpAmount * mul);
    }

    // 能量 乘倍数
    increasePowerUp(mul) 
    {
        this.setPowerUp(this.powerUpAmount * mul)
    }

    // 减少血量, 延迟
    reduceScoreInNSeconds(score, delay) 
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

    // 添加血量, 延迟
    increaseScoreInNSeconds(score, delay) 
    {
        if(this.powerUpAmount > 0)
        {
            this.powerUpAmount = this.powerUpAmount + score;
            setTimeout(this.increasePowerUpTween.bind(this), delay);
        }

        if(this.lifeAmount > 0)
        {
            this.lifeAmount = this.lifeAmount + score;
            setTimeout(this.increaseLifeTween.bind(this), delay);
        }

    }

    // tween更新视图 -- 能量
    increasePowerUpTween() 
    {
        var tweenContainer = this.view.tweenPowerUp();
        tweenContainer.restart();
    }

    // tween更新视图 -- 血量
    increaseLifeTween() 
    {
        var tweenContainer = this.view.tweenLife();
        tweenContainer.restart();
    }

    setScore(score: number) 
    {
        switch (this.type) 
        {
        case CardScoreType.Boss:
        case CardScoreType.Enemy:
            this.initialLife = score;
            this.currentLife =score;
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
            break;
        case CardScoreType.Chest:
            break;
        case CardScoreType.Horseshoe:
            this.setPowerUp(1)
        }
    }
    setPowerUp(t) {
        this.powerUpAmount = t,
        this.setPowerUpText()
    }

    setLife(val?: number) 
    {
        if(val != undefined)
        {
            this.lifeAmount = val;
        }
        this.setHealthText()
    }

    setHealthText() 
    {
        this.view.setHealthText();
    }

    setPowerUpText() 
    {
        this.view.setPowerUpText();
    }

    isNegative() 
    {
        switch (this.type) 
        {
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
                return false;
        }
    }

    getGoldValue() 
    {
        return this.initialLife
    }

    moveTo(point: Point, time: number): Laya.Tween
    {
        this.game.container.addChild(this.view);
        return TweenUtil.to(this.view, point, time);
    }

    setCoordinate(point: Point)
    {
        this.game.container.addChild(this.view);
        this.view.setXY(point.x, point.y);
    }

    open(): Laya.Tween
    {
        return null;
    }

    endTurnAnimationStart()
    {
        this.view.setScale(0, Consts.FlipZoom);
    }

    startTurnAnimation(endCallback: () => void, endCaller:any): TweenContainer
    { 
        var tweenContainer = TweenHelper.turnAnimationStart(null, this.view);
        tweenContainer.onStart.add(this.playCardSoundInSeconds, this);
        tweenContainer.onComplete.add(this.removeShapeFromStage, this);
        tweenContainer.onComplete.add(endCallback, endCaller);
        return tweenContainer;
    }

    playCardSoundInSeconds()
    {
        setTimeout(this.playCardSound.bind(this), 50)
    }

    playCardSound()
    {
        SoundController.instance.playSound(SoundConsts.Card);
    }

    

    endTurnAnimationEnd()
    {
        if(this.isBoss)
        {
            SoundController.instance.playSound(SoundConsts.BossAppearance);
        }
        this.view.scaleX = 0.1;
        
        TweenHelper.turnAnimationEnd(null, this.view).restart();
    }
    getScaleTween(view, tweenContainer?:TweenContainer ) 
    {
        if(!tweenContainer)
        {
            tweenContainer = TweenContainer.PoolGet();
        }
        var tween = TweenUtil.to(view, {scaleX: 2.5, scaleY: 2.5}, 200);
        tweenContainer.tweens.push(tween)
        
        tween = TweenUtil.to(view, {scaleX: 1, scaleY:  1}, 200, null, null, 200);
        tweenContainer.tweens.push(tween)
        return tweenContainer;
    }

    removeChild(): TweenContainer
    {
        var tweenContainer = TweenContainer.PoolGet();
        var tween = TweenUtil.to(this.view, {scaleX: 1.1, scaleY: 1.1}, 50);
        tweenContainer.tweens.push(tween);

        tween = TweenUtil.to(this.view, {scaleX: 1, scaleY: 1}, 50, null, null, 50);
        tweenContainer.tweens.push(tween);

        
        tween = TweenUtil.to(this.view, {scaleX: 1.1, scaleY: 1.1}, 50, null, null, 50 + 50);
        tweenContainer.tweens.push(tween);

        tween = TweenUtil.to(this.view, {scaleX: 0, scaleY: 0}, 80, null, Laya.Handler.create(this, this.removeShapeFromStage), 50 + 50 + 50);
        tweenContainer.tweens.push(tween);

        return tweenContainer;
    }

    

    removeShapeFromStage()
    {
        console.log("Card 移除", this);
        if(this.view.parent)
        {
            this.view.removeFromParent();
            this.delayPoolRecover();
        }
    }



    delayPoolRecover()
    {
        Laya.timer.frameOnce(10, this, this.poolRecover);
    }

    getCenterX()
    {
        return this.view.x;
    }

    
    getCenterY()
    {
        return this.view.y;
    }

    // 播放被闪电攻击的特效
    runLightning()
    {
        var fx = FxShootLightningBig.PoolGet();
        fx.setXY(this.getCenterX(), this.getCenterY());
        this.game.container.addChild(fx);
        return fx.Play();
    }


}