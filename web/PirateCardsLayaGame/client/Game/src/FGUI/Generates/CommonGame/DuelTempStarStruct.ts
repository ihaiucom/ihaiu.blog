/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DuelTempStar from "../../Extends/CommonGame/DuelTempStar";

export default class DuelTempStarStruct extends fgui.GComponent
{
	public m_star_num : fgui.Controller;
	public m_star_count : fgui.Controller;
	public m_star1 : fgui.GLoader;
	public m_star2 : fgui.GLoader;
	public m_star3 : fgui.GLoader;
	public m_star4 : fgui.GLoader;
	public m_star5 : fgui.GLoader;

	
	public static URL:string = "ui://4snov4n9tgxh5";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():DuelTempStar {
		return <DuelTempStar><any>(fgui.UIPackage.createObject("CommonGame","DuelTempStar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_star_num = this.getController("star_num");
		this.m_star_count = this.getController("star_count");

		
		this.m_star1 = <fgui.GLoader><any>(this.getChild("star1"));
		this.m_star2 = <fgui.GLoader><any>(this.getChild("star2"));
		this.m_star3 = <fgui.GLoader><any>(this.getChild("star3"));
		this.m_star4 = <fgui.GLoader><any>(this.getChild("star4"));
		this.m_star5 = <fgui.GLoader><any>(this.getChild("star5"));
		
		
	}
}