/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PlayerHeadIcon from "../../Extends/CommonGame/PlayerHeadIcon";

export default class PlayerHeadIconStruct extends fgui.GButton
{
	public m_icon : fgui.GLoader;
	public m_iconBox : fgui.GLoader;

	
	public static URL:string = "ui://4snov4n9832rz5b";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():PlayerHeadIcon {
		return <PlayerHeadIcon><any>(fgui.UIPackage.createObject("CommonGame","PlayerHeadIcon"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_iconBox = <fgui.GLoader><any>(this.getChild("iconBox"));
		
		
	}
}