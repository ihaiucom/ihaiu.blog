import Game from "../../Game";

export default class SectionSender
{
    /** 关卡数据列表 */
    async sectionList()
    {
        let s2c = await Game.net.AsyncCheckPointListC2S();
        
    }

    /**
     * 领取剧情副本的章节奖励
     * @param chapterId 第几章
     * @param level 宝箱id
     */
    async getReward(chapterId: number, level: number)
    {
        return await Game.net.AsyncGetPlotStarRewardC2S(chapterId,level);
    }

    /**
     * 购买精英或魔王副本的体力
     * @param type 关卡类型，2：精英副本，3:魔王副本
     * @param num 购买体力数量
     */
    async buySectionTimes(type:proto.CheckPointType, num: number)
    {
        if(type != proto.CheckPointType.Elite && type != proto.CheckPointType.Devil)
        {
            console.error(`${type}关卡类型错误,应为${proto.CheckPointType.Elite}或${proto.CheckPointType.Devil}`);
        }
        let s2c = await Game.net.AsyncBuyTimesCheckPointC2S(type,num);
        
    }

    /**
     * 关卡扫荡
     * @param missionId 小节id
     * @param times 扫荡次数
     */
    async SweepMission(missionId: number, times: number)
    {
        return await Game.net.AsyncSweepCheckPointC2S(missionId,times);
    }
}