/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretBattleViewStruct from "../../Generates/GameWar3DUI/SecretBattleViewStruct";
import Game from "../../../Game";
import TimeHelper from "../../../GameHelpers/TimeHelper";
import GameLog, { EnumLogLevel } from "../../../GameLog";

export default class SecretBattleView extends SecretBattleViewStruct
{
    /** 表示超过这个时间不获取奖励，策划没配置的时候显示的时间 */
    static readonly defaultGetRewardTime = 3;

    /** 总时间 */
    private totalTime : number
    /** 当前的时间 */
    private nowTime : number;
    /** 当前层级等级 */
    private level : string;
    /** 进度条总长度代表的时间 */
    private progressFullNumTime : number

    private rewardTime : number[];

    public Init(checkPoint : number)
    {
        let config = Game.config.checkPoint.getConfig(checkPoint);
        this.rewardTime = [];
        if(config)
        {
            this.totalTime = config.time;
            this.nowTime = this.totalTime;
            if(config.secretlandTime && config.secretlandTime.length >= 3)
            {
                this.progressFullNumTime = config.secretlandTime[2];
                for(let i = 0; i < config.secretlandTime.length ; i++)
                {
                    this.rewardTime.push(config.secretlandTime[i]);
                }
            }
            else
            {
                this.rewardTime.push(1);
                this.rewardTime.push(2);
                this.rewardTime.push(3);
                this.progressFullNumTime = SecretBattleView.defaultGetRewardTime;
                GameLog.Log(EnumLogLevel.Error, "秘境时间配置错误");
            }
        }
        else
        {
            this.totalTime = 999;
            this.nowTime = this.totalTime;
            GameLog.Log(EnumLogLevel.Error, "没有相应的秘境配置, checkPoint为：" + checkPoint.toString());
        }
        // TODO yapengyu 之后读取大秘境层级
        this.level = "12层";
        this.m_nowTime.text = TimeHelper.TimeFormatHHMMSS(this.nowTime);
        this.m_totalTime.text = TimeHelper.TimeFormatHHMMSS(this.totalTime);
        this.m_secretProgress.value = 100;
        
        let devide1 = this.m_secretProgress.getChild("devide1");
        let devide2 = this.m_secretProgress.getChild("devide2");
        let bar = this.m_secretProgress.getChild("bar");
        if(devide1 && devide2 && bar)
        {
            let per = this.rewardTime[0] / this.progressFullNumTime
            let offsetX = per * bar.width;
            let posX = bar.x + offsetX;
            devide1.x = posX;
            per = this.rewardTime[1] / this.progressFullNumTime;
            offsetX = per * bar.width;
            posX = bar.x + offsetX;
            devide2.x = posX;
        }
        
    }
    
    /**
     * 
     * @param time 单位毫秒
     */
    public Update(time : number)
    {
        let sTime = Math.floor(time / 1000);
        sTime = this.totalTime - sTime;
        this.m_nowTime.text = TimeHelper.TimeFormatFixedMMSS(sTime);
        let per = (this.progressFullNumTime - sTime) / this.progressFullNumTime;
        this.m_secretProgress.value = per * 100;
    }




}