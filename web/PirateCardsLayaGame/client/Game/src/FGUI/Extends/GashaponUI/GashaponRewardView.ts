/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GashaponRewardViewStruct from "../../Generates/GashaponUI/GashaponRewardViewStruct";
import ItemData from "../../../GameModule/DataStructs/ItemData";
import ItemNumButton from '../CommonBase/ItemNumButton';
import GashaponData from '../../../GameModule/DataStructs/GashaponData';
import Game from "../../../Game";
import ItemCommon3 from "../CommonGame/ItemCommon3";
import TEXT from "../../../Config/Keys/TEXT";

export default class GashaponRewardView extends GashaponRewardViewStruct
{
    itemList: ItemData[];
    gashaponList: GashaponData[];
    
    onShow(itemList: ItemData[],gashaponList: GashaponData[])
    {
        this.itemList = itemList;
        this.gashaponList = gashaponList;
        this.visible = true;
        this.m_panel.m_list.numItems = this.itemList.length;
    }

    onHide()
    {
        this.visible = false;

    }

    addEventListener()
    {
        this.m_panel.m_backBtn.onClick(this,this.onHide);
        this.m_background.onClick(this, this.onHide);
        this.m_panel.m_list.itemRenderer = Laya.Handler.create(this, this.itemRenderer,null,false);
        this.m_panel.m_confirmBtn.onClick(this,this.onClickConfirmButton);
        this.m_panel.m_oneBtn.onClick(this,this.onClickOneButton);
        this.m_panel.m_tenBtn.onClick(this,this.onClickTenButton);
    }

    removeEventListener()
    {
        this.m_panel.m_backBtn.offClick(this,this.onHide);
        this.m_background.offClick(this, this.onHide);
        this.m_panel.m_list.itemRenderer.recover();
        this.m_panel.m_confirmBtn.offClick(this,this.onClickConfirmButton);
        this.m_panel.m_oneBtn.offClick(this,this.onClickOneButton);
        this.m_panel.m_tenBtn.offClick(this,this.onClickTenButton);
    }

    private itemRenderer(index: number, item: ItemCommon3)
    {
        let data = this.itemList[index];
        item.renderItem(data);
    }

    onClickConfirmButton()
    {
        this.onHide();
    }
    
    private get remainTimes()
    {
        let times = 30;
        for(let ga of this.gashaponList)
        {
            times -= ga.todayExtractNum;
        }
        return times;
    }

    onClickOneButton()
    {
        let costItem = this.gashaponList[0].costItem;
        if(this.remainTimes < 1)
        {
            Game.system.toastText(TEXT.Gashapon_Times_Not_Enough);
            return;
        }
        let isEnough = costItem.ItemNum <= Game.moduleModel.bag.getItemNum(costItem.ItemId);
        if(isEnough)
        {
            Game.sender.gashapon.extractGashapon(this.gashaponList[0].id);
            return;
        }
        Game.system.toastItemNotEnough(costItem.ItemId); 
    }

    onClickTenButton()
    {
        if(this.remainTimes < 10)
        {
            Game.system.toastText(TEXT.Gashapon_Times_Not_Enough);
            return;
        }
        let costItem = this.gashaponList[1].costItem;
        let isEnough = costItem.ItemNum <= Game.moduleModel.bag.getItemNum(costItem.ItemId);
        if(isEnough)
        {
            Game.sender.gashapon.extractGashapon(this.gashaponList[1].id);
            return;
        }
        Game.system.toastItemNotEnough(costItem.ItemId);
    }
}