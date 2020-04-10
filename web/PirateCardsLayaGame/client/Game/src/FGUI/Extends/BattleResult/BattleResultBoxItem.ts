/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BattleResultBoxItemStruct from "../../Generates/BattleResult/BattleResultBoxItemStruct";
import { SecretLandTreasureBox } from '../../../GameModule/DataModels/SecretLandModel';
import ItemCommon3 from '../CommonGame/ItemCommon3';
import ItemData from '../../../GameModule/DataStructs/ItemData';
import Game from '../../../Game';
import BaseRewardItem from '../CommonGame/BaseRewardItem';

export default class BattleResultBoxItem extends BattleResultBoxItemStruct
{
    onWindowShow(): void
    {
    }

    onWindowHide()
    {
       
    }

    dataList: ItemData[] = [];

    UpdateView(id: number,box: SecretLandTreasureBox, isSelf: boolean = false, items: proto.IGameItem[] = [])
    {
        this.m_View.setSelectedPage('reward');
        this.m_IsSelf.setSelectedIndex(isSelf?1:0);
        let itemIndex = box.gidList.indexOf(id);
        if(itemIndex >=0)
        {
            let gameItem = box.items[itemIndex];
            let gamer = box.gidMain[itemIndex];
            let itemData = ItemData.CreateItem(gameItem)
            this.m_item.renderItem(itemData);
            this.m_headIcon.icon = Game.user.getHeadIconByHeroId(gamer.avatar);
            this.m_name.text = gamer.name;
            if(items && items.length > 0)
            {
                for (let index = 0; index < 2; index++) {
                    let item = items[index];
                    if(gameItem.id != item.id)
                    {
                        let itemData = ItemData.CreateItem(item);
                        let commonItem = <BaseRewardItem> this['m_baseItem' + index];
                        commonItem.renderItem(itemData);
                    }
                }
            }
        }
    }
}