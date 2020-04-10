/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretButton from "../../Extends/ModuleSecretBook/SecretButton";

export default class SecretButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;

	
	public static URL:string = "ui://dmgf4euxsjrp4";
	
	public static DependPackages:string[] = ["ModuleSecretBook"];

	
	public static createInstance():SecretButton {
		return <SecretButton><any>(fgui.UIPackage.createObject("ModuleSecretBook","SecretButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		
		
	}
}