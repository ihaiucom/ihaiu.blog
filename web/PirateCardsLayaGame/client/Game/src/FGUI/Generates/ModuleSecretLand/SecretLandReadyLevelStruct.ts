/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretLandReadyDigit from "../../Extends/ModuleSecretLand/SecretLandReadyDigit";
import SecretLandReadyLevel from "../../Extends/ModuleSecretLand/SecretLandReadyLevel";

export default class SecretLandReadyLevelStruct extends fgui.GComponent
{
	public m_digit1 : SecretLandReadyDigit;
	public m_digit2 : SecretLandReadyDigit;

	
	public static URL:string = "ui://62v5hdr0jqdd2n";
	
	public static DependPackages:string[] = ["ModuleSecretLand"];

	
	public static createInstance():SecretLandReadyLevel {
		return <SecretLandReadyLevel><any>(fgui.UIPackage.createObject("ModuleSecretLand","SecretLandReadyLevel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_digit1 = <SecretLandReadyDigit><any>(this.getChild("digit1"));
		this.m_digit2 = <SecretLandReadyDigit><any>(this.getChild("digit2"));
		
		
	}
}