/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroSmallItemButton from "../../Extends/CommonGame/HeroSmallItemButton";
import SecretBookHeroItem from "../../Extends/ModuleSecretBook/SecretBookHeroItem";

export default class SecretBookHeroItemStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_item : HeroSmallItemButton;

	
	public static URL:string = "ui://dmgf4euxsjrp1";
	
	public static DependPackages:string[] = ["ModuleSecretBook","CommonGame"];

	
	public static createInstance():SecretBookHeroItem {
		return <SecretBookHeroItem><any>(fgui.UIPackage.createObject("ModuleSecretBook","SecretBookHeroItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_item = <HeroSmallItemButton><any>(this.getChild("item"));
		
		
	}
}