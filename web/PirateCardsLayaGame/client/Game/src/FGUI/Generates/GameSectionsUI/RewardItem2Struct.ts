/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RewardItem2 from "../../Extends/GameSectionsUI/RewardItem2";

export default class RewardItem2Struct extends fgui.GLabel
{
	public m_itemQuality : fgui.Controller;
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://0ajdzfv8yl3xz4t";
	
	public static DependPackages:string[] = ["GameSectionsUI"];

	
	public static createInstance():RewardItem2 {
		return <RewardItem2><any>(fgui.UIPackage.createObject("GameSectionsUI","RewardItem2"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_itemQuality = this.getController("itemQuality");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		
		
	}
}