/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import InfoViewStruct from "../../Generates/GameWar3DUI/InfoViewStruct";
import TimeHelper from "../../../GameHelpers/TimeHelper";
import { War } from "../../../GameWar/Logic/War";
import GameLog, { EnumLogLevel } from "../../../GameLog";
import { EnumMapBattleMode } from "../../../GameWar/Logic/Enum/MapEnums";
import Game from "../../../Game";
import SceneConfigManager from "../../../GameWar/Logic/Struct/ConfigManagers/SceneConfigManager";

export default class InfoView extends InfoViewStruct
{
    private _lastTime = 0;

    private readonly _redColor : string = "#FF0000";
    private readonly _whiteColor : string = "#FFFFFF";

    private readonly _redTime : number = 60 * 1000;

    updateView()
    {
        // this.m_labTime.changeText(TimeHelper.TimeFormatHHMMSS(War.setting.matchLeftTime / 1000));
        this.UpdateTime(War.setting.matchLeftTime);
    }

    public Init(data : pbconfig.SectionData)
    {
        if(!data)
        {
            GameLog.Log(EnumLogLevel.Error, "初始化UI关卡信息出错，相应的地图配置为NULL");
        }
        this.InitSectionMode(data);
        this.m_rush_time.color = this._whiteColor;
        this.m_battle_time.color = this._whiteColor;

        
    }

    /**
     * 波次设置
     * @param nowWave 当前波次
     * @param totalWave 总波次
     */
    public WaveSet(nowWave : number, totalWave : number)
    {
        if(nowWave < 0 || totalWave < 0)
        {
            GameLog.Log(EnumLogLevel.Warning, "UI波次设置出现负数。");
            return;
        }
        
        if(this.m_wave_progress.value != nowWave || this.m_wave_progress.max != totalWave)
        {
            this.m_wave_progress.value = nowWave;
            this.m_wave_progress.max = totalWave;
            this.m_text_defence_wave.changeText(nowWave.toString() + "/" + totalWave.toString());
        }
    }

    /**
     * 时间更新
     * @param time 时间为毫秒
     */
    private UpdateTime(time : number)
    {
        if(time == this._lastTime)
        {
            return;
        }
        time = Math.max(0, time);
        switch(this.m_state.selectedPage)
        {
            case "battle" :
            case "defence" :
                this.m_battle_time.changeText(TimeHelper.TimeFormatHHMMSS(Math.round(time / 1000)));
                if(time < this._redTime && this.m_battle_time.color != this._redColor)
                {
                    this.m_battle_time.color = this._redColor;
                }
                break;
            case "rush" :
                let msTime = Math.floor((time % 1000) / 10);
                let msText = ":";
                if(msTime < 10)
                {
                    msText += "0" + msTime.toString();
                }
                else
                {
                    msText += msTime.toString();
                }
                this.m_rush_time.changeText(TimeHelper.TimeFormatHHMMSS(Math.round(time / 1000)) + msText);
                if(time < this._redTime && this.m_rush_time.color != this._redColor)
                {
                    this.m_rush_time.color = this._redColor;
                }
                break;
            case "secret":
                this.m_secretBattleInfo.Update(time);
                break;
        }
        this._lastTime = time;
    }
    
    /**
     * 初始化关卡类型
     * @param mode 关卡类型
     */
    private InitSectionMode(data: pbconfig.SectionData)
    {
        let mode = data.BattleMode;
        switch(mode)
        {
            case EnumMapBattleMode.CommonBattle:
                this.m_state.setSelectedPage("battle");
                break;
            case EnumMapBattleMode.DefenseBattle:
                this.m_state.setSelectedPage("defence");
                this.m_wave_progress.value = 0;
                this.m_wave_progress.max = SceneConfigManager.maxBattleIndex;
                this.m_text_defence_wave.changeText(this.m_wave_progress.value + "/" + this.m_wave_progress.max);
                break;
            case EnumMapBattleMode.HurryUpBattle:
                this.m_state.setSelectedPage("rush");
                break;
            case EnumMapBattleMode.SecretBattle:
                this.m_state.setSelectedPage("secret");
                let checkPoint = War.launcherParameter.matchInfo.checkPointId;
                this.m_secretBattleInfo.Init(checkPoint);
                break;
            default :
                this.m_state.setSelectedPage("battle");
                break;
        }
    }
}