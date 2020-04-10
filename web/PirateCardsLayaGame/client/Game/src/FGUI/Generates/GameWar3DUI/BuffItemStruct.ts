/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BuffItem from "../../Extends/GameWar3DUI/BuffItem";

export default class BuffItemStruct extends fgui.GComponent
{
	public m_imgBuff : fgui.GLoader;

	
	public static URL:string = "ui://yhpe9txzb3sf33";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():BuffItem {
		return <BuffItem><any>(fgui.UIPackage.createObject("GameWar3DUI","BuffItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_imgBuff = <fgui.GLoader><any>(this.getChild("imgBuff"));
		
		
	}
}