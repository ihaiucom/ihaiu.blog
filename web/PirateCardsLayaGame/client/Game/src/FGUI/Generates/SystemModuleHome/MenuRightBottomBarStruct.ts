/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuRightBottomBar from "../../Extends/SystemModuleHome/MenuRightBottomBar";

export default class MenuRightBottomBarStruct extends fgui.GComponent
{
	public m_btnRandom : fgui.GButton;
	public m_btnDuel : fgui.GButton;
	public m_btnBattle : fgui.GButton;

	
	public static URL:string = "ui://4sapkhzuhjoo1a";
	
	public static DependPackages:string[] = ["SystemModuleHome"];

	
	public static createInstance():MenuRightBottomBar {
		return <MenuRightBottomBar><any>(fgui.UIPackage.createObject("SystemModuleHome","MenuRightBottomBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_btnRandom = <fgui.GButton><any>(this.getChild("btnRandom"));
		this.m_btnDuel = <fgui.GButton><any>(this.getChild("btnDuel"));
		this.m_btnBattle = <fgui.GButton><any>(this.getChild("btnBattle"));
		
		
	}
}