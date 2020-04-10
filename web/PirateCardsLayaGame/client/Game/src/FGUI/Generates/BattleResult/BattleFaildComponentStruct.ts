/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BattleResultModuleButton from "../../Extends/BattleResult/BattleResultModuleButton";
import BattleFaildComponent from "../../Extends/BattleResult/BattleFaildComponent";

export default class BattleFaildComponentStruct extends fgui.GComponent
{
	public m_moduleHero : BattleResultModuleButton;
	public m_moduleEquip : BattleResultModuleButton;
	public m_moduleDraug : BattleResultModuleButton;

	
	public static URL:string = "ui://qffcb501mxqq8";
	
	public static DependPackages:string[] = ["BattleResult"];

	
	public static createInstance():BattleFaildComponent {
		return <BattleFaildComponent><any>(fgui.UIPackage.createObject("BattleResult","BattleFaildComponent"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_moduleHero = <BattleResultModuleButton><any>(this.getChild("moduleHero"));
		this.m_moduleEquip = <BattleResultModuleButton><any>(this.getChild("moduleEquip"));
		this.m_moduleDraug = <BattleResultModuleButton><any>(this.getChild("moduleDraug"));
		
		
	}
}