/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DuelTempDanView2 from "../../Extends/ModuleDuelTemp/DuelTempDanView2";

export default class DuelTempDanView2Struct extends fgui.GComponent
{
	public m_list : fgui.GList;

	
	public static URL:string = "ui://rx0filvjtgxhj";
	
	public static DependPackages:string[] = ["ModuleDuelTemp","CommonGame"];

	
	public static createInstance():DuelTempDanView2 {
		return <DuelTempDanView2><any>(fgui.UIPackage.createObject("ModuleDuelTemp","DuelTempDanView2"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		
		
	}
}