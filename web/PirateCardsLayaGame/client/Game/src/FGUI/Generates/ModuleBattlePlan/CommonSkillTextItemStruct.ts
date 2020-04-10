/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonSkillTextItem from "../../Extends/ModuleBattlePlan/CommonSkillTextItem";

export default class CommonSkillTextItemStruct extends fgui.GComponent
{
	public m_info : fgui.GTextField;

	
	public static URL:string = "ui://lrfjmmwxnbl51m";
	
	public static DependPackages:string[] = ["ModuleBattlePlan"];

	
	public static createInstance():CommonSkillTextItem {
		return <CommonSkillTextItem><any>(fgui.UIPackage.createObject("ModuleBattlePlan","commonSkillTextItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_info = <fgui.GTextField><any>(this.getChild("info"));
		
		
	}
}