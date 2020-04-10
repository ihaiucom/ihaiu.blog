/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SuitItemStruct from "../../Generates/ModuleDraug/SuitItemStruct";
import Prop from "../../../GameFrame/Props/Prop";

export default class SuitItem extends SuitItemStruct
{
    /** 属性数据 */
    DataSource:Prop;

    RenderItem(datasouce:Prop, isopen:boolean, index:number)
    {
        this.DataSource = datasouce;

        this.m_labNum.text  = `${(index + 1) * 2}件套：`;
        // this.m_labProp.text = datasouce.valueViewText;
        this.m_labName.text = datasouce.name;
        this.m_labValue.text= datasouce.valueView;

        this.m_Type.selectedIndex = isopen ? 0 : 1;
    }
}