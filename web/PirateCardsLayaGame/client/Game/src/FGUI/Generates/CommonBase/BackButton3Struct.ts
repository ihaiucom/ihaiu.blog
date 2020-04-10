/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BackButton3 from "../../Extends/CommonBase/BackButton3";

export default class BackButton3Struct extends fgui.GButton
{
	public m_button : fgui.Controller;

	
	public static URL:string = "ui://jaoapdickll62b";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():BackButton3 {
		return <BackButton3><any>(fgui.UIPackage.createObject("CommonBase","BackButton3"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		
		
	}
}