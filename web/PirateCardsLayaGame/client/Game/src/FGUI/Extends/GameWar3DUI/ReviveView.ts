/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ReviveViewStruct from "../../Generates/GameWar3DUI/ReviveViewStruct";
import { War } from "../../../GameWar/Logic/War";
import { LauncherParameter } from "../../../GameWar/Logic/Struct/LauncherParameter";
import Game from "../../../Game";
import { InputManager } from "../../../GameWar/Logic/Utils/InputManager";
import { EnumInputCmd } from "../../../GameWar/Logic/Enum/InputDefine";

export default class ReviveView extends ReviveViewStruct
{
    private restReviveTime : number;

    private costList : number[];

    onWindowShow() : void
    {
        this.m_reviveBtn.onClick(this, this.CmdRevive);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.UInit();
    }

    public Init(launcher : LauncherParameter)
    {
        if(!launcher)
        {
            return;
        }
        let config = Game.config.checkPoint.getConfig(launcher.matchInfo.checkPointId);
        this.restReviveTime = 0;
        this.costList = [];
        if(!config || !config.SingleRevive)
        {
            return;
        }
        let configCostList = config.SingleRevive;
        for(let i = 0 ; i < configCostList.length ; i++)
        {
            let item = configCostList[i];
            this.costList.push(item.ItemNum);
            this.restReviveTime = Math.max(item.ItemId, this.restReviveTime);
        }
    }

    public SetVisiable(val : boolean)
    {
        if(this.restReviveTime <= 0 && val)
        {
            return;
        }
        this.visible = val;
    }

    public ReduceRestRevive()
    {
        this.restReviveTime--;
        this.m_reviveNum.text = this.restReviveTime.toString();
    }

    private CmdRevive()
    {
        let pos = War.setting.selfPos;
        if(pos < 0)
        {
            return;
        }
        if(this.restReviveTime <= 0)
        {
            return;
        }
        InputManager.Get().AddCmd(EnumInputCmd.REVIVE, [War.setting.selfPos]);
        // this.SetVisiable(false);
    }
    
    private UInit()
    {
        this.m_reviveBtn.offClick(this, this.CmdRevive);
    }
}