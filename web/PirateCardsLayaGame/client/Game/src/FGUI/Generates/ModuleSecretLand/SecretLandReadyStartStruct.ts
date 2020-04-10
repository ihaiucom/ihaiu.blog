/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretLandReadyStart from "../../Extends/ModuleSecretLand/SecretLandReadyStart";

export default class SecretLandReadyStartStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_IsGray : fgui.Controller;

	
	public static URL:string = "ui://62v5hdr0jqdd2t";
	
	public static DependPackages:string[] = ["ModuleSecretLand"];

	
	public static createInstance():SecretLandReadyStart {
		return <SecretLandReadyStart><any>(fgui.UIPackage.createObject("ModuleSecretLand","SecretLandReadyStart"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_IsGray = this.getController("IsGray");

		
		
		
	}
}