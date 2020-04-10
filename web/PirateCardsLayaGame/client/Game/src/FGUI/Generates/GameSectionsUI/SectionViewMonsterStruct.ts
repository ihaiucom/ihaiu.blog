/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SectionAddButton from "../../Extends/GameSectionsUI/SectionAddButton";
import SectionViewMonster from "../../Extends/GameSectionsUI/SectionViewMonster";

export default class SectionViewMonsterStruct extends fgui.GComponent
{
	public m_background : fgui.GLoader;
	public m_list : fgui.GList;
	public m_times : fgui.GTextField;
	public m_addTimesBtn : SectionAddButton;

	
	public static URL:string = "ui://0ajdzfv8l03wz2c";
	
	public static DependPackages:string[] = ["GameSectionsUI"];

	
	public static createInstance():SectionViewMonster {
		return <SectionViewMonster><any>(fgui.UIPackage.createObject("GameSectionsUI","SectionViewMonster"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_background = <fgui.GLoader><any>(this.getChild("background"));
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_times = <fgui.GTextField><any>(this.getChild("times"));
		this.m_addTimesBtn = <SectionAddButton><any>(this.getChild("addTimesBtn"));
		
		
	}
}