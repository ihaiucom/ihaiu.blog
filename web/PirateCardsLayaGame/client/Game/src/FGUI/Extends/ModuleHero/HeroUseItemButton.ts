/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroUseItemButtonStruct from "../../Generates/ModuleHero/HeroUseItemButtonStruct";
import Game from "../../../Game";

export default class HeroUseItemButton extends HeroUseItemButtonStruct
{
    itemID: number;

    protected constructFromXML(xml: any): void {
        super.constructFromXML(xml);
    }

    public RenderItem(itemID: number, needNum: number = 0)
    {
        this.itemID = itemID;
        let itemNum = Game.moduleModel.bag.getItemNum(itemID);
        this.m_labelNum.text = itemNum.toString();
        this.m_labelNeedNum.text = "/" + needNum;
        this.m_color.selectedIndex = itemNum >= needNum?0:1;
        
        let iconID = Game.config.item.getConfig(itemID).icon;
        this.m_itemLoader.url = Game.config.avatar.getConfig(iconID).iconUrl;

        let width = this.m_labelNum.width + this.m_labelNeedNum.width;
        if(width > 65)
        {
            width = 65;
        }
        this.m_numBg.width = width;
    }
}