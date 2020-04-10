/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretBookStarCount from "../../Extends/ModuleSecretBook/SecretBookStarCount";

export default class SecretBookStarCountStruct extends fgui.GLabel
{
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://dmgf4euxoue816";
	
	public static DependPackages:string[] = ["ModuleSecretBook"];

	
	public static createInstance():SecretBookStarCount {
		return <SecretBookStarCount><any>(fgui.UIPackage.createObject("ModuleSecretBook","SecretBookStarCount"));
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