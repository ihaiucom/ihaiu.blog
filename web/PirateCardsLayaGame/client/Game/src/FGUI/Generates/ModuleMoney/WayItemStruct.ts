/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import WayItem from "../../Extends/ModuleMoney/WayItem";

export default class WayItemStruct extends fgui.GComponent
{
	public m_imgWar : fgui.GLoader;
	public m_labWay : fgui.GTextField;
	public m_btnGo : fgui.GButton;

	
	public static URL:string = "ui://mwn8bfqlovfrh";
	
	public static DependPackages:string[] = ["ModuleMoney"];

	
	public static createInstance():WayItem {
		return <WayItem><any>(fgui.UIPackage.createObject("ModuleMoney","WayItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_imgWar = <fgui.GLoader><any>(this.getChild("imgWar"));
		this.m_labWay = <fgui.GTextField><any>(this.getChild("labWay"));
		this.m_btnGo = <fgui.GButton><any>(this.getChild("btnGo"));
		
		
	}
}