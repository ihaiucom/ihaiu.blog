/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ItemNumButton from "../../Extends/CommonBase/ItemNumButton";

export default class ItemNumButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_icon : fgui.GLoader;
	public m_num : fgui.GTextField;
	public m_name : fgui.GTextField;

	
	public static URL:string = "ui://jaoapdichwigb";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():ItemNumButton {
		return <ItemNumButton><any>(fgui.UIPackage.createObject("CommonBase","ItemNumButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_num = <fgui.GTextField><any>(this.getChild("num"));
		this.m_name = <fgui.GTextField><any>(this.getChild("name"));
		
		
	}
}