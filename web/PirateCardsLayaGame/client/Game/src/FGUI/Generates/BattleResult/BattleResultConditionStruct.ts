/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BattleResultCondition from "../../Extends/BattleResult/BattleResultCondition";

export default class BattleResultConditionStruct extends fgui.GLabel
{
	public m_isGet : fgui.Controller;
	public m_icon : fgui.GLoader;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://qffcb5018w2mz";
	
	public static DependPackages:string[] = ["BattleResult"];

	
	public static createInstance():BattleResultCondition {
		return <BattleResultCondition><any>(fgui.UIPackage.createObject("BattleResult","BattleResultCondition"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_isGet = this.getController("isGet");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}