/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BackButton from "../../Extends/CommonBase/BackButton";

export default class BackButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_View : fgui.Controller;

	
	public static URL:string = "ui://jaoapdicvpjn1o";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():BackButton {
		return <BackButton><any>(fgui.UIPackage.createObject("CommonBase","BackButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_View = this.getController("View");

		
		
		
	}
}