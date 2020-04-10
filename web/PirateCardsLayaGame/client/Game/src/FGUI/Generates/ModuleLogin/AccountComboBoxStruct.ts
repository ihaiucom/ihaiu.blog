/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AccountComboBox from "../../Extends/ModuleLogin/AccountComboBox";

export default class AccountComboBoxStruct extends fgui.GComponent
{
	public m_c1 : fgui.Controller;

	
	public static URL:string = "ui://4698ugpknz0c1i";
	
	public static DependPackages:string[] = ["ModuleLogin"];

	
	public static createInstance():AccountComboBox {
		return <AccountComboBox><any>(fgui.UIPackage.createObject("ModuleLogin","AccountComboBox"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_c1 = this.getController("c1");

		
		
		
	}
}