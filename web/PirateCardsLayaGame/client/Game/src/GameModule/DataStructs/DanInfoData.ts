import Game from '../../Game';
import TimeHelper from '../../GameHelpers/TimeHelper';
import TEXT from '../../Config/Keys/TEXT';
export default class DanInfoData extends proto.DanInfo
{
    /** 段位id */
    danId: number;
    /** 星级  */
    star: number;
    /** 积分  */
    rewardPoint: number;
    /** 赛季id  */
    seasonId: number;
    /** 战斗次数 */
    BattleTimes: number;
    /** 战斗获胜次数  */
    BattleWinTimes: number;

    public static Create(danInfo: proto.IDanInfo): DanInfoData
    {
        let data = new DanInfoData();
        for(let k in danInfo)
        {
            data[k] = danInfo[k];
        }
        return data;
    }

    public get seasonDuration(): string
    {
        let config = this.seasonConfig;
        if(config)
        {
            return TEXT.DuelSeasonDuration.format(config.startTimeStr, config.overTimeStr);
        }
        return "";
    }

    public get hasNewSeason(): boolean
    {
        let hasNew = false;
        let newConfig = Game.config.duelSeason.getConfig(this.seasonId+1);
        if(newConfig)
        {
            let date = newConfig.startTime;
            let stamp = this.convertToStamp(date);
            hasNew = TimeHelper.TimeleftIsOver(stamp);
        }
        return hasNew;
    }

    public get seasonDaysLeft()
    {
        let date = this.seasonConfig.overTime;
        let stamp = this.convertToStamp(date);
        let days = TimeHelper.DaysLeft(stamp);
        return days;
    }

    public get seasonRemainTime(): string
    {
        let date = this.seasonConfig.overTime;
        let stamp = this.convertToStamp(date);
        let str = "";
        if(this.seasonDaysLeft <= 0)
        {
            str = TimeHelper.TimeleftHHMMSS(stamp);
        }
        else if( this.seasonDaysLeft <= 3)
            str = this.seasonDaysLeft + "天";
        return TEXT.DuelSeasonRemainDays.format(str);
    }

    public get timeIsOver(): boolean
    {
        let date = this.seasonConfig.overTime;
        let stamp = this.convertToStamp(date);
        return TimeHelper.TimeleftIsOver(stamp);
    }

    public get iconUrl(): string
    {
        return this.config.iconUrl;
    }

    public get name(): string
    {
        return this.config.name;
    }

    public get currentWinTimes(): string
    {
        return TEXT.DuelCurrentWinTimes.format(this.BattleWinTimes);
    }

    public get starCount(): number
    {
        return this.config.star;
    }

    public get maxJDScore(): number
    {
        return this.config.maxJDScore;
    }

    public get loseBaseJDScore(): number
    {
        return this.config.loseBaseJDScore;
    }

    private convertToStamp(d: excelconfig.IDTDateTime)
    {
        let str = `${d.Y}-${d.M}-${d.D} ${d.H}:${d.M}:${d.S}`;
        return TimeHelper.ToTimeStamp(str);
    }
    
    private get config()
    {
        return Game.config.duelDan.getConfig(this.danId);
    }

    private get seasonConfig()
    {
        return Game.config.duelSeason.getConfig(this.seasonId);

    }
}