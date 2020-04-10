/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretLandAffixListItem from "../../Extends/ModuleSecretLand/SecretLandAffixListItem";

export default class SecretLandAffixListItemStruct extends fgui.GComponent
{
	public m_icon : fgui.GLoader;
	public m_list : fgui.GList;

	
	public static URL:string = "ui://62v5hdr0qhkn2";
	
	public static DependPackages:string[] = ["ModuleSecretLand","_ResImageUIV1"];

	
	public static createInstance():SecretLandAffixListItem {
		return <SecretLandAffixListItem><any>(fgui.UIPackage.createObject("ModuleSecretLand","SecretLandAffixListItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		
		
	}
}