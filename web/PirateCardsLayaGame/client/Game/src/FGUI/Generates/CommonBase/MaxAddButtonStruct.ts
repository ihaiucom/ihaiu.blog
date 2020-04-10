/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MaxAddButton from "../../Extends/CommonBase/MaxAddButton";

export default class MaxAddButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_sprAdd : fgui.GImage;

	
	public static URL:string = "ui://jaoapdicvpjn1j";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():MaxAddButton {
		return <MaxAddButton><any>(fgui.UIPackage.createObject("CommonBase","MaxAddButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_sprAdd = <fgui.GImage><any>(this.getChild("sprAdd"));
		
		
	}
}