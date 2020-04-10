/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipStarViewStruct from "../../Generates/ModuleEquip/EquipStarViewStruct";
import Game from "../../../Game";
import GameEventKey from "../../../GameEventKey";
import { EquipQuality, EquipStarUpItemType } from "../../../GameModule/DataEnums/EquipType";
import ItemData from "../../../GameModule/DataStructs/ItemData";
import EquipProButton from "./EquipProButton";
import MenuValidateRed from "../../../GameModule/MenuValidateRed";
import { MenuId } from "../../../GameModule/MenuId";
import EquipDetialView from "./EquipDetialView";
import { MenuIndexId } from "../../../GameModule/MenuIndexId";

export default class EquipStarView extends EquipStarViewStruct
{
    uid: int;
    selectUID: int;
    isEquip: boolean;
    onWindowInited(): void
    {
        this.m_btnStar.onClick(this, this.OnClickStarUp );
        this.m_btnSelect.onClick(this, this.OnClickSelect );
        this.m_btnAdd.onClick(this, this.OnClickAdd)
        this.m_icon.onClick(this, this.OnClickSelect);

        this.m_btnSelect.visible = false;
        this.m_btnAdd.visible = true;
    }

    //主窗口显示时将被调
    onWindowShow(): void  {
        this.m_propList.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, false);
        Game.event.add(GameEventKey.GameFrame_EquipStarUp, this.OnUpStar, this);
    }

    //主窗口关闭时将被调
    onWindowHide(): void  {
        this.m_propList.numItems = 0;
        Game.event.remove(GameEventKey.GameFrame_EquipStarUp, this.OnUpStar, this);
    }

    RefreshRed()
    {
        let data = Game.moduleModel.equip.GetDataByUID(this.uid);
        // 升星
        MenuValidateRed.getInstance().openTab(MenuIndexId.EquipStar, data, this.m_btnAdd);
    }

    renderListItem(index: number, target: EquipProButton)
    {
        let data = Game.moduleModel.equip.GetDataByUID(this.uid);
        let prop = data.starProp;
        let isMax = Game.moduleModel.equip.IsMaxStar(this.uid);
        if(isMax)
        {
            target.m_state.selectedIndex = 0;
        }
        else
        {
            target.m_state.selectedIndex = 1;
            let num = Game.moduleModel.equip.GetUpgradePropValue(data.uid, prop.propTableId, data.star + 1)
            target.m_labelAdd.text = "+" + num;
        }

        let config = Game.config.property.getConfig(prop.id);
        target.m_icon.url = Game.config.avatar.getConfig(config.icon).iconUrl;
        target.m_labelNum.text = data.TotalProp;
        target.m_title.text = config.name;
    }

    OnClickStarUp()
    {
        let uid = this.uid;
        let selectUID = this.selectUID;
        let isEquip = this.isEquip;

        if(!selectUID)
        {
            this.OnClickSelect();
            return;
        }

        let callback = function onSender(params?:any) {
            let data = Game.moduleModel.equip.GetDataByUID(uid);
            let type = isEquip?EquipStarUpItemType.Equip:EquipStarUpItemType.Item;
            Game.sender.equip.EquipUpStar(data.onWho, uid, type, [selectUID]);
        }

        if(isEquip)
        {
            let data = Game.moduleModel.equip.GetDataByUID(selectUID);
            if(data.quality == EquipQuality.Orange)
            {
                Game.system.equipLevelUpShow([selectUID], callback, false);
            }
            else
            {
                callback();
            }
        }
        else
        {
            callback();
        }

    }

    OnClickAdd()
    {
        this.OnClickSelect();
    }

    OnClickSelect()
    {
        if(!this.uid)
        {
            return;
        }
        else    
        {
            if(Game.moduleModel.equip.IsMaxStar(this.uid))
            {
                return;
            }
            else if(!Game.moduleModel.equip.CanUpStar(this.uid))
            {
                return;
            }
        }

        let object = this;
        let callback = function onCallback(selectUID: int, isEquip: boolean) {
            object.OnUpdateSelectBtn(selectUID, isEquip);
        }

        Game.system.equipStarUpShow(this.uid, callback);
    }

    OnUpdateSelectBtnAgain()
    {
        if(!this.isEquip && this.selectUID)
        {
            let num = Game.moduleModel.bag.getItemNum(this.selectUID)
            if(num > 0)
            {
                this.OnUpdateSelectBtn(this.selectUID, this.isEquip)
                return;
            }
        }

        this.RestSelectBtn();
    }

    OnUpdateSelectBtn(selectUID: int, isEquip: boolean)
    {
        this.m_btnAdd.visible = false;
        this.m_btnSelect.visible = true;

        this.selectUID = selectUID;
        this.isEquip = isEquip;
        if(isEquip)
        {
            let data = Game.moduleModel.equip.GetDataByUID(selectUID);
            this.m_btnSelect.m_icon.url = data.iconUrl;
            this.m_btnSelect.m_labelLevel.text = data.level.toString();
            this.m_btnSelect.m_star.m_starNum.selectedIndex = data.star;
            this.m_btnSelect.m_star.m_starPos.selectedIndex = data.star;
            this.m_btnSelect.m_laeblNum.text = "";
        }
        else
        {
            let itemData = ItemData.Create(selectUID, 1)
            this.m_btnSelect.m_icon.url = itemData.iconUrl;
            this.m_btnSelect.m_labelLevel.text = "";
            this.m_btnSelect.m_star.m_starNum.selectedIndex = 0;
            this.m_btnSelect.m_star.m_starPos.selectedIndex = 0;
            let num = Game.moduleModel.bag.getItemNum(selectUID);
            this.m_btnSelect.m_laeblNum.text = num.toString();
        }
    }

    RestSelectBtn()
    {
        this.m_btnSelect.visible = false;
        this.m_btnAdd.visible = true;

        this.selectUID = null;
        this.isEquip = null;
    }

    OnUpStar()
    {
        this.updateView(this.uid, true);
        (<EquipDetialView>this.parent).RefreshRed();
    }

    updateView(uid: number, needSelect: boolean = false)
    {
        if(!needSelect)
        {
            this.RestSelectBtn();
        }

        let data = Game.moduleModel.equip.GetDataByUID(uid);
        this.m_name.text = data.name;
        if(Game.moduleModel.equip.IsMaxStar(uid))
        {
            this.m_state.selectedIndex = 1;
            this.m_icon.RenderItem(data);
            this.m_buffDescState.selectedIndex = 0;
            return
        }
        else if(!Game.moduleModel.equip.CanUpStar(uid))
        {
            this.m_state.selectedIndex = 2;
            this.m_icon.RenderItem(data);
            this.m_buffDescState.selectedIndex = 0;
            return
        }
        this.m_state.selectedIndex = 0;
        
        this.uid = uid;
        this.m_star0.visible = data.star > 0?false:true
        
        this.m_starCur.m_starNum.selectedIndex = data.star;
        this.m_starCur.m_starPos.selectedIndex = data.star;

        this.m_starNew.m_starNum.selectedIndex = data.star + 1;
        this.m_starNew.m_starPos.selectedIndex = data.star + 1;

        // TODO 特效暂无
        this.m_buffDescState.selectedIndex = 1;

        this.m_propList.numItems = 1;

        if(needSelect)
        {
            this.OnUpdateSelectBtnAgain();
        }

        // red
        this.RefreshRed();
    }
}