/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DraugInfoTips from "../../Extends/ModuleDraug/DraugInfoTips";
import DraugInfoDialog from "../../Extends/ModuleDraug/DraugInfoDialog";

export default class DraugInfoDialogStruct extends fgui.GComponent
{
	public m_Type : fgui.Controller;
	public m_Wear : fgui.Controller;
	public m_mainTips : DraugInfoTips;
	public m_viceTips : DraugInfoTips;
	public m_swallowTips : DraugInfoTips;
	public m_beSwallowTips : DraugInfoTips;

	
	public static URL:string = "ui://hc5dpgynasxn1l";
	
	public static DependPackages:string[] = ["ModuleDraug","CommonBase"];

	
	public static createInstance():DraugInfoDialog {
		return <DraugInfoDialog><any>(fgui.UIPackage.createObject("ModuleDraug","DraugInfoDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_Type = this.getController("Type");
		this.m_Wear = this.getController("Wear");

		
		this.m_mainTips = <DraugInfoTips><any>(this.getChild("mainTips"));
		this.m_viceTips = <DraugInfoTips><any>(this.getChild("viceTips"));
		this.m_swallowTips = <DraugInfoTips><any>(this.getChild("swallowTips"));
		this.m_beSwallowTips = <DraugInfoTips><any>(this.getChild("beSwallowTips"));
		
		
	}
}