import Game from "../../Game";

export default class QuestSender 
{
    /** 请求任务列表 */
    async QuestList()
    {
        let s2c = await Game.net.AsyncGetQuestsC2S();
        if(s2c.error)
        {
            return;
        } 
    }

    /** 请求任务领取 */
    async QuestGetReward(questId:number)
    {
        let s2c = await Game.net.AsyncGetQuestRewardC2S(questId);
        if(s2c.error)
        {
            return;
        } 
    }

    /** 请求领取活跃礼包 */
    async QuestGettDailyQuestReward(rewardActive:number)
    {
        let s2c = await Game.net.AsyncGetDailyQuestRewardC2S(rewardActive);
        if(s2c.error)
        {
            return;
        } 
    }
}