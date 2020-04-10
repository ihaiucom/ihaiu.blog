/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DuelTempDanListItemStruct from "../../Generates/ModuleDuelTemp/DuelTempDanListItemStruct";
import DuelDanConfig from '../../../Config/ConfigExtends/DuelDanConfig';
import ItemCommon from "../CommonGame/ItemCommon";
import Game from "../../../Game";
import ItemData from "../../../GameModule/DataStructs/ItemData";

export default class DuelTempDanListItem extends DuelTempDanListItemStruct
{
    config: DuelDanConfig;


    rewardList: ItemData[] = [];

    protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
        this.m_list.setItemRenderer(this.renderListItem,this);
    }

    renderItem(config)
    {
        this.config = config;
        if(this.config)
        {
            let reward = Game.config.reward.getConfig(this.config.reward);
            this.rewardList = [];
            if(reward)
            {
                for(let item of reward.fixedItems)
                {
                    let data = ItemData.Create(item.ItemId,0,item.ItemType);
                    this.rewardList.push(data);
                }
            }
            this.m_title.text =  config.name;
        }
        this.m_list.numItems = this.rewardList.length;
    }

    renderListItem(index: number, item: ItemCommon)
    {
        let data = this.rewardList[index];
        item.renderItem(data);
    }
}