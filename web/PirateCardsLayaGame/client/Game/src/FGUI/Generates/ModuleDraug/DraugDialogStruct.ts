/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DraugInfoTips from "../../Extends/ModuleDraug/DraugInfoTips";
import DraugDialog from "../../Extends/ModuleDraug/DraugDialog";

export default class DraugDialogStruct extends fgui.GComponent
{
	public m_type : fgui.Controller;
	public m_mainTips : DraugInfoTips;
	public m_viceTips : DraugInfoTips;
	public m_swallowTips : DraugInfoTips;

	
	public static URL:string = "ui://hc5dpgynrpfq15";
	
	public static DependPackages:string[] = ["ModuleDraug","CommonBase"];

	
	public static createInstance():DraugDialog {
		return <DraugDialog><any>(fgui.UIPackage.createObject("ModuleDraug","DraugDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_type = this.getController("type");

		
		this.m_mainTips = <DraugInfoTips><any>(this.getChild("mainTips"));
		this.m_viceTips = <DraugInfoTips><any>(this.getChild("viceTips"));
		this.m_swallowTips = <DraugInfoTips><any>(this.getChild("swallowTips"));
		
		
	}
}