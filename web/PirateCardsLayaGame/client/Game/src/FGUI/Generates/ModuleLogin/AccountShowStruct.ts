/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AccountShow from "../../Extends/ModuleLogin/AccountShow";

export default class AccountShowStruct extends fgui.GComponent
{
	public m_txt_account : fgui.GTextField;

	
	public static URL:string = "ui://4698ugpkneo62q";
	
	public static DependPackages:string[] = ["ModuleLogin"];

	
	public static createInstance():AccountShow {
		return <AccountShow><any>(fgui.UIPackage.createObject("ModuleLogin","AccountShow"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_txt_account = <fgui.GTextField><any>(this.getChild("txt_account"));
		
		
	}
}