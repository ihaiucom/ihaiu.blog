/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipWindowUIStruct from "../../Generates/ModuleEquip/EquipWindowUIStruct";
import EquipWindow from "../../../GameModule/ViewWindows/EquipWindow";
import Game from "../../../Game";
import { MenuId } from "../../../GameModule/MenuId";
import { GuideGroup } from "../../../GameModule/DataModels/GuideModel";
import GuideData from "../../../GameModule/DataStructs/GuideData";
import { EnumGuideTriggerType, EnumTextPosType } from "../../../GameModule/GuideModule/GuideEnum";
import { GuideHelper } from "../../../GameModule/GuideModule/GuideHelper";
import GameEventKey from "../../../GameEventKey";
import TEXT from "../../../Config/Keys/TEXT";

export default class EquipWindowUI extends EquipWindowUIStruct
{
    moduleWindow: EquipWindow;

    onClose()
    {
        let str = GameEventKey.GameFrame_SectionBackBtnOnClick;
        Game.event.dispatch(str, [GameEventKey.GameFrame_SectionBackBtnOnClick]);
        
        this.moduleWindow.openParam = null;
        Game.menu.back(MenuId.Equip);
    }

    onWindowInited(): void
    {
    }

    Open()
    {
        let params = this.moduleWindow.openParam
        let selectID;
        if(params)
        {
            selectID = params[0][0]
        }

        this.m_selectView.initView(selectID);
    }

    //主窗口显示时将被调
    onWindowShow(): void  {
        this.m_head.m_btnReturn.onClick(this, this.onClose);
        this.m_head.SetWindow(MenuId.Equip);
        this.onClick(this, this.onClick);

        Laya.timer.once(50, this, this.CheckGuide);
    }

    //主窗口关闭时将被调
    onWindowHide(): void  {
        this.m_head.m_btnReturn.offClick(this, this.onClose);
    }

    /**
     * 新手引导
     */
    private CheckGuide()
    {
        let model = Game.moduleModel.guide;
        if(!model)
        {
            return;
        }

        let data = model.GetData(GuideGroup.EQUIP_LEVELUP);
        if(data && !data.isOver)
        {
            let progress = data.progress;
            let btn: fgui.GObject;
            let eventKey: string;
            switch(progress)
            {
                case 1:
                    this.GuideEquip(data)
                    break;
                case 2:
                    btn = this.m_detialView.m_btnStrengthen;
                    eventKey = GameEventKey.GameFrame_EquipStrengthenBtn;
                    break;
                case 3:
                    btn = this.m_detialView.m_strengthenView.m_btnStrengthen;
                    eventKey = GameEventKey.GameFrame_EquipStrengthenBtn2;
                    break;
                case 4:
                    btn = this.m_detialView.m_strengthenView.m_btnLevelUp;
                    eventKey = GameEventKey.GameFrame_EquipStrengthenEnterBtn;
                    break;
                case 5:
                    btn = this.m_head.m_btnReturn;
                    eventKey = GameEventKey.GameFrame_SectionBackBtnOnClick;
                    break;
            }
            if(btn && eventKey)
            {
                this.GuideEquipBtn(btn, eventKey);
            }
            return;
        }
    }

    /**
     * 引导装备强化，list相关
     * @param data 
     */
    private GuideEquip(data: GuideData)
    {
        if(data)
        {
            let index = 0;
            let list = this.m_selectView.m_listView.m_list
            let btn = list.getChildAt(index);
            let pos = GuideHelper.GetObjGlobalPosInLeftTopPovit(btn, index);// btn.parent.localToGlobal(btn.x, btn.y);
            Game.system.guideMgr.ChangeGuideDialog(pos.x, pos.y, btn.width, btn.height);
    
            GuideHelper.FguiListChangeByIndex(index, list, this.m_selectView.clickListItem, this.m_selectView);
            Game.event.add(GameEventKey.GameFrame_EquipSelectFirst, this.GuideEquipFinish, this);
        }
    }

    private GuideEquipFinish()
    {
        let model = Game.moduleModel.guide;
        if(!model )
        {
        //   GameLog.Log(EnumLogLevel.Error, "HeroWindowUI, GuideHeroFinish error");
          return;
        }
        model.DataGotoNextStep(Game.system.guideMgr.nowGuideGroup);
        Game.event.remove(GameEventKey.GameFrame_EquipSelectFirst, this.GuideEquipFinish, this);

        this.CheckGuide();
    }

    /**
     * 新手引导，处理所有按钮
     */
    private _battleEnterParent
    private GuideEquipBtn(btn: fgui.GObject, eventKey: string)
    {
        let obj = btn;
        let pos = GuideHelper.GetObjGlobalPosInLeftTopPovit(obj);//obj.parent.localToGlobal(obj.x, obj.y);
        
        if(eventKey == GameEventKey.GameFrame_SectionBackBtnOnClick)
        {
            this._battleEnterParent = obj.parent;
            let text = Game.config.msg.getConfig(TEXT.GuideBackHome) ? Game.config.msg.getConfig(TEXT.GuideBackHome).zhCnNotice : "";
            Game.system.guideMgr.BackGuideShow(pos.x, pos.y , 0, 0, 0, 0, 
                EnumTextPosType.RIGHT_BOTTOM, text);
            
            GuideHelper.ChangeObjParent(obj, Game.system.guideMgr.otherNode);
            
        }
        else
        {
            Game.system.guideMgr.ChangeGuideDialog(pos.x, pos.y, obj.width, obj.height);
            this._battleEnterParent = obj.parent;
            GuideHelper.ChangeObjParent(obj, Game.system.guideMgr.otherNode);
        }
        Game.event.add(eventKey, this.GuideEuqipBtnFinish, this);
    }

    private GuideEuqipBtnFinish(params: any[])
    {
        let model = Game.moduleModel.guide;
        if(!model || !this._battleEnterParent)
        {
        //   GameLog.Log(EnumLogLevel.Error, "HeroWindowUI, GuideHeroFinish error");
          return;
        }

        let eventKey: string = params[0];
        let btn: fgui.GObject;
        switch(eventKey)
        {
            case GameEventKey.GameFrame_EquipStrengthenBtn:
                btn = this.m_detialView.m_btnStrengthen;
                break;
            case GameEventKey.GameFrame_EquipStrengthenBtn2:
                btn = this.m_detialView.m_strengthenView.m_btnStrengthen;
                break;
            case GameEventKey.GameFrame_EquipStrengthenEnterBtn:
                btn = this.m_detialView.m_strengthenView.m_btnLevelUp;
                break;
            case GameEventKey.GameFrame_SectionBackBtnOnClick:
                btn = this.m_head.m_btnReturn;
                // model.DataGotoNextStep(Game.system.guideMgr.nowGuideGroup);
                // Game.event.remove(eventKey, this.GuideEuqipBtnFinish, this);
                // return;
                break;
        }

        GuideHelper.ChangeObjParent(btn, this._battleEnterParent);
        Game.system.guideMgr.HideGuideDialog();
        model.DataGotoNextStep(Game.system.guideMgr.nowGuideGroup);
        Game.event.remove(eventKey, this.GuideEuqipBtnFinish, this);

        if(eventKey == GameEventKey.GameFrame_EquipStrengthenBtn2)
        {
            Laya.timer.once(50, this, this.CheckGuide);
        }
        else
        {
            this.CheckGuide();
        }
        // Laya.timer.once(50, this, this.CheckGuide);
    }
}