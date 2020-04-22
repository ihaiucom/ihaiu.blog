import CardBase from "./CardBase";

export default class NullCard extends CardBase
{
    /** 获取分数 */
    getScore(): number
    {
        return 0;
    }

    /** 减少血量, 延迟 */
    reduceScoreInNSeconds(score, delay) 
    {

    }

    /** 添加血量, 延迟 */
    increaseScoreInNSeconds(score, delay) 
    {
    }

    /** 刷新步骤 */
    stepUpdate()
    {

    }

    /** 是否是坏牌 */
    isNegative(): boolean
    {
        return false;
    }

    /** 获取金币数量 */
    getGoldValue(): number
    {
        return 0;
    }


}