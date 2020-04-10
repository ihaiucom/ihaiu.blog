/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import WindowHeadItemStruct from "../../Generates/CommonGame/WindowHeadItemStruct";

export default class WindowHeadItem extends WindowHeadItemStruct
{
    UpdateText(now: number,max?: number)
    {
        let text = max ? `${now}/${max}` : `${now}`;
        this.m_labNum.text = text;
    }  
}