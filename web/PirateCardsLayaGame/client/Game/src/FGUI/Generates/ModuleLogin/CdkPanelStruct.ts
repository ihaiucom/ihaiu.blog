/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CdkInput from "../../Extends/ModuleLogin/CdkInput";
import CdkPanel from "../../Extends/ModuleLogin/CdkPanel";

export default class CdkPanelStruct extends fgui.GComponent
{
	public m_cdkInput : CdkInput;
	public m_btn_cdk : fgui.GButton;

	
	public static URL:string = "ui://4698ugpkipa82w";
	
	public static DependPackages:string[] = ["ModuleLogin"];

	
	public static createInstance():CdkPanel {
		return <CdkPanel><any>(fgui.UIPackage.createObject("ModuleLogin","CdkPanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_cdkInput = <CdkInput><any>(this.getChild("cdkInput"));
		this.m_btn_cdk = <fgui.GButton><any>(this.getChild("btn_cdk"));
		
		
	}
}