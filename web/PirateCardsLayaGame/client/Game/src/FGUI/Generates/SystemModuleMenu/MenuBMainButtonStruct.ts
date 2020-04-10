/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuBMainButton from "../../Extends/SystemModuleMenu/MenuBMainButton";

export default class MenuBMainButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_c_visible_new : fgui.Controller;
	public m_t0 : fgui.Transition;
	public m_icon : fgui.GLoader;
	public m_lock : fgui.GImage;
	public m_new : fgui.GImage;
	public m_butterflyFx : fgui.GMovieClip;
	public m_red : fgui.GObject;

	
	public static URL:string = "ui://4rsi5gesszhv3";
	
	public static DependPackages:string[] = ["SystemModuleMenu","_ResImageUIV1"];

	
	public static createInstance():MenuBMainButton {
		return <MenuBMainButton><any>(fgui.UIPackage.createObject("SystemModuleMenu","MenuBMainButton"));
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
		this.m_butterflyFx = <fgui.GMovieClip><any>(this.getChild("butterflyFx"));
		this.m_red = <fgui.GObject><any>(this.getChild("red"));
		
		
		this.m_t0 =  this.getTransition("t0");
	}
}