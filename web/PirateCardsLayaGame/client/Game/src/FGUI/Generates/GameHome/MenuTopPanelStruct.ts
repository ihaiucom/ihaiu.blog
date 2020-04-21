/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuTopPanel from "../../Extends/GameHome/MenuTopPanel";

export default class MenuTopPanelStruct extends fgui.GComponent
{
	public m_coinText : fgui.GTextField;
	public m_coinBar : fgui.GGroup;
	public m_prevBtn : fgui.GButton;
	public m_homeBtn : fgui.GButton;

	
	public static URL:string = "ui://moe42ygrsqzy8b";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():MenuTopPanel {
		return <MenuTopPanel><any>(fgui.UIPackage.createObject("GameHome","MenuTopPanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_coinText = <fgui.GTextField><any>(this.getChild("coinText"));
		this.m_coinBar = <fgui.GGroup><any>(this.getChild("coinBar"));
		this.m_prevBtn = <fgui.GButton><any>(this.getChild("prevBtn"));
		this.m_homeBtn = <fgui.GButton><any>(this.getChild("homeBtn"));
		
		
	}
}