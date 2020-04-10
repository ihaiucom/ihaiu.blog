/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TEXT from "../../../Config/Keys/TEXT";
import Game from '../../../Game';
import {EnumBagUseType} from "../../../GameModule/DataModels/BagModel";
import {EquipData} from "../../../GameModule/DataStructs/EquipData";
import {MenuId} from "../../../GameModule/MenuId";
import {EnumBagMenuType} from "../../../GameModule/ViewWindows/BagWindow";
import BagEquipInfoViewStruct from "../../Generates/ModuleBag/BagEquipInfoViewStruct";
import EquipProButton from "../ModuleEquip/EquipProButton";
import { EquipType } from "../../../GameModule/DataEnums/EquipType";
import { PropId } from "../../../GameFrame/Props/PropId";
import EquipHeroTypeIcon from "../ModuleEquip/EquipHeroTypeIcon";
import BagWindowUI from "./BagWindowUI";

export default class BagEquipInfoView extends BagEquipInfoViewStruct
{
    equipData: EquipData;
    //主窗口显示时将被调
    onWindowShow(): void  
    {
        this.m_proplist.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, false);
        this.m_heroType.m_list.itemRenderer = Laya.Handler.create(this, this.renderHeroTypeListItem, null, false);
        
        // this.m_proplist.numItems = 2;
    }

    //主窗口关闭时将被调
    onWindowHide(): void  {
        this.m_proplist.numItems = 0;
    }

    renderListItem(index: number, target: EquipProButton)
    {
        target.m_state.selectedIndex = 0;
        let data = this.equipData;
        
        // TODO提审版本
        if(VersionConfig.IsReviewVersion)
        {
            let config = Game.config.property.getConfig(data.levelProp.id);
            target.m_icon.url = Game.config.avatar.getConfig(config.icon).iconUrl;
            target.m_labelNum.text = data.TotalProp;
            target.m_title.text = config.name;
        }
        else
        {
            if(index == 0 && data.config.equipPos == EquipType.Weapon) // 第一个为装备的系数，第二个为属性
            {
                let config = Game.config.property.getConfig( PropId.AtkRange);
                target.m_icon.url = Game.config.avatar.getConfig(config.icon).iconUrl;
                let atkRange = data.config.atkRange;
                target.m_labelNum.text = (atkRange.Num1/10000).toFixed(2) + "-" + (atkRange.Num2/10000).toFixed(2);;
                target.m_title.text = TEXT.EquipAtkRange;
            }
            else
            {
                let config = Game.config.property.getConfig(data.levelProp.id);
                target.m_icon.url = Game.config.avatar.getConfig(config.icon).iconUrl;
                target.m_labelNum.text = data.TotalProp;
                target.m_title.text = config.name;
            }
        }
        

        let heros = data.ownerHeroIDs;
        this.m_isOnly.selectedIndex = heros.length > 0?1:0;
    }

    renderHeroTypeListItem(index: number, target: EquipHeroTypeIcon)
    {
        let data = this.equipData;
        let armorTypes = data.config.armorType
        let len = armorTypes.length;
        if(len == 0)
        {
            armorTypes = [1,2,3,4,5]
        }

        let type = armorTypes[index]
        let config = Game.config.heroType.getConfig(type)
        let url = Game.config.avatar.getConfig(config.icon).iconUrl;
        target.m_typeIcon.url = url;
    }






    updateView(equipData: EquipData)
    {
        if(!equipData)
        {
            return;
        }
        let config = Game.config.item.getConfig(equipData.id);
        if(!config)
        {
            return;
        }
        this.equipData = equipData;

        this.m_itemName.text = equipData.name;
        this.m_des.text = equipData.desc;
        this.m_isOnly.selectedIndex = equipData.IsExclusive?1:0;
        this.m_exclusiveLb.text = equipData.exclusiveSimpleTxt;

        this.m_icon.m_quality.setSelectedIndex(equipData.quality);
        this.m_icon.m_icon.url = equipData.iconUrl;
        // this.m_star.m_starNum.setSelectedIndex(equipData.star);
        // this.m_prop.text = equipData.propsTxt;

        // TODO提审版本
        if(VersionConfig.IsReviewVersion)
        {
            this.m_proplist.numItems = 1;
        }
        else
        {
            if(equipData.config.equipPos == EquipType.Weapon)
            {
                this.m_proplist.numItems = 2;
            }
            else
            {
                this.m_proplist.numItems = 1;
            }
        }
        

        // TODO 特性暂无
        this.m_buffDescState.selectedIndex = 1;

        // 装备实用英雄类型
        let len = equipData.config.armorType.length;
        if(len == 0)
        {
            len = 5;
        }
        this.m_heroType.m_list.numItems = len;

        if(config.useType.length < 1)
        {
            this.m_isMultiplyOperate.setSelectedIndex(0);
            return;
        }
        else if(config.useType.length > 1)
        {
            this.m_isMultiplyOperate.setSelectedIndex(2);
            this.m_multiOptBox.updateView(equipData);
        }
        else if(config.useType.length == 1)
        {
            this.m_isMultiplyOperate.setSelectedIndex(1);
            let useType = equipData.useTypes[0];
            if(useType == EnumBagUseType.Sell)
                this.m_singleOptBtn.m_title.text = TEXT.BagItemSell;
            else if(useType == EnumBagUseType.Use)
                this.m_singleOptBtn.m_title.text = TEXT.BagItemUse;
            else if(useType == EnumBagUseType.Split)
                this.m_singleOptBtn.m_title.text = TEXT.BagItemSplit;
        }
    }

    private showGetItemView()
    {
        Game.system.SystemObtainShow(this.equipData.id);
    }

    private singleOptBtnOnClick()
    {
        let windowui = <BagWindowUI>this.parent;

        let useType  = this.equipData.useTypes[0];
        let itemdata = Game.moduleModel.bag.getItemByUid(this.equipData.uid);
        if(useType == EnumBagUseType.Sell)
            // Game.menu.openTab(MenuId.Bag,EnumBagMenuType.ItemSell,this.itemData);
            windowui.openTab(EnumBagMenuType.ItemSell,itemdata);
        else if(useType == EnumBagUseType.Use)
            // Game.menu.openTab(MenuId.Bag,EnumBagMenuType.ItemUse,this.itemData);
            windowui.openTab(EnumBagMenuType.ItemUse,itemdata);
        else if(useType == EnumBagUseType.Split)
            // Game.menu.openTab(MenuId.Bag,EnumBagMenuType.ItemSplit,this.itemData);
            windowui.openTab(EnumBagMenuType.ItemSplit,itemdata);
    }

    onShow()
    {
        this.m_multiOptBox.onShow();
        this.m_singleOptBtn.delayOnClick(this,this.singleOptBtnOnClick);
        this.m_getBtn.delayOnClick(this,this.showGetItemView);
    }

    onHide()
    {
        this.m_multiOptBox.onHide();
        this.m_singleOptBtn.delayOffClick(this,this.singleOptBtnOnClick);
        this.m_getBtn.delayOffClick(this,this.showGetItemView);
    }
}