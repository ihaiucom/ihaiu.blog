/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GashaponGetHeroButton from "../../Extends/GashaponUI/GashaponGetHeroButton";

export default class GashaponGetHeroButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://660ksptmhwig6";
	
	public static DependPackages:string[] = ["GashaponUI","_ResImageUIV1"];

	
	public static createInstance():GashaponGetHeroButton {
		return <GashaponGetHeroButton><any>(fgui.UIPackage.createObject("GashaponUI","GashaponGetHeroButton"));
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