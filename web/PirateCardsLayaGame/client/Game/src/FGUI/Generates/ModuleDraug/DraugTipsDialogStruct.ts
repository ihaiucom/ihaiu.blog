/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DraugTipsDialog from "../../Extends/ModuleDraug/DraugTipsDialog";

export default class DraugTipsDialogStruct extends fgui.GComponent
{
	public m_listAwakenProbability : fgui.GList;
	public m_listDraugProbability : fgui.GList;
	public m_btnOk : fgui.GButton;

	
	public static URL:string = "ui://hc5dpgynexbl3v";
	
	public static DependPackages:string[] = ["ModuleDraug","CommonGame"];

	
	public static createInstance():DraugTipsDialog {
		return <DraugTipsDialog><any>(fgui.UIPackage.createObject("ModuleDraug","DraugTipsDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_listAwakenProbability = <fgui.GList><any>(this.getChild("listAwakenProbability"));
		this.m_listDraugProbability = <fgui.GList><any>(this.getChild("listDraugProbability"));
		this.m_btnOk = <fgui.GButton><any>(this.getChild("btnOk"));
		
		
	}
}