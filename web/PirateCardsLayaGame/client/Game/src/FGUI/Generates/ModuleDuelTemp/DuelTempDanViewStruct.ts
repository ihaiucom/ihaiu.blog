/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DuelTempDanView from "../../Extends/ModuleDuelTemp/DuelTempDanView";

export default class DuelTempDanViewStruct extends fgui.GComponent
{
	public m_danList : fgui.GList;
	public m_list : fgui.GList;

	
	public static URL:string = "ui://rx0filvjtgxhg";
	
	public static DependPackages:string[] = ["ModuleDuelTemp","CommonGame"];

	
	public static createInstance():DuelTempDanView {
		return <DuelTempDanView><any>(fgui.UIPackage.createObject("ModuleDuelTemp","DuelTempDanView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_danList = <fgui.GList><any>(this.getChild("danList"));
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		
		
	}
}