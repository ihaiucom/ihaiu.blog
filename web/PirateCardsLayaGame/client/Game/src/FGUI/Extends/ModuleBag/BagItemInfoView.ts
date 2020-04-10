/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BagItemInfoViewStruct from "../../Generates/ModuleBag/BagItemInfoViewStruct";
import TimeHelper from '../../../GameHelpers/TimeHelper';
import TEXT from '../../../Config/Keys/TEXT';
import Game from '../../../Game';
import { MenuId } from "../../../GameModule/MenuId";
import { EnumBagMenuType } from '../../../GameModule/ViewWindows/BagWindow';
import ItemData from "../../../GameModule/DataStructs/ItemData";
import {EnumBagUseType} from "../../../GameModule/DataModels/BagModel";
import BagWindowUI from "./BagWindowUI";

export default class BagItemInfoView extends BagItemInfoViewStruct
{
    itemData: ItemData;
    
    updateView(itemData: ItemData)
    {
        if(!itemData)
        {
            return;
        }
        let config = Game.config.item.getConfig(itemData.id);
        if(!config)
        {
            return;
        }
        this.itemData = itemData;
        Engine.timer.clearAll(this);
        let that = this;
        
        let expiredIndex = itemData.isExpired ? 1 : 0;
        this.m_isExpired.setSelectedIndex(expiredIndex);
        this.m_itemName.text = itemData.itemName;
        this.m_num.text = TEXT.BagItemCount.format(itemData.count);
        let limitIndex = 0;
        if(itemData.isLimit)
        {
            this.m_icon.m_itemState.setSelectedIndex(1);
            !itemData.isExpired && (limitIndex = 1);
            if(itemData.itemConfig.periodTime)
            {
                let period = TimeHelper.GetYMDHMS(itemData.expireTime,true,true);
                this.m_expiredTimeLb.text = TEXT.BagExpiredPeriodTip.format(period);
            }
            else if(itemData.itemConfig.limitTime)
            {
                this.limitCountdown(itemData.expireTime);
                Engine.timer.loop(1000,this, this.limitCountdown,null,false);
            }
        }
        else
        {
            this.m_icon.m_itemState.setSelectedIndex(0);
        }
        if(config.canSell)
        {
            
        }
        else
        {
            
        }
        this.m_icon.m_quality.setSelectedIndex(itemData.quality);
        this.m_icon.m_icon.url = itemData.iconUrl;
        this.m_des.text = config.zhCnItemDes;
        this.m_isLimit.setSelectedIndex(limitIndex);

        if(config.useType.length < 1)
        {
            this.m_isMultiplyOperate.setSelectedIndex(0);
            return;
        }
        else if(config.useType.length > 1)
        {
            this.m_isMultiplyOperate.setSelectedIndex(2);
            this.m_multiOptBox.updateView(itemData);
        }
        else if(config.useType.length == 1)
        {
            this.m_isMultiplyOperate.setSelectedIndex(1);
            let useType = itemData.useTypes[0];
            if(useType == EnumBagUseType.Sell)
                this.m_singleOptBtn.m_title.text = TEXT.BagItemSell;
            else if(useType == EnumBagUseType.Use)
                this.m_singleOptBtn.m_title.text = TEXT.BagItemUse;
            else if(useType == EnumBagUseType.Split)
                this.m_singleOptBtn.m_title.text = TEXT.BagItemSplit;
        }
        
    }

    private expiredTime: number;

    private limitCountdown(expiredTime?: number)
    {
        if(expiredTime)
            this.expiredTime = expiredTime;
        if(TimeHelper.TimeleftIsOver(this.expiredTime))
        {
            this.m_isExpired.setSelectedIndex(1);
            this.m_isLimit.setSelectedIndex(0);
            Engine.timer.clear(this,this.limitCountdown);
            return;
        }
        let timeStr = TimeHelper.TimeleftHHMMSS(this.expiredTime);
        this.m_expiredTimeLb.text = TEXT.BagExpiredLimitTip.format(timeStr);
    }

    private singleOptBtnOnClick()
    {
        let windowui = <BagWindowUI>this.parent;

        let useType  = this.itemData.useTypes[0];
        let itemdata = this.itemData; 
        if(useType == EnumBagUseType.Sell)
            // Game.menu.openTab(MenuId.Bag, EnumBagMenuType.ItemSell, this.itemData);
            windowui.openTab(EnumBagMenuType.ItemSell, itemdata);
        else if(useType == EnumBagUseType.Use)
            // Game.menu.openTab(MenuId.Bag, EnumBagMenuType.ItemUse, this.itemData);
            windowui.openTab(EnumBagMenuType.ItemUse, itemdata);
        else if(useType == EnumBagUseType.Split)
            // Game.menu.openTab(MenuId.Bag, EnumBagMenuType.ItemSplit, this.itemData);
            windowui.openTab(EnumBagMenuType.ItemSplit, itemdata);
    }

    private getBtnOnClick()
    {
        Game.system.SystemObtainShow(this.itemData.id);
    }

    onShow()
    {
        this.m_multiOptBox.onShow();
        this.m_singleOptBtn.delayOnClick(this, this.singleOptBtnOnClick);
        this.m_getBtn.delayOnClick(this, this.getBtnOnClick);
    }

    onHide()
    {
        Engine.timer.clearAll(this);
        this.m_multiOptBox.onHide();
        this.m_singleOptBtn.delayOffClick(this,this.singleOptBtnOnClick);
        this.m_getBtn.delayOffClick(this,this.getBtnOnClick);
    }
}