/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SectionViewSpecial from "../../Extends/GameSectionsUI/SectionViewSpecial";

export default class SectionViewSpecialStruct extends fgui.GComponent
{
	public m_background : fgui.GLoader;
	public m_list : fgui.GList;

	
	public static URL:string = "ui://0ajdzfv8l03wz2b";
	
	public static DependPackages:string[] = ["GameSectionsUI"];

	
	public static createInstance():SectionViewSpecial {
		return <SectionViewSpecial><any>(fgui.UIPackage.createObject("GameSectionsUI","SectionViewSpecial"));
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
		
		
	}
}