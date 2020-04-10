 /////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GamePlayerInfoHeroListItemStruct from "../../Generates/GamePlayerInfoUI/GamePlayerInfoHeroListItemStruct";
import HeroGroupPosData from '../../../GameModule/DataStructs/HeroGroupPosData';
import GamePlayerDraugItem from "./GamePlayerDraugItem";
import GamePlayerEquipItem from "./GamePlayerEquipItem";
import { HeroData } from "../../../GameModule/DataStructs/HeroData";
import ItemData from "../../../GameModule/DataStructs/ItemData";
import { EquipData } from "../../../GameModule/DataStructs/EquipData";

export default class GamePlayerInfoHeroListItem extends GamePlayerInfoHeroListItemStruct
{

    heroData: HeroData;
    
    protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);
        this.m_equipList.setItemRenderer(this.equipItemListRenderer,this);
        this.m_draugList.setItemRenderer(this.draugItemListRenderer,this);
    }
    
    itemRenderer(heroPos: HeroGroupPosData)
    {
        let heroData = heroPos.heroData;
        this.heroData = heroData;
        this.m_headIcon.updateView(heroData);
        this.m_nameLb.text = heroData.name;
        this.text = heroData.Name;
        this.m_star.m_starNum.setSelectedIndex(heroData.Star);
        this.m_equipList.numItems = 6;// heroData.equipList.length;
        this.m_draugList.numItems = 6;// heroData.draugList.length;
    }

    equipItemListRenderer(index: number, item: GamePlayerEquipItem)
    {

        if(index >= this.heroData.equipList.length)
        {
            item.m_isShow.setSelectedIndex(0);
            item.m_Quality.setSelectedIndex(0);
            return;
        }
        item.m_isShow.setSelectedIndex(1);
        let gameItem = this.heroData.equipList[index];
        let data = EquipData.Create(gameItem.uid,gameItem.id,gameItem.equip);
        item.renderItem(data);
    }

    draugItemListRenderer(index: number, item: GamePlayerDraugItem)
    {

        if(index >= this.heroData.draugList.length)
        {
            item.m_isShow.setSelectedIndex(0);
            item.m_Quality.setSelectedIndex(0);
            return;
        }
        item.m_isShow.setSelectedIndex(1);
        let data = this.heroData.draugList[index];
        item.renderItem(data);
    }
}