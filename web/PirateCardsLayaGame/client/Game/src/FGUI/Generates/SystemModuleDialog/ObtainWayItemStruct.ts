/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GoButton from "../../Extends/SystemModuleDialog/GoButton";
import ObtainWayItem from "../../Extends/SystemModuleDialog/ObtainWayItem";

export default class ObtainWayItemStruct extends fgui.GComponent
{
	public m_imgWar : fgui.GLoader;
	public m_labWay : fgui.GTextField;
	public m_btnGo : GoButton;

	
	public static URL:string = "ui://q5yddivts0xqj";
	
	public static DependPackages:string[] = ["SystemModuleDialog"];

	
	public static createInstance():ObtainWayItem {
		return <ObtainWayItem><any>(fgui.UIPackage.createObject("SystemModuleDialog","ObtainWayItem"));
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
		this.m_btnGo = <GoButton><any>(this.getChild("btnGo"));
		
		
	}
}