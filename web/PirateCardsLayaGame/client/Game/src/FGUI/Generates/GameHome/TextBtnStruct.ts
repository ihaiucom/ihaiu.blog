/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TextBtn from "../../Extends/GameHome/TextBtn";

export default class TextBtnStruct extends fgui.GButton
{
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://moe42ygr9cgecw";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():TextBtn {
		return <TextBtn><any>(fgui.UIPackage.createObject("GameHome","TextBtn"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}