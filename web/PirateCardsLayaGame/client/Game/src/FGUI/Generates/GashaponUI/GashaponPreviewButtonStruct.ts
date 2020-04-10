/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GashaponPreviewButton from "../../Extends/GashaponUI/GashaponPreviewButton";

export default class GashaponPreviewButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;

	
	public static URL:string = "ui://660ksptmqo9t3";
	
	public static DependPackages:string[] = ["GashaponUI"];

	
	public static createInstance():GashaponPreviewButton {
		return <GashaponPreviewButton><any>(fgui.UIPackage.createObject("GashaponUI","GashaponPreviewButton"));
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