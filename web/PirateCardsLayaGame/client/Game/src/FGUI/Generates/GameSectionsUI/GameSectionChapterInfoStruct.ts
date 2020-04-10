/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GameSectionChapterInfo from "../../Extends/GameSectionsUI/GameSectionChapterInfo";

export default class GameSectionChapterInfoStruct extends fgui.GComponent
{
	public m_bg : fgui.GLoader;
	public m_chapterNameIcon : fgui.GLoader;

	
	public static URL:string = "ui://0ajdzfv8l03wz2f";
	
	public static DependPackages:string[] = ["GameSectionsUI"];

	
	public static createInstance():GameSectionChapterInfo {
		return <GameSectionChapterInfo><any>(fgui.UIPackage.createObject("GameSectionsUI","GameSectionChapterInfo"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bg = <fgui.GLoader><any>(this.getChild("bg"));
		this.m_chapterNameIcon = <fgui.GLoader><any>(this.getChild("chapterNameIcon"));
		
		
	}
}