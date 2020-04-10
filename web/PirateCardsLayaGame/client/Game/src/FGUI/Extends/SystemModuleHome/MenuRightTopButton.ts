/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuRightTopButtonStruct from "../../Generates/SystemModuleHome/MenuRightTopButtonStruct";

export default class MenuRightTopButton extends MenuRightTopButtonStruct
{
    UpdateText(now:number, max?:number)
    {
        let text = max ? `${now}/${max}` : `${now}`;
        this.m_labNum.text = text;
    }   
}