import AbstractCard from "./AbstractCard";

export default class NullCard extends AbstractCard
{
    
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
        return 0;
    }

    /** 获取金币数量 */
    getGoldValue(): number 
    {
        return 0;
    }

    /** 减少血量, 延迟 */
    reduceScoreInNSeconds(score: number, delay: number) 
    {
    }

    
    /** 添加血量, 延迟 */
    increaseScoreInNSeconds(score: number, delay: number) 
    {
    }
}