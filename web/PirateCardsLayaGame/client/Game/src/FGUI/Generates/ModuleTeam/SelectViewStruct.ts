/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SelectView from "../../Extends/ModuleTeam/SelectView";

export default class SelectViewStruct extends fgui.GComponent
{
	public m_Type : fgui.Controller;
	public m_listType : fgui.GList;
	public m_listSection : fgui.GList;
	public m_btnSelect : fgui.GButton;

	
	public static URL:string = "ui://2ri2ybgkmt4511";
	
	public static DependPackages:string[] = ["ModuleTeam"];

	
	public static createInstance():SelectView {
		return <SelectView><any>(fgui.UIPackage.createObject("ModuleTeam","SelectView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_Type = this.getController("Type");

		
		this.m_listType = <fgui.GList><any>(this.getChild("listType"));
		this.m_listSection = <fgui.GList><any>(this.getChild("listSection"));
		this.m_btnSelect = <fgui.GButton><any>(this.getChild("btnSelect"));
		
		
	}
}