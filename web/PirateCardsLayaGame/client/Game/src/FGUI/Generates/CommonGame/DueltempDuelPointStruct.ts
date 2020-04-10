/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DueltempDuelPoint from "../../Extends/CommonGame/DueltempDuelPoint";

export default class DueltempDuelPointStruct extends fgui.GComponent
{
	public m_bar : fgui.GImage;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://4snov4n9inki19";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():DueltempDuelPoint {
		return <DueltempDuelPoint><any>(fgui.UIPackage.createObject("CommonGame","DueltempDuelPoint"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bar = <fgui.GImage><any>(this.getChild("bar"));
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}