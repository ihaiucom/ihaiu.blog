/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretLandStartBtn from "../../Extends/ModuleSecretLand/SecretLandStartBtn";

export default class SecretLandStartBtnStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_IsGray : fgui.Controller;

	
	public static URL:string = "ui://62v5hdr0oxt32b";
	
	public static DependPackages:string[] = ["ModuleSecretLand"];

	
	public static createInstance():SecretLandStartBtn {
		return <SecretLandStartBtn><any>(fgui.UIPackage.createObject("ModuleSecretLand","SecretLandStartBtn"));
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