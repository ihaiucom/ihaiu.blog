/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TopMoneyItem from "../../Extends/SystemModuleMenu/TopMoneyItem";

export default class TopMoneyItemStruct extends fgui.GLabel
{
	public m_title : fgui.GTextField;
	public m_icon : fgui.GLoader;
	public m_addButton : fgui.GObject;

	
	public static URL:string = "ui://4rsi5gesszhv1e";
	
	public static DependPackages:string[] = ["SystemModuleMenu"];

	
	public static createInstance():TopMoneyItem {
		return <TopMoneyItem><any>(fgui.UIPackage.createObject("SystemModuleMenu","TopMoneyItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_addButton = <fgui.GObject><any>(this.getChild("addButton"));
		
		
	}
}