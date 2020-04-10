/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DuelTempTaskView from "../../Extends/ModuleDuelTemp/DuelTempTaskView";

export default class DuelTempTaskViewStruct extends fgui.GComponent
{
	public m_taskType : fgui.Controller;
	public m_list : fgui.GList;
	public m_closeBtn : fgui.GButton;

	
	public static URL:string = "ui://rx0filvjgfpnt";
	
	public static DependPackages:string[] = ["ModuleDuelTemp","CommonGame"];

	
	public static createInstance():DuelTempTaskView {
		return <DuelTempTaskView><any>(fgui.UIPackage.createObject("ModuleDuelTemp","DuelTempTaskView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_taskType = this.getController("taskType");

		
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_closeBtn = <fgui.GButton><any>(this.getChild("closeBtn"));
		
		
	}
}