/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretLandBestScore from "../../Extends/ModuleSecretLand/SecretLandBestScore";

export default class SecretLandBestScoreStruct extends fgui.GComponent
{
	public m_bestScore : fgui.GTextField;

	
	public static URL:string = "ui://62v5hdr08jdi26";
	
	public static DependPackages:string[] = ["ModuleSecretLand"];

	
	public static createInstance():SecretLandBestScore {
		return <SecretLandBestScore><any>(fgui.UIPackage.createObject("ModuleSecretLand","SecretLandBestScore"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bestScore = <fgui.GTextField><any>(this.getChild("bestScore"));
		
		
	}
}