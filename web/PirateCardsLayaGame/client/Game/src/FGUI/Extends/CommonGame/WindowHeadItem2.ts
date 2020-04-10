/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import WindowHeadItem2Struct from "../../Generates/CommonGame/WindowHeadItem2Struct";

export default class WindowHeadItem2 extends WindowHeadItem2Struct
{
    UpdateText(now: number,max?: number)
    {
        let text = max ? `${now}/${max}` : `${now}`;
        this.m_labNum.text = text;
    }  
}