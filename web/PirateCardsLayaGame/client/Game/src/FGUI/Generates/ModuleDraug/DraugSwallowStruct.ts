/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DraugItem from "../../Extends/ModuleDraug/DraugItem";
import DraugSwallow from "../../Extends/ModuleDraug/DraugSwallow";

export default class DraugSwallowStruct extends fgui.GComponent
{
	public m_labInfo : fgui.GTextField;
	public m_selectDraug : DraugItem;
	public m_btnSelect : fgui.GButton;
	public m_progressExp : fgui.GProgressBar;
	public m_btnSwallow : fgui.GButton;
	public m_btnClose : fgui.GButton;

	
	public static URL:string = "ui://hc5dpgynyt2lv";
	
	public static DependPackages:string[] = ["ModuleDraug"];

	
	public static createInstance():DraugSwallow {
		return <DraugSwallow><any>(fgui.UIPackage.createObject("ModuleDraug","DraugSwallow"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_labInfo = <fgui.GTextField><any>(this.getChild("labInfo"));
		this.m_selectDraug = <DraugItem><any>(this.getChild("selectDraug"));
		this.m_btnSelect = <fgui.GButton><any>(this.getChild("btnSelect"));
		this.m_progressExp = <fgui.GProgressBar><any>(this.getChild("progressExp"));
		this.m_btnSwallow = <fgui.GButton><any>(this.getChild("btnSwallow"));
		this.m_btnClose = <fgui.GButton><any>(this.getChild("btnClose"));
		
		
	}
}