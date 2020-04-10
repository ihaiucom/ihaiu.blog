import Game from "../../Game";

export default class PVPSender
{
    async getDanInfo()
    {
        let s2c = await Game.net.AsyncGetDanInfoC2S();
    }

    /**
     *决斗神殿排行榜（天梯榜，名人堂）
     *
     * @param {proto.RankType} type Server天梯榜本服，Total天梯榜总榜，hallOfFame名人堂
     * @param {number} seasonId 
     * @param {number} start 
     * @param {number} length
     * @returns
     * @memberof PVPSender
     */
    async getDuelRank(type: proto.RankType, seasonId: number, start: number, length: number)
    {
        return await Game.net.AsyncGetDuelRankC2S(type,seasonId, start, length);
    }

}