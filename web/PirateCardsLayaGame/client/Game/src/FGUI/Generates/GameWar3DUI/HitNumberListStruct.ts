/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HitNumberList from "../../Extends/GameWar3DUI/HitNumberList";

export default class HitNumberListStruct extends fgui.GComponent
{
	public m_num0 : fgui.GLoader;
	public m_num1 : fgui.GLoader;
	public m_num2 : fgui.GLoader;

	
	public static URL:string = "ui://yhpe9txzta999h";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():HitNumberList {
		return <HitNumberList><any>(fgui.UIPackage.createObject("GameWar3DUI","HitNumberList"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_num0 = <fgui.GLoader><any>(this.getChild("num0"));
		this.m_num1 = <fgui.GLoader><any>(this.getChild("num1"));
		this.m_num2 = <fgui.GLoader><any>(this.getChild("num2"));
		
		
	}
}