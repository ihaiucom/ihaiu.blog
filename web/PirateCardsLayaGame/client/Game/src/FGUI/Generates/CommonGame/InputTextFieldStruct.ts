/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import InputTextField from "../../Extends/CommonGame/InputTextField";

export default class InputTextFieldStruct extends fgui.GComponent
{
	public m_title : fgui.GTextInput;

	
	public static URL:string = "ui://4snov4n9j35sl";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():InputTextField {
		return <InputTextField><any>(fgui.UIPackage.createObject("CommonGame","InputTextField"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fgui.GTextInput><any>(this.getChild("title"));
		
		
	}
}