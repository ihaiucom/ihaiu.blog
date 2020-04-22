import CardBase from "./CardBase";
import { CardScoreType } from "./Enums/CardScoreType";

export default class Card extends CardBase
{
    /** 生命--初始 */
    initialLife = 0;
    /** 生命--当前 */
    lifeAmount = 0;
    /** 能力--当前 */
    powerUpAmount = 0;

    /** 卡牌类型 */
    type: CardScoreType;

    
    /** 刷新步骤 */
    stepUpdate() 
    {
    }

    /** 获取分数 */
    getScore() 
    {
        return this.type == CardScoreType.Trap ? this.lifeAmount: this.lifeAmount + this.powerUpAmount
    }
    
    
    /** 乘 分数 */
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

    /** 设置卡牌分数 */
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
            break;
        case CardScoreType.Chest:
            break;
        case CardScoreType.Horseshoe:
            this.setPowerUp(1)
        }
    }

    /** 设置, 生命--当前 */
    setLife(val?: number) 
    {
        if(val != undefined)
        {
            this.lifeAmount = val;
        }
        this.setHealthText()
    }

    /** 设置， 能力--当前 */
    setPowerUp(t) 
    {
        this.powerUpAmount = t,
        this.setPowerUpText()
    }
    
    /** 是否是坏牌 */
    isNegative(): boolean
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

        return false;
    }

    /** 获取金币数量, 等于初始生命 */
    getGoldValue(): number
    {
        return this.initialLife;
    }



}