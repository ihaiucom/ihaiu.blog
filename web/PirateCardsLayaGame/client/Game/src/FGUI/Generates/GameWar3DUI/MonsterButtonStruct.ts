/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MonsterButton from "../../Extends/GameWar3DUI/MonsterButton";

export default class MonsterButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_imgHero : fgui.GLoader;

	
	public static URL:string = "ui://yhpe9txzo56i8y";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():MonsterButton {
		return <MonsterButton><any>(fgui.UIPackage.createObject("GameWar3DUI","MonsterButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_imgHero = <fgui.GLoader><any>(this.getChild("imgHero"));
		
		
	}
}