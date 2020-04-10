/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DuelTempDanListItem2Struct from "../../Generates/ModuleDuelTemp/DuelTempDanListItem2Struct";
import Game from '../../../Game';
import ItemCommon from '../CommonGame/ItemCommon';
import ItemData from '../../../GameModule/DataStructs/ItemData';
import DuelRankingConfig from '../../../Config/ConfigExtends/DuelRankingConfig';

export default class DuelTempDanListItem2 extends DuelTempDanListItem2Struct
{
    rewardList: ItemData[] = [];
    
    renderItem(config: DuelRankingConfig)
    {
        this.m_title.text = config.name;
        this.rewardList.length = 0;
        let rewardConfig = Game.config.reward.getConfig(config.reward);
        if(!rewardConfig)
            return;
        for(let item of rewardConfig.fixedItems)
        {
            let itemData = ItemData.Create(item.ItemId,item.ItemNum, item.ItemType);
            this.rewardList.push(itemData);
        }
        this.m_list.setItemRenderer(this.renderListItem,this);
        this.m_list.numItems = this.rewardList.length;
    }

    private renderListItem(index: number, item: ItemCommon)
    {
        let data = this.rewardList[index];
        item.renderItem(data);
    }
}