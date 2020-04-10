/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeadIcon from "../../Extends/CommonGame/HeadIcon";

export default class HeadIconStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_icon : fgui.GLoader;
	public m_iconBox : fgui.GLoader;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://4snov4n9qovk2";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():HeadIcon {
		return <HeadIcon><any>(fgui.UIPackage.createObject("CommonGame","HeadIcon"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_iconBox = <fgui.GLoader><any>(this.getChild("iconBox"));
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}