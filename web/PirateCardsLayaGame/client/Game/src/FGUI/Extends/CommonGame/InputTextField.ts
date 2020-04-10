/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import InputTextFieldStruct from "../../Generates/CommonGame/InputTextFieldStruct";
import Game from '../../../Game';

export default class InputTextField extends InputTextFieldStruct
{
    protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);
    }
    public get text(): string
    {
        return this.m_title.text;
    }

    public set text(str: string)
    {
        this.m_title.text = str;
    }
}