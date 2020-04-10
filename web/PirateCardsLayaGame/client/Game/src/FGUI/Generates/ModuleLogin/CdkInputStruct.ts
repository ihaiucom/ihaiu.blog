/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AccountComboBox from "../../Extends/ModuleLogin/AccountComboBox";
import CdkInput from "../../Extends/ModuleLogin/CdkInput";

export default class CdkInputStruct extends fgui.GComponent
{
	public m_txt_cdk : fgui.GTextInput;
	public m_accountComboBox : AccountComboBox;

	
	public static URL:string = "ui://4698ugpkipa82x";
	
	public static DependPackages:string[] = ["ModuleLogin"];

	
	public static createInstance():CdkInput {
		return <CdkInput><any>(fgui.UIPackage.createObject("ModuleLogin","CdkInput"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_txt_cdk = <fgui.GTextInput><any>(this.getChild("txt_cdk"));
		this.m_accountComboBox = <AccountComboBox><any>(this.getChild("accountComboBox"));
		
		
	}
}