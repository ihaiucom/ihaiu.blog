import MModel from "../../GameFrame/Module/MModel";
import FatigueInfoData from "../DataStructs/FatigueInfoData";
import Game from "../../Game";
import BuyFatigueS2C = proto.BuyFatigueS2C;
import IFatigueInfo = proto.IFatigueInfo;

export default class PowerModel extends MModel 
{
    private fatigueInfo:IFatigueInfo;

    /** 设置体力信息 */
    public SetFatigueInfo(fatigueInfo:IFatigueInfo)
    {
        this.fatigueInfo = fatigueInfo;
    }

    /** 获取体力信息 */
    public GetFatigueInfo()
    {
        return this.fatigueInfo;
    }

    /** 体力值 */
    public get fatigueNum():number
    {
        let resetTime = Game.time.localTimeS - this.lastUpdateTime;
        let cdTime  = Global.powerIncrease;
        let fatigue = this.fatigueInfo.fatigueNum + Math.floor(resetTime / cdTime);
        
        return (fatigue <= this.maxFatigueNum) ? fatigue : this.fatigueInfo.fatigueNum
    }

    /** 体力上限 */
    public get maxFatigueNum():number
    {
        return this.fatigueInfo.maxFatigueNum;
    }

    /** 上次更新体力值时间 */
    public get lastUpdateTime():number
    {
        let time = this.fatigueInfo ? this.fatigueInfo.lastUpdateTime : Game.time.serverSeconds;
        return time;
    }

    /** 领取状态 */
    public get welfareStatus():number
    {
        return this.fatigueInfo.welfareStatus;
    }

    /** 领取时间 */
    public get lastGetWelfareTime():number
    {
        return this.fatigueInfo.lastGetWelfareTime;
    }

    /** 购买次数 */
    public GetBuyTimes(id:number, fatigueInfo?:IFatigueInfo):number
    {
        let buytimes = fatigueInfo ? fatigueInfo.buyTimes : this.fatigueInfo.buyTimes;
        
        if (!buytimes || !buytimes.length) 
        {
            return 0;
        }

        for (let i = 0, len = buytimes.length; i < len; i++) 
        {
            let times = buytimes[i];
            if (id == times.id) 
                return times.times;
        } 
    }
}