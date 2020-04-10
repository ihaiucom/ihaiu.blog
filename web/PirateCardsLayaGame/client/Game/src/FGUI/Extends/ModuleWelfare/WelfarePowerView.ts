/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import WelfarePowerViewStruct from "../../Generates/ModuleWelfare/WelfarePowerViewStruct";
import PowerGiveConfig from "../../../Config/ConfigExtends/PowerGiveConfig";
import Game from "../../../Game";
import GamerNotifyFatigueS2C = proto.GamerNotifyFatigueS2C;
import { DateTime } from "../../../GameFrame/Datas/GameTimeData";

export default class WelfarePowerView extends WelfarePowerViewStruct
{
    private noonConfig:PowerGiveConfig;

    private nightConfig:PowerGiveConfig;

    /*----------------------默认视图接口---------------------------*/
    /** 窗口初始化完毕 */
    onWindowInited(): void
    {
        
    }
 
    /** 窗口显示 */
    onWindowShow(): void
    {
        this.m_btnNoon.onClick(this, this.WelfareNoon);
        this.m_btnNight.onClick(this, this.WelfareNight);
        Game.net.gamerNotifyFatigueS2C.on(this.GamerNotifyFatigueS2C, this);
        Laya.timer.loop(1000, this, this.UpdateWelfareTime);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_btnNoon.offClick(this, this.WelfareNoon);
        this.m_btnNight.offClick(this, this.WelfareNight);
        Game.net.gamerNotifyFatigueS2C.off(this.GamerNotifyFatigueS2C, this);
        Laya.timer.clear(this, this.UpdateWelfareTime);

        this.Reset()
    }


    /*private----------------------UI事件操作---------------------------*/
    /** 领取午饭 */
    private WelfareNoon()
    {   
        if (this.m_btnNoon.m_State.selectedIndex == 1) 
        {
            Game.sender.power.GetFatigueWelfare(this.noonConfig.id);
        }
        else
        {
            let text = this.m_btnNoon.m_State.selectedIndex == 2 ? "已领取该福利！" : "请在规定时间内领取！"
            Game.system.toastText(text);
        }
    }

    /** 领取晚饭 */
    private WelfareNight()
    {
        if (this.m_btnNight.m_State.selectedIndex == 1) 
        {
            Game.sender.power.GetFatigueWelfare(this.nightConfig.id);
        }
        else
        {
            let text = this.m_btnNoon.m_State.selectedIndex == 2 ? "已领取该福利！" : "请在规定时间内领取！"
            Game.system.toastText(text);
        }
    }


    /*private----------------------EVENT事件操作-----------------------*/
    /** 领取福利返回 */
    private GamerNotifyFatigueS2C(msg: GamerNotifyFatigueS2C)
    {
        this.SetWelfareState(msg.fatigueInfo.welfareStatus);
    }


    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset()
    {
        this.noonConfig  = null;
        this.nightConfig = null;
        this.m_labNoon.text  = "";
        this.m_labNight.text = "";
        this.m_btnNoon.m_State.selectedIndex  = 0;
        this.m_btnNight.m_State.selectedIndex = 0;
    }

    /** 设置福利信息 */
    private SetWelfareinfo()
    {
        // 午餐
        let noonconfig = this.noonConfig;
        let startTime  = `${noonconfig.startTime.H}:${noonconfig.startTime.Mm}:${noonconfig.startTime.S}`;
        let overTime   = `${noonconfig.overTime.H}:${noonconfig.overTime.Mm}:${noonconfig.overTime.S}`;
        this.m_labNoon.text = `午餐时间：${startTime}-${overTime}`; 

        // 晚餐
        let nightconfig = this.nightConfig;
        startTime  = `${nightconfig.startTime.H}:${nightconfig.startTime.Mm}:${nightconfig.startTime.S}`;
        overTime   = `${nightconfig.overTime.H}:${nightconfig.overTime.Mm}:${nightconfig.overTime.S}`;
        this.m_labNight.text = `晚餐时间：${startTime}-${overTime}`; 
    }

    /** 设置福利领取状态 */
    private SetWelfareState(welfarestate:number)
    {
        if (welfarestate == 1) 
        {
            this.m_btnNoon.m_State.selectedIndex  = 2;
        }
        else if (welfarestate == 3)
        {
            this.m_btnNoon.m_State.selectedIndex  = 2;
            this.m_btnNight.m_State.selectedIndex = 2;
        }
    }

    /** 刷新福利时间 */
    private UpdateWelfareTime()
    {
        // 午餐
        if (this.m_btnNoon.m_State.selectedIndex != 2) 
        {
            let noonconfig = this.noonConfig;

            if (Game.time.IsExcelArrived(noonconfig.startTime)) 
            {
                this.m_btnNoon.m_State.selectedIndex = Game.time.IsExcelArrived(noonconfig.overTime) ? 3 : 1
            }
            else
            {
                this.m_btnNoon.m_State.selectedIndex = 0;
            }
        }

        // 晚餐
        if (this.m_btnNight.m_State.selectedIndex != 2) 
        {
            let nightconfig = this.nightConfig;

            if (Game.time.IsExcelArrived(nightconfig.startTime)) 
            {
                this.m_btnNight.m_State.selectedIndex = Game.time.IsExcelArrived(nightconfig.overTime) ? 3 : 1
            }
            else
            {
                this.m_btnNight.m_State.selectedIndex = 0;
            }
        }
    }


    /*public----------------------外部接口---------------------------*/
    /** 打开界面 */
    public Open()
    {
        let noonconfig  = this.noonConfig;
        let nightconfig = this.nightConfig;
        if (!noonconfig || !nightconfig) 
        {
            noonconfig  = Game.config.powerGive.getConfig(1);
            nightconfig = Game.config.powerGive.getConfig(2);
            this.noonConfig  = noonconfig;
            this.nightConfig = nightconfig;
        }
        
        this.SetWelfareinfo();
        this.UpdateWelfareTime()
        this.SetWelfareState(Game.moduleModel.power.welfareStatus);
    }
}