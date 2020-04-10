/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroBodyStar from "../../Extends/CommonGame/HeroBodyStar";
import HeroBodyIcon from "../../Extends/CommonGame/HeroBodyIcon";

export default class HeroBodyIconStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_quality : fgui.Controller;
	public m_bg : fgui.GLoader;
	public m_name : fgui.GTextField;
	public m_frame : fgui.GLoader;
	public m_star : HeroBodyStar;

	
	public static URL:string = "ui://4snov4n9i0lo31";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():HeroBodyIcon {
		return <HeroBodyIcon><any>(fgui.UIPackage.createObject("CommonGame","HeroBodyIcon"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_quality = this.getController("quality");

		
		this.m_bg = <fgui.GLoader><any>(this.getChild("bg"));
		this.m_name = <fgui.GTextField><any>(this.getChild("name"));
		this.m_frame = <fgui.GLoader><any>(this.getChild("frame"));
		this.m_star = <HeroBodyStar><any>(this.getChild("star"));
		
		
	}
}