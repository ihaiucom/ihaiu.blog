/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import WindowHead2 from "../../Extends/CommonGame/WindowHead2";
import SecretLandAffixWindowUI from "../../Extends/ModuleSecretLand/SecretLandAffixWindowUI";

export default class SecretLandAffixWindowUIStruct extends fgui.GComponent
{
	public m_list : fgui.GList;
	public m_head : WindowHead2;

	
	public static URL:string = "ui://62v5hdr0qhkn1";
	
	public static DependPackages:string[] = ["ModuleSecretLand","CommonGame","CommonBase"];

	
	public static createInstance():SecretLandAffixWindowUI {
		return <SecretLandAffixWindowUI><any>(fgui.UIPackage.createObject("ModuleSecretLand","SecretLandAffixWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_head = <WindowHead2><any>(this.getChild("head"));
		
		
	}
}