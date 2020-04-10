/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroHeadIcon from "../../Extends/CommonGame/HeroHeadIcon";

export default class HeroHeadIconStruct extends fgui.GComponent
{
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://4snov4n9lzv90";
	
	public static DependPackages:string[] = ["CommonGame","_ResImageUIV1"];

	
	public static createInstance():HeroHeadIcon {
		return <HeroHeadIcon><any>(fgui.UIPackage.createObject("CommonGame","HeroHeadIcon"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		
		
	}
}