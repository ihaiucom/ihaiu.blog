/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuBButton from "../../Extends/SystemModuleMenu/MenuBButton";

export default class MenuBButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_c_visible_new : fgui.Controller;
	public m_icon : fgui.GLoader;
	public m_lock : fgui.GImage;
	public m_new : fgui.GImage;
	public m_red : fgui.GObject;

	
	public static URL:string = "ui://4rsi5gesszhvf";
	
	public static DependPackages:string[] = ["SystemModuleMenu"];

	
	public static createInstance():MenuBButton {
		return <MenuBButton><any>(fgui.UIPackage.createObject("SystemModuleMenu","MenuBButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_c_visible_new = this.getController("c_visible_new");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_lock = <fgui.GImage><any>(this.getChild("lock"));
		this.m_new = <fgui.GImage><any>(this.getChild("new"));
		this.m_red = <fgui.GObject><any>(this.getChild("red"));
		
		
	}
}