/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretLandReadyDigit from "../../Extends/ModuleSecretLand/SecretLandReadyDigit";

export default class SecretLandReadyDigitStruct extends fgui.GComponent
{
	public m_num : fgui.Controller;

	
	public static URL:string = "ui://62v5hdr0fzed2u";
	
	public static DependPackages:string[] = ["ModuleSecretLand"];

	
	public static createInstance():SecretLandReadyDigit {
		return <SecretLandReadyDigit><any>(fgui.UIPackage.createObject("ModuleSecretLand","SecretLandReadyDigit"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_num = this.getController("num");

		
		
		
	}
}