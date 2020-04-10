/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ItemDialog from "../../Extends/SystemModuleDialog/ItemDialog";

export default class ItemDialogStruct extends fgui.GComponent
{
	public m_listItem : fgui.GList;
	public m_btnOk : fgui.GButton;

	
	public static URL:string = "ui://q5yddivtvbey9";
	
	public static DependPackages:string[] = ["SystemModuleDialog","ModuleDialogs"];

	
	public static createInstance():ItemDialog {
		return <ItemDialog><any>(fgui.UIPackage.createObject("SystemModuleDialog","ItemDialog"));
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