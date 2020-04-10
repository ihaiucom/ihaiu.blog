/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BattleResultModuleButton from "../../Extends/BattleResult/BattleResultModuleButton";

export default class BattleResultModuleButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_menuId : fgui.Controller;
	public m_icon : fgui.GLoader;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://qffcb501opl01f";
	
	public static DependPackages:string[] = ["BattleResult"];

	
	public static createInstance():BattleResultModuleButton {
		return <BattleResultModuleButton><any>(fgui.UIPackage.createObject("BattleResult","BattleResultModuleButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_menuId = this.getController("menuId");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}