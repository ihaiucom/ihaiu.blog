/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AllPropItemStruct from "../../Generates/ModuleDraug/AllPropItemStruct";
import Prop from "../../../GameFrame/Props/Prop";

export default class AllPropItem extends AllPropItemStruct
{
    /** 属性数据 */
    DataSource:Prop;

    RenderItem(datasouce:Prop)
    {
        this.DataSource = datasouce;

        this.m_labName.text  = datasouce.name + "：";
        this.m_labValue.text = "+" + datasouce.valueView;
    }
}