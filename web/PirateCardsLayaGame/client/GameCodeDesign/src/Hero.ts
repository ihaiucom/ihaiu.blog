import CardBase from "./CardBase";
import Card from "./Card";

export default class Hero extends CardBase
{
    /** 当前生命 */
    currentLife: number = 0;

    /** 最大生命 */
    totalLife: number = 0;

    /** 当前防护 */
    armor: number = 0;

    
    // CardScoreType.Lightning
    needRunLightning: boolean = false;
    lightningScore: number = 0;

    //  CardScoreType.Cannon
    needShoot: boolean = false;
    shootScore: number = 0;

    // CardScoreType.Multiplier
    needShootMultiplier: boolean = false;
    multiplierScore: number = 0;


    // CardScoreType.Skull
    needShootSkull: boolean = false;

    /** 战斗 */
    fight(card: Card) : FightResult
    {
        var fightResult = new FightResult(true, false, true);
        return fightResult;
        
    }

    
    /** 刷新步骤 */
    stepUpdate() 
    {

    }

    /** 获取分数 */
    getScore() 
    {
        return this.currentLife + this.armor
    }
    
    
    
    // 减少血量, 延迟
    reduceScoreInNSeconds(score, delay) 
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


    // 添加血量, 延迟
    increaseScoreInNSeconds(score, delay) 
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

    
    setShopItemsStatus() 
    {
    }

    
    /** 使用道具， 生命 */
    useHeart() 
    {
    }

    
    getGoldValue() 
    {
        return 0
    }

    
}