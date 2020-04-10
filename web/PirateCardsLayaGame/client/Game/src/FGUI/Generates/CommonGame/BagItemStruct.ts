/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BagItem from "../../Extends/CommonGame/BagItem";

export default class BagItemStruct extends fgui.GButton
{
	public m_itemState : fgui.Controller;
	public m_button : fgui.Controller;
	public m_quality : fgui.Controller;
	public m_select : fgui.Controller;
	public m_icon : fgui.GLoader;
	public m_itemName : fgui.GTextField;
	public m_numBack : fgui.GImage;
	public m_num : fgui.GTextField;

	
	public static URL:string = "ui://4snov4n9phnv8";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():BagItem {
		return <BagItem><any>(fgui.UIPackage.createObject("CommonGame","BagItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_itemState = this.getController("itemState");
		this.m_button = this.getController("button");
		this.m_quality = this.getController("quality");
		this.m_select = this.getController("select");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_itemName = <fgui.GTextField><any>(this.getChild("itemName"));
		this.m_numBack = <fgui.GImage><any>(this.getChild("numBack"));
		this.m_num = <fgui.GTextField><any>(this.getChild("num"));
		
		
	}
}