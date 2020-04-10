/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipDetialViewStruct from "../../Generates/ModuleEquip/EquipDetialViewStruct";
import EquipWindowUI from "./EquipWindowUI";
import { EquipFuncType, EquipQuality } from "../../../GameModule/DataEnums/EquipType";
import Game from "../../../Game";
import MsgKey from "../../../Config/Keys/MsgKey";
import GameEventKey from "../../../GameEventKey";
import MenuValidateRed from "../../../GameModule/MenuValidateRed";
import { MenuId } from "../../../GameModule/MenuId";
import { MenuIndexId } from "../../../GameModule/MenuIndexId";

export default class EquipDetialView extends EquipDetialViewStruct
{
    windowUI: EquipWindowUI;

    // 选中装备的唯一UID
    selectEquipUID: number;

    onWindowInited(): void
    {
    }

    //主窗口显示时将被调
    onWindowShow(): void  
    {
        this.m_btnNew.touchable = false;
        this.m_btnNew.m_iconState.selectedIndex = 1;
        this.m_state.on(fgui.Events.STATE_CHANGED, this, this.OnViewChange);

        this.m_strengthenView.m_btnLevelUp.onClick(this, this.OnStrengthenOK);
        this.m_strengthenView.m_btnCancel.onClick(this, this.OnStrengthenCancel);
        this.m_strengthenView.m_btnStrengthen.onClick(this, this.OnStrengthen);

        
    }

    //主窗口关闭时将被调
    onWindowHide(): void  
    {
        this.m_state.off(fgui.Events.STATE_CHANGED, this, this.OnViewChange);

        this.m_strengthenView.m_btnLevelUp.offClick(this, this.OnStrengthenOK);
        this.m_strengthenView.m_btnCancel.offClick(this, this.OnStrengthenCancel);
        this.m_strengthenView.m_btnStrengthen.offClick(this, this.OnStrengthen);
    }

    RefreshRed()
    {
        let data = Game.moduleModel.equip.GetDataByUID(this.selectEquipUID);
        // 强化
        MenuValidateRed.getInstance().openTab(MenuIndexId.EquipStrenghen, data, this.m_btnStrengthen);

        // 升星
        MenuValidateRed.getInstance().openTab(MenuIndexId.EquipStar, data, this.m_btnStar);
    }

    OnClickButton(type: EquipFuncType)
    {
        if(!this.selectEquipUID)
        {
            this.m_state.selectedIndex = EquipFuncType.No;
            return    
        }
        this.m_state.selectedIndex = type;
        this.m_strengthenView.m_state.selectedIndex = 0;

        switch(type)
        {
            case EquipFuncType.Base:
                this.m_baseView.updateView(this.selectEquipUID);
                this.ChangeSelectView();
                break;
            case EquipFuncType.Strengthen:
                this.m_strengthenView.updateView(this.selectEquipUID);
                break;
            case EquipFuncType.Star:
                this.m_starView.updateView(this.selectEquipUID);
                this.ChangeSelectView();
                break;
        }
        this.RefreshRed();
    }

    OnViewChange()
    {
        let index = this.m_state.selectedIndex;
        this.OnClickButton(index);

        let str = GameEventKey.GameFrame_EquipStrengthenBtn;
        Game.event.dispatch(str, [str]);
    }


    ChangeSelectView()
    {
        if(this.windowUI.m_selectView.m_state.selectedIndex == 1)
        {
            this.windowUI.m_selectView.OnSwitchState(0);
        }
    }

    OnStrengthen()
    {
        this.m_strengthenView.OnStrengthen();
        this.windowUI.m_selectView.OnSwitchState(1);
    }

    OnStrengthenOK()
    {
        let list = this.windowUI.m_selectView.m_listSelectView.itemList;
        if(list.length <= 0)
        {
            Game.system.toastMsg(MsgKey.Equip_levelUp_No_Item);
            return;
        }

        let newLevel = this.m_strengthenView.newLevel;
        let newExp  = this.m_strengthenView.newExp
        if(newLevel > Game.user.level || ( newLevel == Game.user.level && newExp > 0 ))
        {
            Game.system.toastMsg(MsgKey.Equip_levelUp_More_Player);
            return;
        }

        let dialogList = [];
        for(let uid of list)
        {
            let quality = Game.moduleModel.equip.GetDataByUID(uid).quality
            if(quality >= EquipQuality.Purple)
            {
                dialogList.push(uid);
            }
        }

        let uid = this.selectEquipUID;
        let callback = function onSender(params?:any) {
            let data = Game.moduleModel.equip.GetDataByUID(uid);
            Game.sender.equip.EquipStrengthen(data.onWho, uid, list);
        }

        if(dialogList.length > 0)
        {
            Game.system.equipLevelUpShow(dialogList, callback, true);
        }
        else
        {
            callback();
        }

        let str = GameEventKey.GameFrame_EquipStrengthenEnterBtn;
        Game.event.dispatch(str, [str]);
    }
    
    OnStrengthenCancel()
    {
        this.windowUI.m_selectView.OnRestTopList();
        this.windowUI.m_selectView.OnSwitchState(0);
        this.m_strengthenView.OnStrengthenCancel();
    }

    UpdateAddProgress(addExp: number)
    {
        this.m_strengthenView.UpdateAddProgress(addExp);
    }

    ResetAddProgress()
    {
        this.m_strengthenView.ResetAddProgress();
    }
}