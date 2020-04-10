/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SelectHeroGroup from "../../Extends/ModuleDuelTemp/SelectHeroGroup";

export default class SelectHeroGroupStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://rx0filvjtgxh2";
	
	public static DependPackages:string[] = ["ModuleDuelTemp"];

	
	public static createInstance():SelectHeroGroup {
		return <SelectHeroGroup><any>(fgui.UIPackage.createObject("ModuleDuelTemp","SelectHeroGroup"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}