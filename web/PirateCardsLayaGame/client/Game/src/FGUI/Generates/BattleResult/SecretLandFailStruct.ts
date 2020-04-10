/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BattleResultModuleButton from "../../Extends/BattleResult/BattleResultModuleButton";
import BattleResultSecretBox from "../../Extends/BattleResult/BattleResultSecretBox";
import SecretLandFail from "../../Extends/BattleResult/SecretLandFail";

export default class SecretLandFailStruct extends fgui.GComponent
{
	public m_isTimeOver : fgui.Controller;
	public m_secretLandIdLb : fgui.GTextField;
	public m_mapName : fgui.GTextField;
	public m_keystone : fgui.GTextField;
	public m_moduleHero : BattleResultModuleButton;
	public m_moduleEquip : BattleResultModuleButton;
	public m_moduleDraug : BattleResultModuleButton;
	public m_box0 : BattleResultSecretBox;
	public m_box1 : BattleResultSecretBox;
	public m_box2 : BattleResultSecretBox;
	public m_box3 : BattleResultSecretBox;

	
	public static URL:string = "ui://qffcb501ee481i";
	
	public static DependPackages:string[] = ["BattleResult"];

	
	public static createInstance():SecretLandFail {
		return <SecretLandFail><any>(fgui.UIPackage.createObject("BattleResult","SecretLandFail"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_isTimeOver = this.getController("isTimeOver");

		
		this.m_secretLandIdLb = <fgui.GTextField><any>(this.getChild("secretLandIdLb"));
		this.m_mapName = <fgui.GTextField><any>(this.getChild("mapName"));
		this.m_keystone = <fgui.GTextField><any>(this.getChild("keystone"));
		this.m_moduleHero = <BattleResultModuleButton><any>(this.getChild("moduleHero"));
		this.m_moduleEquip = <BattleResultModuleButton><any>(this.getChild("moduleEquip"));
		this.m_moduleDraug = <BattleResultModuleButton><any>(this.getChild("moduleDraug"));
		this.m_box0 = <BattleResultSecretBox><any>(this.getChild("box0"));
		this.m_box1 = <BattleResultSecretBox><any>(this.getChild("box1"));
		this.m_box2 = <BattleResultSecretBox><any>(this.getChild("box2"));
		this.m_box3 = <BattleResultSecretBox><any>(this.getChild("box3"));
		
		
	}
}