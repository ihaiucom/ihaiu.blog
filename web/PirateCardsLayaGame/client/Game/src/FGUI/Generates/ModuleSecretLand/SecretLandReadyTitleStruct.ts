/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretLandReadyTitle from "../../Extends/ModuleSecretLand/SecretLandReadyTitle";

export default class SecretLandReadyTitleStruct extends fgui.GComponent
{
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://62v5hdr0jqdd2c";
	
	public static DependPackages:string[] = ["ModuleSecretLand"];

	
	public static createInstance():SecretLandReadyTitle {
		return <SecretLandReadyTitle><any>(fgui.UIPackage.createObject("ModuleSecretLand","SecretLandReadyTitle"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		
		
	}
}