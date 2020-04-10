import Game from "../../Game";

export default class GuideSender 
{
    /**
     * 获取引导的数据
     */
    async GetGuideData()
    {
        await Game.net.GamerGetNoviceGuideC2S();
    }

    async ChangeGuideData(noviceGuideList: proto.Guide[])
    {
        await Game.net.GamerNoviceGuideChangeC2S(noviceGuideList);
    }
}