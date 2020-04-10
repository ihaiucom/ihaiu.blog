/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ItemItemStruct from "../../Generates/SystemModuleDialog/ItemItemStruct";
import ItemData from "../../../GameModule/DataStructs/ItemData";

export default class ItemItem extends ItemItemStruct
{
    DataSource:ItemData;

    dispose()
    {
        this.DataSource= null;
        super.dispose();
    }

    RenderItem(data:ItemData)
    {
        this.DataSource = data;

        this.m_labName.text = data.itemName;
        this.m_labNum.text  = `${data.count}个`;
    }
}