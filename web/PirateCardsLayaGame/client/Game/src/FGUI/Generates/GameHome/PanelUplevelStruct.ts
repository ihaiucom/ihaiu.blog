/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ScreenBG from "../../Extends/GameLaunch/ScreenBG";
import UplevelAlert from "../../Extends/GameHome/UplevelAlert";
import PanelUplevel from "../../Extends/GameHome/PanelUplevel";

export default class PanelUplevelStruct extends fgui.GComponent
{
	public m_bg : ScreenBG;
	public m_panel : UplevelAlert;

	
	public static URL:string = "ui://moe42ygrn2s1cq";
	
	public static DependPackages:string[] = ["GameHome","GameLaunch"];

	
	public static createInstance():PanelUplevel {
		return <PanelUplevel><any>(fgui.UIPackage.createObject("GameHome","PanelUplevel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bg = <ScreenBG><any>(this.getChild("bg"));
		this.m_panel = <UplevelAlert><any>(this.getChild("panel"));
		
		
	}
}