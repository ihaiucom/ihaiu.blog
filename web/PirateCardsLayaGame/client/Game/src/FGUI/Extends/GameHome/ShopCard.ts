/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ShopCardStruct from "../../Generates/GameHome/ShopCardStruct";
import ItemData from "../../../GameModule/DataStructs/ItemData";
import TweenHelper from "../../../War/Utils/TweenHelper";

export default class ShopCard extends ShopCardStruct
{
	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
        this.m_front.m_infoBtn.onClick(this, this.ShowBack);
        this.m_back.m_backBtn.onClick(this, this.ShowFront);
    }



    itemData: ItemData;
    setItemData(itemData: ItemData)
    {
        this.itemData = itemData;

        this.m_front.m_ShopType.setSelectedIndex(itemData.itemConfig.spriteIndex);
        this.m_back.m_ShopType.setSelectedIndex(itemData.itemConfig.spriteIndex);

        this.m_front.SetData(itemData);

        this.SetFront();
    }

    ShowBack()
    {
        TweenHelper.TurnCard(this.m_front, this.m_back);
    }

    ShowFront()
    {
        TweenHelper.TurnCard(this.m_back, this.m_front);
    }

    
    SetFront()
    {
        this.m_front.visible = true;
        this.m_back.visible = false;
        this.m_front.setScale(1, 1);
    }
}