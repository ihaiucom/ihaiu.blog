/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SystemItemDialog from "../../Extends/SystemModuleDialog/SystemItemDialog";

export default class SystemItemDialogStruct extends fgui.GComponent
{
	public m_listItem : fgui.GList;
	public m_btnOk : fgui.GButton;

	
	public static URL:string = "ui://q5yddivtvbey6";
	
	public static DependPackages:string[] = ["SystemModuleDialog"];

	
	public static createInstance():SystemItemDialog {
		return <SystemItemDialog><any>(fgui.UIPackage.createObject("SystemModuleDialog","SystemItemDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_listItem = <fgui.GList><any>(this.getChild("listItem"));
		this.m_btnOk = <fgui.GButton><any>(this.getChild("btnOk"));
		
		
	}
}