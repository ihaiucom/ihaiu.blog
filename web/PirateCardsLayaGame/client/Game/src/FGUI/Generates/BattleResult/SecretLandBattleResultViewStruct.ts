/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BattleResultModuleButton from "../../Extends/BattleResult/BattleResultModuleButton";
import BattleResultBoxItem from "../../Extends/BattleResult/BattleResultBoxItem";
import SecretLandExitButton from "../../Extends/BattleResult/SecretLandExitButton";
import BattleResultSecretLandPanel from "../../Extends/BattleResult/BattleResultSecretLandPanel";
import BattleResultSecretLandPanel2 from "../../Extends/BattleResult/BattleResultSecretLandPanel2";
import SecretLandBattleResultView from "../../Extends/BattleResult/SecretLandBattleResultView";

export default class SecretLandBattleResultViewStruct extends fgui.GComponent
{
	public m_View : fgui.Controller;
	public m_Dialog : fgui.Controller;
	public m_bg : fgui.GLoader;
	public m_mapName : fgui.GLoader;
	public m_keystone : fgui.GTextField;
	public m_timeLb : fgui.GTextField;
	public m_level : fgui.GTextField;
	public m_bg2 : fgui.GLoader;
	public m_moduleHero : BattleResultModuleButton;
	public m_moduleEquip : BattleResultModuleButton;
	public m_moduleDraug : BattleResultModuleButton;
	public m_box0 : BattleResultBoxItem;
	public m_box1 : BattleResultBoxItem;
	public m_box2 : BattleResultBoxItem;
	public m_box3 : BattleResultBoxItem;
	public m_exitBtn : SecretLandExitButton;
	public m_costPanel : BattleResultSecretLandPanel;
	public m_giveupPanel : BattleResultSecretLandPanel2;

	
	public static URL:string = "ui://qffcb501m0es1h";
	
	public static DependPackages:string[] = ["BattleResult","CommonGame","CommonBase"];

	
	public static createInstance():SecretLandBattleResultView {
		return <SecretLandBattleResultView><any>(fgui.UIPackage.createObject("BattleResult","SecretLandBattleResultView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_View = this.getController("View");
		this.m_Dialog = this.getController("Dialog");

		
		this.m_bg = <fgui.GLoader><any>(this.getChild("bg"));
		this.m_mapName = <fgui.GLoader><any>(this.getChild("mapName"));
		this.m_keystone = <fgui.GTextField><any>(this.getChild("keystone"));
		this.m_timeLb = <fgui.GTextField><any>(this.getChild("timeLb"));
		this.m_level = <fgui.GTextField><any>(this.getChild("level"));
		this.m_bg2 = <fgui.GLoader><any>(this.getChild("bg2"));
		this.m_moduleHero = <BattleResultModuleButton><any>(this.getChild("moduleHero"));
		this.m_moduleEquip = <BattleResultModuleButton><any>(this.getChild("moduleEquip"));
		this.m_moduleDraug = <BattleResultModuleButton><any>(this.getChild("moduleDraug"));
		this.m_box0 = <BattleResultBoxItem><any>(this.getChild("box0"));
		this.m_box1 = <BattleResultBoxItem><any>(this.getChild("box1"));
		this.m_box2 = <BattleResultBoxItem><any>(this.getChild("box2"));
		this.m_box3 = <BattleResultBoxItem><any>(this.getChild("box3"));
		this.m_exitBtn = <SecretLandExitButton><any>(this.getChild("exitBtn"));
		this.m_costPanel = <BattleResultSecretLandPanel><any>(this.getChild("costPanel"));
		this.m_giveupPanel = <BattleResultSecretLandPanel2><any>(this.getChild("giveupPanel"));
		
		
	}
}