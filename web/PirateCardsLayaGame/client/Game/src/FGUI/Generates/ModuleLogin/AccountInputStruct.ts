/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AccountComboBox from "../../Extends/ModuleLogin/AccountComboBox";
import AccountInput from "../../Extends/ModuleLogin/AccountInput";

export default class AccountInputStruct extends fgui.GComponent
{
	public m_txt_account : fgui.GTextInput;
	public m_accountComboBox : AccountComboBox;

	
	public static URL:string = "ui://4698ugpknz0c1h";
	
	public static DependPackages:string[] = ["ModuleLogin"];

	
	public static createInstance():AccountInput {
		return <AccountInput><any>(fgui.UIPackage.createObject("ModuleLogin","AccountInput"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_txt_account = <fgui.GTextInput><any>(this.getChild("txt_account"));
		this.m_accountComboBox = <AccountComboBox><any>(this.getChild("accountComboBox"));
		
		
	}
}