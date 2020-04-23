/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ShopCardFrontStruct from "../../Generates/GameHome/ShopCardFrontStruct";
import ItemData from "../../../GameModule/DataStructs/ItemData";

export default class ShopCardFront extends ShopCardFrontStruct
{
	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
        this.m_plusBtn.onClick(this, this.OnClosePlusBtn);
    }

    itemData: ItemData;
    SetData(itemData: ItemData)
    {
        this.itemData = itemData;

        this.m_coinText.text = itemData.itemConfig.coin + "";

        var isGeted = itemData.isGeted;
        this.m_hasFlag.visible = isGeted;
        this.m_plusBtn.visible = !isGeted && itemData.enabelBuy;
    }

    OnClosePlusBtn()
    {
        this.itemData.buy();
        this.SetData(this.itemData);
    }
}