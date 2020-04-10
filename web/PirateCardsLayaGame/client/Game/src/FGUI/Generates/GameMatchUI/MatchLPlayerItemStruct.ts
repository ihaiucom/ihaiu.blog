/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MatchLPlayerItem from "../../Extends/GameMatchUI/MatchLPlayerItem";

export default class MatchLPlayerItemStruct extends fgui.GComponent
{
	public m_role : fgui.Controller;
	public m_imgRole : fgui.GLoader;
	public m_imCareer : fgui.GLoader;
	public m_labPlayer : fgui.GTextField;
	public m_labServer : fgui.GTextField;
	public m_labTalent : fgui.GTextField;

	
	public static URL:string = "ui://axwa07kxuqxnw1u";
	
	public static DependPackages:string[] = ["GameMatchUI"];

	
	public static createInstance():MatchLPlayerItem {
		return <MatchLPlayerItem><any>(fgui.UIPackage.createObject("GameMatchUI","MatchLPlayerItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_role = this.getController("role");

		
		this.m_imgRole = <fgui.GLoader><any>(this.getChild("imgRole"));
		this.m_imCareer = <fgui.GLoader><any>(this.getChild("imCareer"));
		this.m_labPlayer = <fgui.GTextField><any>(this.getChild("labPlayer"));
		this.m_labServer = <fgui.GTextField><any>(this.getChild("labServer"));
		this.m_labTalent = <fgui.GTextField><any>(this.getChild("labTalent"));
		
		
	}
}