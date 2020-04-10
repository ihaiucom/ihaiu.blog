/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PropItemStruct from "../../Generates/ModuleDraug/PropItemStruct";
import Prop from "../../../GameFrame/Props/Prop";
import Res from "../../../Config/Keys/Res";

export default class PropItem extends PropItemStruct
{
    /** 属性数据 */
    DataSource:Prop;

    RenderItem(datasouce:Prop)
    {
        this.DataSource = datasouce;

        this.m_labName.text  = datasouce.name;
        this.m_labValue.text = datasouce.valueView;
        if (Boolean(datasouce.icon)) 
        {
            this.m_imgProperty.url = datasouce.icon;
        }
    }
}