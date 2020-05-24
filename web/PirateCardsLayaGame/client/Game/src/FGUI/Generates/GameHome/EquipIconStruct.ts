/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipIcon from "../../Extends/GameHome/EquipIcon";

export default class EquipIconStruct extends fgui.GLabel
{
	public m_itemType : fgui.Controller;
	public m_step : fgui.Controller;
	public m_bg : fgui.GLoader;
	public m_icon : fgui.GLoader;
	public m_stepText : fgui.GTextField;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://moe42ygrn2s1cp";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():EquipIcon {
		return <EquipIcon><any>(fgui.UIPackage.createObject("GameHome","EquipIcon"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_itemType = this.getController("itemType");
		this.m_step = this.getController("step");

		
		this.m_bg = <fgui.GLoader><any>(this.getChild("bg"));
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_stepText = <fgui.GTextField><any>(this.getChild("stepText"));
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}