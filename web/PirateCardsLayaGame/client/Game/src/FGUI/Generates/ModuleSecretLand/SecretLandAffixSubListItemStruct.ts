/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AffixCommon from "../../Extends/CommonGame/AffixCommon";
import SecretLandAffixSubListItem from "../../Extends/ModuleSecretLand/SecretLandAffixSubListItem";

export default class SecretLandAffixSubListItemStruct extends fgui.GLabel
{
	public m_title : fgui.GTextField;
	public m_item : AffixCommon;

	
	public static URL:string = "ui://62v5hdr0qhkn5";
	
	public static DependPackages:string[] = ["ModuleSecretLand","CommonGame"];

	
	public static createInstance():SecretLandAffixSubListItem {
		return <SecretLandAffixSubListItem><any>(fgui.UIPackage.createObject("ModuleSecretLand","SecretLandAffixSubListItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_item = <AffixCommon><any>(this.getChild("item"));
		
		
	}
}