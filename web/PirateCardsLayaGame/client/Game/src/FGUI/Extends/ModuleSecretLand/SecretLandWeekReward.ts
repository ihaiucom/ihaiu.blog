/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretLandWeekRewardStruct from "../../Generates/ModuleSecretLand/SecretLandWeekRewardStruct";
import ItemData from '../../../GameModule/DataStructs/ItemData';
import ItemCommon2 from '../CommonGame/ItemCommon2';
import Game from '../../../Game';
import ItemCommon3 from '../CommonGame/ItemCommon3';

export default class SecretLandWeekReward extends SecretLandWeekRewardStruct
{
    private dataList: ItemData[] = [];
    onWindowShow(): void
    {
        this.m_list.setItemRenderer(this.renderListItem,this);
       
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        if(this.m_list.itemRenderer)
            this.m_list.itemRenderer.recover();
    }
    UpdateView(data: proto.IGameItem[])
    {
        this.dataList = [];
        for(let gameItem of data)
        {
            let itemData = ItemData.CreateItem(gameItem);
            this.dataList.push(itemData);
        }
        this.m_list.numItems = this.dataList.length;
        this.m_keystone.text = Game.moduleModel.secretLand.infoData.newKeystoneTxt;
    }

    renderListItem(index:number, item: ItemCommon3)
    {
        item.renderItem(this.dataList[index]);
    }
}