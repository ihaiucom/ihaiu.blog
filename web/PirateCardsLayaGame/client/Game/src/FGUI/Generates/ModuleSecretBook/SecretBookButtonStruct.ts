/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretBookButton from "../../Extends/ModuleSecretBook/SecretBookButton";

export default class SecretBookButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_View : fgui.Controller;

	
	public static URL:string = "ui://dmgf4euxsjrp9";
	
	public static DependPackages:string[] = ["ModuleSecretBook"];

	
	public static createInstance():SecretBookButton {
		return <SecretBookButton><any>(fgui.UIPackage.createObject("ModuleSecretBook","SecretBookButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_View = this.getController("View");

		
		
		
	}
}