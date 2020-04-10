/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretLandCommonButton from "../../Extends/ModuleSecretLand/SecretLandCommonButton";

export default class SecretLandCommonButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://62v5hdr08jdi1w";
	
	public static DependPackages:string[] = ["ModuleSecretLand"];

	
	public static createInstance():SecretLandCommonButton {
		return <SecretLandCommonButton><any>(fgui.UIPackage.createObject("ModuleSecretLand","SecretLandCommonButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		
		
	}
}