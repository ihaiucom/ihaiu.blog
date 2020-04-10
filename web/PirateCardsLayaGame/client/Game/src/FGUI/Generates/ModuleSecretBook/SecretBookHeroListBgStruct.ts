/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretBookHeroListBg from "../../Extends/ModuleSecretBook/SecretBookHeroListBg";

export default class SecretBookHeroListBgStruct extends fgui.GComponent
{

	
	public static URL:string = "ui://dmgf4euxsh0oi";
	
	public static DependPackages:string[] = ["ModuleSecretBook"];

	
	public static createInstance():SecretBookHeroListBg {
		return <SecretBookHeroListBg><any>(fgui.UIPackage.createObject("ModuleSecretBook","SecretBookHeroListBg"));
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