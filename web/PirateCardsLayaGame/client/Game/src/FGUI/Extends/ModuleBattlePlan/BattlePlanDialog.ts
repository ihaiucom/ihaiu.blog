/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BattlePlanDialogStruct from "../../Generates/ModuleBattlePlan/BattlePlanDialogStruct";
import Game from "../../../Game";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import GameLog, { EnumLogLevel } from "../../../GameLog";
import GameEventKey from "../../../GameEventKey";
import TEXT from "../../../Config/Keys/TEXT";

export default class BattlePlanDialog extends BattlePlanDialogStruct
{
    private callback: Function;
    private dialogCtrl: DialogCtrl;

    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);
        this.dialogCtrl = new DialogCtrl().init(this);
        this.dialogCtrl.setCloseBtnEvent();
    }

    onWindowShow(): void
    {
        this.m_hitCommonPanel.m_btnClose.onClick(this, this.Close);   
        // this.m_ChangePanel.m_btnClose.onClick(this, this.Close);   
        // this.m_text_ChangeNameTip.visible = false;
    }

    onWindowHide(): void
    {
        
        this.m_hitCommonPanel.m_btnClose.offClick(this, this.Close);
        // this.m_ChangePanel.m_btnClose.offClick(this, this.Close); 
        this.m_btnUnlockTeam.offClick(this, this.UnlockTeam);
        this.m_btnUnlockTeam.offClick(this, this.Close);
        this.m_btnHitCentern.offClick(this, this.Close);
        this.m_WarnHitCenterBtn.offClick(this, this.Close);
        this.m_comTextInput.m_title.off(Laya.Event.INPUT, this, this.InputTextChange);
        Game.event.remove(GameEventKey.GameFrame_BattlePlanChangeTeamName, this.Close, this);
        this.m_comTextInput.m_title.text = "";
    }
    /**
     * 打开解锁队伍的界面
     * @param teamIndex 表里的UID
     */
    public OpenUnlockTeamDialog(teamIndex : number)
    {
        let config = Game.config.heroTeam.getConfig(teamIndex);
        if(!config)
        {
            GameLog.Log(EnumLogLevel.Error, "HeroTeam的表配置有问题，请检查，id为" + teamIndex);
            return;
        }
        this.dialogCtrl.open();
        this.m_state.setSelectedPage("TeamLockTip");
        this.m_ComUnlockCost.m_State.setSelectedPage("UnlockTeamCost");
        let cost = config.cost;
        if(cost.length > 0)
        {
            this.m_ComUnlockCost.m_textCost.text = config.cost[0].ItemNum.toString();
        }
        else
        {
            this.m_ComUnlockCost.m_textCost.text = "0";
        }

        let unlockLevel = config.needLevel ? config.needLevel : 0;
        this.m_textTeamUnlcok.text = "主公等级达到" + unlockLevel.toString() + "级后将免费解锁该队伍";

        this.m_btnUnlockTeam.onClick(this, this.UnlockTeam, [teamIndex])
        this.m_btnUnlockTeam.onClick(this, this.Close);
        this.m_btnHitCentern.onClick(this, this.Close);
    }
    /**
     * 打开更改队伍名字界面
     * @param teamIndex 
     */
    public OpenChangeTeamName(teamIndex : number)
    {
        this.dialogCtrl.open();
        this.m_state.setSelectedPage("ChangeTeamName");
        this.m_btnChangeNameCentern.onClick(this, this.ChangeTeamName, [teamIndex]);
        this.m_comTextInput.m_title.on(Laya.Event.INPUT, this, this.InputTextChange);
        Game.event.add(GameEventKey.GameFrame_BattlePlanChangeTeamName, this.Close, this);
    }

    public OpenWarnHit()
    {
        this.dialogCtrl.open();
        this.m_state.setSelectedPage("WarnHit");
        this.m_WarnHitCenterBtn.onClick(this, this.Close);
    }

    /**
     * 修改名字时候监听
     */
    private InputTextChange()
    {
        let text = this.m_comTextInput.m_title.text;
        
        let strLen = text.lengthChar();
        let beforeLen = 0;
        let len = 0;
        let teamIndex = Game.moduleModel.battlePlan.nowSelectTeam;
        let nameMax : number = Game.config.heroTeam.getConfig(teamIndex).nameValue;
        for(let i = 0 ; i < text.length ; i++)
        {
            let charCode = text.charCodeAt(i);
            if (charCode >= 0 && charCode <= 128) 
            {
                len += 1;
            }
            else
            {
                len += 3;
            }
            if(len > nameMax)
            {
                break;
            }
            beforeLen ++;
        }
        text = text.substr(0, beforeLen);
        this.m_comTextInput.m_title.text = text;

    }

    /**
     * 解锁队伍的方法
     * @param teamIndex .
     */
    private UnlockTeam(teamIndex : number)
    {
        if(teamIndex == 1)
        {
            return;
        }
        let model = Game.moduleModel.battlePlan;
        let teamInfo = model.GetTeamInfo(teamIndex - 1);
        if(!teamInfo)
        {
            Game.system.alertText("请先解锁上面的队伍");
            return;
        }

        Game.sender.battlePlan.UnlockHeroGroup(teamIndex);
    }
    /**
     * 换队伍名字
     * @param teamIndex 
     */
    private ChangeTeamName(teamIndex : number)
    {
        let name : string = this.m_comTextInput.m_title.text;
        if(!this._reg.test(name))
        {
            Game.system.toastText(TEXT.ErrorFormatName);
            return;
        }
        let nameMax : number = Game.config.heroTeam.getConfig(teamIndex).nameValue;
        let beforeName : string = Game.moduleModel.battlePlan.GetTeamInfo(teamIndex).name;
        if(name == beforeName || name.length <= 0 || name.length > nameMax)
        {
            this.Close();
            return;
        }

        if(name.length > 8)
        {
            name = name.substr(0, 8); 
        }

        Game.sender.battlePlan.ChangeNameHeroGroup(teamIndex, name);
        
    }
    /**
     * 关闭当前页面
     */
    private Close()
    {
        this.dialogCtrl.close();
    }

    private get _reg(): RegExp
    {
        return new RegExp("^([0-9]|[a-zA-Z]|[\u4E00-\u9FFF])+$","g");
    }
}