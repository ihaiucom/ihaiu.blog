/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GashaponPreviewItemStruct from "../../Generates/GashaponUI/GashaponPreviewItemStruct";
import HeroConfig from '../../../Config/ConfigExtends/HeroConfig';
import ItemData from '../../../GameModule/DataStructs/ItemData';
import GashaponItemButton from './GashaponItemButton';
import Game from "../../../Game";
import GashaponType =  proto.GashaponType;
import TEXT from "../../../Config/Keys/TEXT";

export default class GashaponPreviewItem extends GashaponPreviewItemStruct
{
    private dataList:  ItemData[];
    onShow()
    {
        this.m_list.itemRenderer =  Laya.Handler.create(this, this.itemRenderer,null, false);
    }

    updateView(data:excelconfig.IDTRewardRandom[], type: GashaponType)//装备没加
    {
        this.dataList = [];
        let rate = 0;
        for(let item of data)
        {
            let itemData = ItemData.Create(item.ItemId,item.ItemNum, item.ItemType);
            rate += Game.config.reward.getWeightByType(item.ItemId,type);
            if(this.dataList.findIndex((e)=>{return e.id == item.ItemId}) == -1 && item.Weight > 0)
                this.dataList.push(itemData);
        }
        let rateStr = TEXT.Gashapon_Rate.format((rate*100).toFixed(2));
        this.m_chance.text = rateStr;
        this.m_list.numItems = this.dataList.length;
    }
    
    itemRenderer(index: number, item: GashaponItemButton)//装备没加
    {
        let data:ItemData = this.dataList[index];
        item.renderItem(data);
    }

    onHide()
    {
        this.m_list.numItems = 0;
        this.m_list.itemRenderer.recover();
    }
}