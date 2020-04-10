/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AffixTipsPanel from "../../Extends/ModuleDialogs/AffixTipsPanel";

export default class AffixTipsPanelStruct extends fgui.GComponent
{
	public m_Direction : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://enntu5susd1b1c";
	
	public static DependPackages:string[] = ["ModuleDialogs"];

	
	public static createInstance():AffixTipsPanel {
		return <AffixTipsPanel><any>(fgui.UIPackage.createObject("ModuleDialogs","AffixTipsPanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_Direction = this.getController("Direction");

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}