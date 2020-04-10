/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DamageBar from "../../Extends/GameWar3DUI/DamageBar";

export default class DamageBarStruct extends fgui.GProgressBar
{
	public m_bar : fgui.GImage;

	
	public static URL:string = "ui://yhpe9txzk8vb9a";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():DamageBar {
		return <DamageBar><any>(fgui.UIPackage.createObject("GameWar3DUI","DamageBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bar = <fgui.GImage><any>(this.getChild("bar"));
		
		
	}
}