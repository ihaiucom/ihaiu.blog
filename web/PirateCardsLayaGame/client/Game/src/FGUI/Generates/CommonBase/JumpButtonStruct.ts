/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import JumpButton from "../../Extends/CommonBase/JumpButton";

export default class JumpButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://jaoapdicvlow27";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():JumpButton {
		return <JumpButton><any>(fgui.UIPackage.createObject("CommonBase","JumpButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}