import Card from "./Card";
import { CardScoreType } from "../Enums/CardScoreType";
import FightResult from "../Datas/FightResult";
import GameStatus from "../Datas/GameStatus";
import SoundConsts from "../Enums/SoundConsts";
import ArrayUtils from "../Utils/ArrayUtils";
import ArtConsts from "../Enums/ArtConsts";
import SoundController from "./SoundController";
import { HeroType } from "../Enums/HeroType";
import Consts from "../Enums/Consts";
import AbstractCard from "./AbstractCard";
import ReportMonitor from "../../Libs/ReportMonitor";
import { ItemToolType } from "../../GameModule/DataEnums/ItemToolType";
import { Player } from "../Datas/Player";
import { EffectType } from "../Enums/EffectType";

export default class Hero extends AbstractCard
{
    
    
    /** 生命--当前 */
    currentLife: number = 0;
    /** 生命--最大 */
    totalLife: number = 0;
    /** 护甲 */
    armor: number = 0;

    // CardScoreType.Lightning
    needRunLightning: boolean = false;
    lightningScore: number = 0;

    //  CardScoreType.Cannon
    needShoot: boolean = false;
    shootScore: number = 0;

    // CardScoreType.Multiplier
    needShootMultiplier: boolean = false;
    multiplierType: CardScoreType = CardScoreType.MultiplierPositive;
    multiplierScore: number = 0;


    // CardScoreType.Skull
    needShootSkull: boolean = false;

    /** 重置 */
    reset()
    {
        super.reset();
        this.currentLife = 0;
        this.totalLife = 0;
        this.armor = 0;

        
        // CardScoreType.Lightning
        this.needRunLightning = false;
        this.lightningScore = 0;
        
        //  CardScoreType.Cannon
        this.needShoot = false;
        this.shootScore = 0;

        // CardScoreType.Multiplier
        this.needShootMultiplier = false;
        this.multiplierScore = 0;


        // CardScoreType.Skull
        this.needShootSkull = false;


    }
    
    fight(card: Card) 
    {
        Player.current.onEatCard(card)
        var fightResult = new FightResult(true, false, true);
        switch (card.type) 
        {
        case CardScoreType.Trap:
            if(card.getLife() > 0 &&  GameStatus.currentHero != HeroType.Gun)
            {
                SoundController.instance.playSound(SoundConsts.Trap);
                var score = card.getScore();
                var isInvincible = Player.current.invincible();
                if(isInvincible)
                {
                    score = 0;
                }
                else
                {
                    score -= Player.current.damageExtra();
                    score = Math.max(0, score);
                }

                if(this.currentLife > score)
                {
                    this.currentLife -= score;
                    GameStatus.addGold(card.getScore());
                    fightResult.isHeroAlive = true;
                }
                else
                {
                    fightResult.isHeroAlive = false;
                }
            }
            break;
        case CardScoreType.Boss:
        case CardScoreType.Enemy:
            SoundController.instance.playSound(ArrayUtils.getRandomItem([SoundConsts.Hit1, SoundConsts.Hit2]));
            fightResult.isHeroAlive = this.fightWithEnemy(card);
            if(fightResult.isHeroAlive && card.isBoss)
            {
                fightResult.isNeedIncreaseLifeByOneAfterBoss =  true;
            }
            break;
        case CardScoreType.Armor:
            SoundController.instance.playSound(SoundConsts.ShieldWood);
            if(GameStatus.currentHero == HeroType.Gun )
            {
                this.needSmashLightning(card.getScore());
            }
            else
            {
                if(this.armor < card.getScore() )
                {
                    this.armor = card.getScore();
                    this.setArmorFrame(card);
                }
                else if(GameStatus.currentHero == HeroType.Base)
                {
                    this.armor++;
                    
                }
            }
            break;
        case CardScoreType.Gold:
            if(card.level == 1)
            {
                SoundController.instance.playSound(SoundConsts.Coin);
            }
            else
            {
                SoundController.instance.playSound(SoundConsts.CoinsBag);
            }
            var score = card.getScore();
            var mul = Player.current.goldMultiplier();
            score *= mul;

            GameStatus.addGold(score);
            break;
        case CardScoreType.Health:
            SoundController.instance.playSound(ArrayUtils.getRandomItem([SoundConsts.Health1, SoundConsts.Health2]));
            this.currentLife += card.getScore();
            if(this.currentLife > this.totalLife)
            {
                this.currentLife = this.totalLife;
            }
            break;
        case CardScoreType.Cannon:
            this.needShoot = true,
            this.shootScore = card.getScore();
            break;
        case CardScoreType.Chest:
            fightResult.isChest = true;
            break;
        case CardScoreType.Poison:
            SoundController.instance.playSound(SoundConsts.Poison);
            if (GameStatus.isLuck)
            {
                fightResult.isHeroAlive = true;
                this.useLuck();
                return fightResult;
            } 

            if (card.getScore() >= this.currentLife) 
            {
                fightResult.isHeroAlive = false;
                return fightResult;
            }
            this.currentLife -= card.getScore();
            break;
        case CardScoreType.Horseshoe:
            fightResult.isNeedIncreaseLifeByOne = true;
            break;
        case CardScoreType.Bomb:
            break;
        case CardScoreType.Lightning:
            this.needSmashLightning(card.getScore());
            break;
        case CardScoreType.Multiplier:
        case CardScoreType.MultiplierPositive:
        case CardScoreType.MultiplierNegative:
        case CardScoreType.AddPositive:
        case CardScoreType.AddNegative:
            this.needShootMultiplier = true,
            this.multiplierType = card.type,
            this.multiplierScore = card.getScore();
            break;
        case CardScoreType.Skull:
            this.needShootSkull = true;
            break;
        case CardScoreType.Barrel:
            SoundController.instance.playSound(ArrayUtils.getRandomItem([SoundConsts.Barrel1, SoundConsts.Barrel2]));
            fightResult.isMove = false;
        }
        this.setStatus();
        return fightResult;
    }

    needSmashLightning(score) {
        this.needRunLightning =  true,
        this.lightningScore = score
    }



    

    /** 攻击怪物或者Boss */
    fightWithEnemy(card) 
    {
        var score = card.getScore();
        
        var isInvincible = Player.current.invincible();
        if(isInvincible)
        {
            score = 0;
        }
        else
        {
            score -= Player.current.damageExtra();
            score = Math.max(0, score);
        }

        // 死亡
        if (score >= this.armor + this.currentLife) return false;

        if (score <= this.armor) 
        {
            // 如果是基础英雄, 对方分数小于自己的护甲，就只扣1点护甲
            if(score < this.armor && GameStatus.currentHero == HeroType.Base)
            {
                this.armor -= 1
            }
            else
            {
                this.armor -= score;
            }
        }
        else if (this.armor > 0) 
        {
            var i = score - this.armor;
            this.armor = 0;
            this.currentLife -= i;
        } 
        else
        {
            this.currentLife -= score;
        }

        GameStatus.addGold(card.getScore());
        return true;
    }
    

    /** 添加最大血量 */
    increaseLifeByOneTween() 
    {
        var tweenContainer = this.view.tweenLife();
        tweenContainer.onStart.addOnce(this.playHorseshoe, this);
        tweenContainer.onComplete.addOnce(this.increaseLifeByOne, this);
        return tweenContainer;
    }
    
    playHorseshoe() {
        SoundController.instance.playSound(SoundConsts.Horseshoe)
    }

    increaseLifeByOne() {
        this.currentLife++,
        this.totalLife++,
        this.setLife()
    }



    


    //=====================================
    // 抽象方法
    //-------------------------------------

    /** 刷新步骤 */
    stepUpdate() 
    {

    }

    /** 是否是坏牌 */
    isNegative(): boolean 
    {
        return false;
    }

    
    /** 获取分数 */
    getScore(): number
    {
        return this.currentLife + this.armor
    }
    

    /** 获取金币数量 */
    getGoldValue() 
    {
        return 0
    }

    /** 减少血量, 延迟 */
    reduceScoreInNSeconds(score: number, delay: number) 
    {
        if (score <= this.armor) 
        {
            this.armor -= score;
        }
        else 
        {
            var i = score - this.armor;
            this.armor = 0,
            this.currentLife -= i
        }
        setTimeout(this.setStatus.bind(this), delay)
    }


    /** 添加血量, 延迟 */
    increaseScoreInNSeconds(score: number, delay: number) 
    {
        if(this.totalLife - this.currentLife > score)
        {
            this.currentLife = this.totalLife;
        }
        else
        {
            this.currentLife += score;
        }
        setTimeout(this.setStatus.bind(this), delay)
    }

    



    //=====================================
    // 刷新视图
    //-------------------------------------
    
    /** 刷新视图 */
    setStatus() 
    {
        this.setLife(),
        this.setArmor()
    }
    
    /** 刷新视图, 血量 */
    setLife() 
    {
        this.view.setHealthText();
    }

    /** 刷新视图, 护甲 */
    setArmor() 
    {
        this.view.setArmor();
    }

    /** 刷新视图, 动画 */
    setArmorFrame(card: Card) 
    {
        this.view.setArmor();
    }

    
    //=====================================
    // 使用道具
    //-------------------------------------

    setShopItemsStatus() 
    {
        this.view.refreshShopBar();
    }

    /** 使用道具， 解药 */
    useLuck() 
    {
        this.view.useLuck();
        GameStatus.isLuck = false;
        ReportMonitor.OnStageRuningTools(ItemToolType.Luck);
    }

    
    /** 使用道具， 复活 */
    useHeart() 
    {
        GameStatus.isHeroAlive = true;
        this.currentLife = this.totalLife;
        this.view.useHeart();
        setTimeout(() => 
        {
            
            this.setStatus();
            this.setShopItemsStatus();
        }, 200);
        ReportMonitor.OnStageRuningTools(ItemToolType.Heart);
    }


    //=====================================
    // Effect
    //-------------------------------------
    useEffect(effectType: EffectType, effectArgs: number[])
    {
        var val = effectArgs.length > 1 ? Random.rangeBoth(effectArgs[0], effectArgs[1]) : effectArgs[0];
        switch(effectType)
        {
            case EffectType.AddArmor:
                SoundController.instance.playSound(SoundConsts.ShieldWood);
                this.armor += val;
                this.setArmor();
                break;
            case EffectType.AddHPMax:
                this.currentLife += val - 1;
                this.totalLife += val - 1;
                this.currentLife = Math.min(this.totalLife, this.currentLife);
                var tween = this.increaseLifeByOneTween();
                tween.restart()
                break
            case EffectType.AddHP:
                this.addHP(val);
                break
            case EffectType.AddHPPer:
                val = val / 100;
                val = Math.ceil(val * this.totalLife);
                this.addHP(val);
                break
        }
    }

    addHP(val: number)
    {
        this.currentLife += val;
        this.currentLife = Math.min(this.totalLife, this.currentLife);
        
        var tweenContainer = this.view.tweenLife();
        tweenContainer.onStart.addOnce(this.playHorseshoe, this);
        tweenContainer.onComplete.addOnce(this.setLife, this);
        tweenContainer.restart()
    }
    
}