/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PanelChooseGameFormat from "../../Extends/GameHome/PanelChooseGameFormat";

export default class PanelChooseGameFormatStruct extends fgui.GComponent
{
	public m_formatGroup : fgui.GGroup;
	public m_menuTopPanel : fgui.GComponent;
	public m_format3x3 : fgui.GComponent;
	public m_format4x4 : fgui.GComponent;

	
	public static URL:string = "ui://moe42ygrsqzy8z";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():PanelChooseGameFormat {
		return <PanelChooseGameFormat><any>(fgui.UIPackage.createObject("GameHome","PanelChooseGameFormat"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_formatGroup = <fgui.GGroup><any>(this.getChild("formatGroup"));
		this.m_menuTopPanel = <fgui.GComponent><any>(this.getChild("menuTopPanel"));
		this.m_format3x3 = <fgui.GComponent><any>(this.getChild("format3x3"));
		this.m_format4x4 = <fgui.GComponent><any>(this.getChild("format4x4"));
		
		
	}
}