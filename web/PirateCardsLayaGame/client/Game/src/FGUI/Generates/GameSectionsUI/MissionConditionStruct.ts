/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MissionCondition from "../../Extends/GameSectionsUI/MissionCondition";

export default class MissionConditionStruct extends fgui.GLabel
{
	public m_icon : fgui.GLoader;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://0ajdzfv8wdlfz41";
	
	public static DependPackages:string[] = ["GameSectionsUI"];

	
	public static createInstance():MissionCondition {
		return <MissionCondition><any>(fgui.UIPackage.createObject("GameSectionsUI","MissionCondition"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}