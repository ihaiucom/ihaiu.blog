/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PVPHallListItem from "../../Extends/ModulePVPHall/PVPHallListItem";

export default class PVPHallListItemStruct extends fgui.GLabel
{
	public m_viewType : fgui.Controller;
	public m_mode : fgui.Controller;
	public m_isLimit : fgui.Controller;
	public m_bg : fgui.GLoader;
	public m_condition : fgui.GTextField;
	public m_des : fgui.GTextField;
	public m_limitLb : fgui.GTextField;

	
	public static URL:string = "ui://rbzd77jztmrl1";
	
	public static DependPackages:string[] = ["ModulePVPHall"];

	
	public static createInstance():PVPHallListItem {
		return <PVPHallListItem><any>(fgui.UIPackage.createObject("ModulePVPHall","PVPHallListItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_viewType = this.getController("viewType");
		this.m_mode = this.getController("mode");
		this.m_isLimit = this.getController("isLimit");

		
		this.m_bg = <fgui.GLoader><any>(this.getChild("bg"));
		this.m_condition = <fgui.GTextField><any>(this.getChild("condition"));
		this.m_des = <fgui.GTextField><any>(this.getChild("des"));
		this.m_limitLb = <fgui.GTextField><any>(this.getChild("limitLb"));
		
		
	}
}