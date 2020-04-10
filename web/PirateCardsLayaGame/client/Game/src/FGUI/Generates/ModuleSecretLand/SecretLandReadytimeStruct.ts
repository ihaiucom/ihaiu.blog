/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretLandReadytime from "../../Extends/ModuleSecretLand/SecretLandReadytime";

export default class SecretLandReadytimeStruct extends fgui.GLabel
{
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://62v5hdr0jqdd2p";
	
	public static DependPackages:string[] = ["ModuleSecretLand"];

	
	public static createInstance():SecretLandReadytime {
		return <SecretLandReadytime><any>(fgui.UIPackage.createObject("ModuleSecretLand","SecretLandReadytime"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}