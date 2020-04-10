/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SwitchChpaterButton from "../../Extends/GameSectionsUI/SwitchChpaterButton";
import SwitchChapter from "../../Extends/GameSectionsUI/SwitchChapter";

export default class SwitchChapterStruct extends fgui.GComponent
{
	public m_title : fgui.GTextField;
	public m_right : SwitchChpaterButton;
	public m_left : SwitchChpaterButton;

	
	public static URL:string = "ui://0ajdzfv8l03wz2g";
	
	public static DependPackages:string[] = ["GameSectionsUI"];

	
	public static createInstance():SwitchChapter {
		return <SwitchChapter><any>(fgui.UIPackage.createObject("GameSectionsUI","SwitchChapter"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_right = <SwitchChpaterButton><any>(this.getChild("right"));
		this.m_left = <SwitchChpaterButton><any>(this.getChild("left"));
		
		
	}
}