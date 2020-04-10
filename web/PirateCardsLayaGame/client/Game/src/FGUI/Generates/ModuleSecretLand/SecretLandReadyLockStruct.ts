/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretLandReadyLock from "../../Extends/ModuleSecretLand/SecretLandReadyLock";

export default class SecretLandReadyLockStruct extends fgui.GComponent
{

	
	public static URL:string = "ui://62v5hdr0jqdd2s";
	
	public static DependPackages:string[] = ["ModuleSecretLand"];

	
	public static createInstance():SecretLandReadyLock {
		return <SecretLandReadyLock><any>(fgui.UIPackage.createObject("ModuleSecretLand","SecretLandReadyLock"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		
		
	}
}