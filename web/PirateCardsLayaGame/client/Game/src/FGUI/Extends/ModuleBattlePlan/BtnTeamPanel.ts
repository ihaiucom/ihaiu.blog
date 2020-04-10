/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BtnTeamPanelStruct from "../../Generates/ModuleBattlePlan/BtnTeamPanelStruct";
import BattlePlanModel from "../../../GameModule/DataModels/BattlePlanModel";
import Game from "../../../Game";
import HeroGroupData from "../../../GameModule/DataStructs/HeroGroupData";
import BattlePlanWindowUI from "./BattlePlanWindowUI";

export default class BtnTeamPanel extends BtnTeamPanelStruct
{
    windowUI : BattlePlanWindowUI;

    public model : BattlePlanModel;
    public data : HeroGroupData;
    /** UI中list对应的下标 */
    public teamIndex : number = -1;
    /** 对应配置里的UID */
    public teamUid : number = -1;
    public isLock : boolean = false;
    onWindowInited(): void
    {
        
    }

    // 窗口显示
    onWindowShow(): void
    {   
        
    }

    Init(teamIndex : number, data : HeroGroupData, dataUid : number, windowUI : BattlePlanWindowUI)
    {
        if(!windowUI)
        {
            return;
        }
        this.windowUI = windowUI;
        this.model = Game.moduleModel.battlePlan;
        this.teamIndex = teamIndex;
        this.teamUid = dataUid;
        this.data = data;
        if(!this.data)
        {
            this.SetState("locked");
            this.isLock = true;
        }
        else
        {
            this.SetState("unChoosen");
            this.RefreshName();
        }
    }

    dispose()
    {
        this.Reset();
    }

    Reset()
    {
        this.windowUI = null;
        this.model = null;
        this.teamIndex = -1;
        this.teamUid = -1;
        this.isLock = false;
    }

    public ChooseTeam()
    {
        if(this.isLock)
        {
            return;
        }
        this.SetState("choosen");
    }

    public UnChooseTeam()
    {
        if(this.isLock)
        {
            return;
        }
        this.SetState("unChoosen");
    }

    public UnLockTeam(teamUid : number)
    {  
        this.data = this.model.GetTeamInfo(teamUid);
        if(!this.data)
        {
            return;
        }
        this.isLock = false;
        this.UnChooseTeam();
        this.RefreshName();
    }

    public RefreshName()
    {
        if(!this.data)
        {
            return;
        }
        this.m_title.text = this.data.name;
    }

    public PanelOnClick()
    {
        switch(this.m_state.selectedPage)
        {
            case "locked":
                this.LockedOnClick();
                break;
            case "unChoosen":
                this.UnChoosenOnClick();
                break;
        }
            
    }
    /**
     * 未开放对应的按钮事件
     */
    private LockedOnClick()
    {
        Game.system.BattlePlanDialogUnLockTeam(this.teamUid);
        
    }
    /**
     * 未选中队伍对应的按钮事件
     */
    private UnChoosenOnClick()
    {
        if(!this.windowUI || !this.data)
        {
            return;
        }
        this.windowUI.SetNewSelectedTeam(this.teamIndex);
    }


    private SetState(pageState : string)
    {
        this.m_state.setSelectedPage(pageState);
    }

    

    
}