/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CoolProgressBar from "../../Extends/GameWarUI/CoolProgressBar";

export default class CoolProgressBarStruct extends fgui.GProgressBar
{
	public m_imgShade : fgui.GImage;

	
	public static URL:string = "ui://rfow21em98hpb";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():CoolProgressBar {
		return <CoolProgressBar><any>(fgui.UIPackage.createObject("GameWarUI","CoolProgressBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_imgShade = <fgui.GImage><any>(this.getChild("imgShade"));
		
		
	}
}