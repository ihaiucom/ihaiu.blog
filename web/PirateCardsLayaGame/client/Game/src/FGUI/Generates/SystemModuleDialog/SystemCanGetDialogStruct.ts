/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SystemCanGetDialog from "../../Extends/SystemModuleDialog/SystemCanGetDialog";

export default class SystemCanGetDialogStruct extends fgui.GComponent
{
	public m_listItem : fgui.GList;
	public m_labShow : fgui.GTextField;
	public m_btnOk : fgui.GButton;

	
	public static URL:string = "ui://q5yddivtk1yv1l";
	
	public static DependPackages:string[] = ["SystemModuleDialog","CommonGame"];

	
	public static createInstance():SystemCanGetDialog {
		return <SystemCanGetDialog><any>(fgui.UIPackage.createObject("SystemModuleDialog","SystemCanGetDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_listItem = <fgui.GList><any>(this.getChild("listItem"));
		this.m_labShow = <fgui.GTextField><any>(this.getChild("labShow"));
		this.m_btnOk = <fgui.GButton><any>(this.getChild("btnOk"));
		
		
	}
}