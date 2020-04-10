/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuTopBar from "../../Extends/SystemModuleHome/MenuTopBar";

export default class MenuTopBarStruct extends fgui.GComponent
{
	public m_listMenu : fgui.GList;
	public m_labName : fgui.GTextField;
	public m_labLevel : fgui.GTextField;
	public m_btnPlayer : fgui.GButton;
	public m_exp : fgui.GProgressBar;

	
	public static URL:string = "ui://4sapkhzumtnh1g";
	
	public static DependPackages:string[] = ["SystemModuleHome"];

	
	public static createInstance():MenuTopBar {
		return <MenuTopBar><any>(fgui.UIPackage.createObject("SystemModuleHome","MenuTopBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_listMenu = <fgui.GList><any>(this.getChild("listMenu"));
		this.m_labName = <fgui.GTextField><any>(this.getChild("labName"));
		this.m_labLevel = <fgui.GTextField><any>(this.getChild("labLevel"));
		this.m_btnPlayer = <fgui.GButton><any>(this.getChild("btnPlayer"));
		this.m_exp = <fgui.GProgressBar><any>(this.getChild("exp"));
		
		
	}
}