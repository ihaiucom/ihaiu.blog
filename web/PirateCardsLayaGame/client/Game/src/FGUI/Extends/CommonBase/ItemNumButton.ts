/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ItemNumButtonStruct from "../../Generates/CommonBase/ItemNumButtonStruct";
import ItemData from '../../../GameModule/DataStructs/ItemData';

export default class ItemNumButton extends ItemNumButtonStruct
{
    renderItem(data: ItemData)
    {
        this.m_name.text = data.itemName;
        this.m_num.text = data.itemNumTxt2;
    }
}