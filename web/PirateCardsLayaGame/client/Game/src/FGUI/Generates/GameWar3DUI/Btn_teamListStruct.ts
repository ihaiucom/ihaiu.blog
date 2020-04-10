/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Btn_teamList from "../../Extends/GameWar3DUI/Btn_teamList";

export default class Btn_teamListStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_type : fgui.Controller;

	
	public static URL:string = "ui://yhpe9txzk8vb97";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():Btn_teamList {
		return <Btn_teamList><any>(fgui.UIPackage.createObject("GameWar3DUI","btn_teamList"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_type = this.getController("type");

		
		
		
	}
}