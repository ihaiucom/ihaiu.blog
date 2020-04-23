/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ShopCardFrontStruct from "../../Generates/GameHome/ShopCardFrontStruct";
import ItemData from "../../../GameModule/DataStructs/ItemData";

export default class ShopCardFront extends ShopCardFrontStruct
{
    // 窗口初始化完毕
    onWindowInited(): void
    {
        this.m_plusBtn.onClick(this, this.OnClosePlusBtn);
    }

    itemData: ItemData;
    SetData(itemData: ItemData)
    {
        this.itemData = itemData;

        this.m_coinText.text = itemData.itemConfig.coin + "";

        var isGeted = itemData.isGeted;
        this.m_plusBtn.visible = !isGeted;
        this.m_hasFlag.visible = isGeted;
    }

    OnClosePlusBtn()
    {
        this.itemData.isGeted = true;
        this.SetData(this.itemData);
    }
}