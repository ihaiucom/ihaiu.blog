/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HomeWindowUIStruct from "../../Generates/SystemModuleHome/HomeWindowUIStruct";
import HomeWindow from "../../../GameModule/ViewWindows/HomeWindow";
import Game from "../../../Game";
import MenuLayer from "../../../GameFrame/Menu/MenuLayer";
import GuideModel, { GuideGroup } from "../../../GameModule/DataModels/GuideModel";
import { GuideHelper } from "../../../GameModule/GuideModule/GuideHelper";
import { EnumGuideTriggerType, EnumGuideType } from "../../../GameModule/GuideModule/GuideEnum";
import GameEventKey from "../../../GameEventKey";
import GameLog, { EnumLogLevel } from "../../../GameLog";
import GuideData from "../../../GameModule/DataStructs/GuideData";
import { GuideMgr } from "../../../GameModule/GuideModule/GuideMgr";
import TEXT from "../../../Config/Keys/TEXT";

export default class HomeWindowUI extends HomeWindowUIStruct
{
    /** 窗口 */
    moduleWindow: HomeWindow;

    private _battleEnterParent : any = null;

    /*----------------------默认视图接口---------------------------*/
    /** 窗口初始化完毕 */
    onWindowInited(): void
    {
        
    }

    /** 窗口显示 */
    onWindowShow(): void
    {

        
    }

    onShow() : void
    {
        // 检查新手引导
        if(GuideMgr.isShowingHomeDialog)
        {
            Game.event.add(GameEventKey.GameFrame_HideOpenDialog, this.CheckGuide, this);
        }
        else
        {
            Laya.timer.once(50, this, this.CheckGuide);
        }
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
    }

    /*private----------------------内部接口--------------------------*/

    /*public----------------------外部接口---------------------------*/
    /** 打开底栏 */
    public OpenBottom()
    {
        this.m_barBottom.Open();
    }

    /** 打开顶栏 */
    public OpenTop()
    {
        this.m_barTop.Open();
    }

    /** 打开左上栏 */
    public OpenLeftTop()
    {
        this.m_barLeftTop.Open();
    }

    /** 打开左底栏 */
    public OpenLeftBottom()
    {
        this.m_barLeftBottom.Open();
    }

    /** 打开右上栏 */
    public OpenRightTop()
    {
        this.m_barRightTop.Open();
    }

    /** 打开右底栏 */
    public OpenRightBottom()
    {
        // this.m_barRightBottom.Open();
    }

    /** 打开中间栏 */
    public OpenCenter()
    {
        this.m_barCenter.Open();
    }


    /**
     * 检测新手引导
     */
    private CheckGuide()
    {
        let model = Game.moduleModel.guide;
        if(!model)
        {
            return;
        }
        let guideMgr = Game.system.guideMgr;
        let id = guideMgr.CheckGuideList(EnumGuideTriggerType.BATTLE_GUIDE);

        let data = model.GetData(GuideGroup.PVE_BATTLE);
        if(data && !data.isOver)
        {
            this.GuideBattle(model, GuideGroup.PVE_BATTLE)
            return;
        }
     
        data = model.GetData(GuideGroup.HERO_LEVELUP);
        if(data && !data.isOver)
        {
            this.GuideHero(data);
            return;
        }
        data = model.GetData(GuideGroup.HERO_EQUIP);
        if(data && !data.isOver)
        {
            this.GuideHero(data);
            return;
        }

        data = model.GetData(GuideGroup.BATTLE_PLAN_SECOND);
        if(data && !data.isOver && data.CheckProgress(1))
        {
            this.GuideBattle(model, GuideGroup.BATTLE_PLAN_SECOND, false);
            return;
        }
        data = model.GetData(GuideGroup.BATTLE_ENTER_1_2);
        if(data && !data.isOver  && data.CheckProgress(1))
        {
            this.GuideBattle(model, GuideGroup.BATTLE_ENTER_1_2);
            return;
        }
        data = model.GetData(GuideGroup.BATTLE_ENTER_1_3);
        if(data && !data.isOver  && data.CheckProgress(1))
        {
            this.GuideBattle(model, GuideGroup.BATTLE_ENTER_1_3);
            return;
        }
        data = model.GetData(GuideGroup.BATTLE_ENTER_1_4);
        if(data && !data.isOver  && data.CheckProgress(1))
        {
            this.GuideBattle(model, GuideGroup.BATTLE_ENTER_1_4, false);
        }
        data = model.GetData(GuideGroup.BATTLE_ENTER_1_6);
        if(data && !data.isOver  && data.CheckProgress(1))
        {
            this.GuideBattle(model, GuideGroup.BATTLE_ENTER_1_6, false);
        }
        data = model.GetData(GuideGroup.BATTLE_ENTER_2_1);
        if(data && !data.isOver  && data.CheckProgress(1))
        {
            this.GuideBattle(model, GuideGroup.BATTLE_ENTER_1_6, false);
        }

        data = model.GetData(GuideGroup.EQUIP_LEVELUP);
        if(data&& !data.isOver) // && data.CheckProgress(0) 
        {
            this.GuideEquip(data);
            return;
        }

        data = model.GetData(GuideGroup.BATTLE_ENTER_SPECIAL_1);
        if(data && !data.isOver   && data.CheckProgress(1))
        {
            this.GuideBattle(model, GuideGroup.BATTLE_ENTER_SPECIAL_1, false);
            return;
        }
        data = model.GetData(GuideGroup.Guide_Finish);
        if(data && !data.isOver)
        {
            data.FinishGuide();
            // Game.system.toastText(TEXT.GuideFinish);
            // let model = Game.moduleModel.guide;
            // if(!model)
            // {
            //     GameLog.Log(EnumLogLevel.Error, "SectionWindowUI, FinishGuide error");
            //     return;
            // }
            // model.DataGotoNextStep(Game.system.guideMgr.nowGuideGroup);
        }
    }

    /**
     * 
     * @param model 
     * @param typeID 
     * @param goNext 表示是否进入下一步 
     */
    private GuideBattle(model : GuideModel, typeID : number, goNext : boolean = true)
    {
        if(!model)
        {
            return;
        }

        let data = model.GetData(typeID);
        if(!data)
        {
            data = model.AddNewGuideData(typeID);
        }

        if(data)
        {   
            let btn = this.m_barBottom.m_btnStart;
            let pos = GuideHelper.GetObjGlobalPosInLeftTopPovit(btn);// btn.parent.localToGlobal(btn.x, btn.y);
            this._battleEnterParent = btn.parent;
            GuideHelper.ChangeObjParent(btn, Game.system.guideMgr.otherNode);
            if(goNext)
            {
                Game.system.guideMgr.ChangeGuideDialog(pos.x, pos.y, btn.width, btn.height);
                Game.event.add(GameEventKey.GameFrame_BattleEnterOnClick, this.BattleRecover, this);
            }
            else
            {
                Game.system.guideMgr.ShowGuideDialog(0, 0, 0, 0);
                Game.system.guideMgr.ShowFinger(pos.x, pos.y);
                let text = Game.config.msg.getConfig(TEXT.GuideGoToBattle).zhCnNotice ? Game.config.msg.getConfig(TEXT.GuideGoToBattle).zhCnNotice : "";
                Game.system.guideMgr.ShowTextNode(pos.x, pos.y, 1, text);
                Game.event.add(GameEventKey.GameFrame_BattleEnterOnClick, this.BattleRecoverWithOutNext, this);
            }
            // btn.onClick(this, this.BattleRecover, [btn, beforeParent]);
        }
    }

    private BattleRecover()
    {
        let model = Game.moduleModel.guide;
        if(!model )
        {
          GameLog.Log(EnumLogLevel.Error, "HomeWindowUI, BattleRecover error");
          return;
        }
        GuideHelper.ChangeObjParent(this.m_barBottom.m_btnStart, this._battleEnterParent);
        Game.event.remove(GameEventKey.GameFrame_BattleEnterOnClick, this.BattleRecover, this);

        let guideMgr = Game.system.guideMgr;
        let guideGroupID = guideMgr.nowGuideGroup;
        model.DataGotoNextStep(guideGroupID);
    }

    private BattleRecoverWithOutNext()
    {
        let model = Game.moduleModel.guide;
        if(!model )
        {
          GameLog.Log(EnumLogLevel.Error, "HomeWindowUI, BattleRecover error");
          return;
        }
        GuideHelper.ChangeObjParent(this.m_barBottom.m_btnStart, this._battleEnterParent);
        Game.event.remove(GameEventKey.GameFrame_BattleEnterOnClick, this.BattleRecover, this);
    }
    

    /**
     * 进入英雄界面引导
     * @param data 
     */
    private GuideHero(data : GuideData)
    {
        if(data)
        {
            
            let btn = this.m_barBottom.m_listMenu.getChildAt(1);
            let pos = GuideHelper.GetObjGlobalPosInLeftTopPovit(btn, 1);// btn.parent.localToGlobal(btn.x, btn.y);
            Game.system.guideMgr.ChangeGuideDialog(pos.x, pos.y, btn.width, btn.height);

            GuideHelper.FguiListChangeByIndex(1, this.m_barBottom.m_listMenu, this.m_barBottom.GuideOpenMenuHelper, this.m_barBottom);
            // GuideHelper.ChangeObjParent(btn, Game.system.guideMgr.otherNode);
            Game.event.add(GameEventKey.GameFrame_HomeHeroBtnOnClick, this.GuideHeroFinish, this);
            
            // btn.onClick(this, this.BattleRecover, [btn, beforeParent]);
        }
    }

    /**
     * 结束进入英雄界面引导
     */
    private GuideHeroFinish()
    {
        let model = Game.moduleModel.guide;
        if(!model )
        {
          GameLog.Log(EnumLogLevel.Error, "HomeWindowUI, GuideHeroFinish error");
          return;
        }
        model.DataGotoNextStep(Game.system.guideMgr.nowGuideGroup);
        Game.event.remove(GameEventKey.GameFrame_HomeHeroBtnOnClick, this.GuideHeroFinish, this);
    }

    /**
     * 进入装备界面引导
     * @param data 
     */
    private GuideEquip(data : GuideData)
    {
        if(data)
        {
            let index = 3;
            let btn = this.m_barBottom.m_listMenu.getChildAt(index);
            let pos = GuideHelper.GetObjGlobalPosInLeftTopPovit(btn, index);
            Game.system.guideMgr.ChangeGuideDialog(pos.x, pos.y, btn.width, btn.height);

            GuideHelper.FguiListChangeByIndex(index, this.m_barBottom.m_listMenu, this.m_barBottom.GuideOpenMenuHelper, this.m_barBottom);
            Game.event.add(GameEventKey.GameFrame_HomeEquipBtnOnClick, this.GuideEquipFinish, this);
        }
    }

    /**
     * 结束进入装备界面引导
     */
    private GuideEquipFinish()
    {
        let model = Game.moduleModel.guide;
        if(!model )
        {
          GameLog.Log(EnumLogLevel.Error, "HomeWindowUI, GuideEquipFinish error");
          return;
        }
        model.DataGotoNextStep(Game.system.guideMgr.nowGuideGroup);
        Game.event.remove(GameEventKey.GameFrame_HomeEquipBtnOnClick, this.GuideEquipFinish, this);
    }
}