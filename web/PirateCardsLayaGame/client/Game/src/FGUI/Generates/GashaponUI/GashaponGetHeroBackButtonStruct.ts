/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GashaponGetHeroBackButton from "../../Extends/GashaponUI/GashaponGetHeroBackButton";

export default class GashaponGetHeroBackButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;

	
	public static URL:string = "ui://660ksptmhwig7";
	
	public static DependPackages:string[] = ["GashaponUI","_ResImageUIV1"];

	
	public static createInstance():GashaponGetHeroBackButton {
		return <GashaponGetHeroBackButton><any>(fgui.UIPackage.createObject("GashaponUI","GashaponGetHeroBackButton"));
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