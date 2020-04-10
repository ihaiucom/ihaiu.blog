/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AffixTipsPanel from "../../Extends/ModuleDialogs/AffixTipsPanel";
import AffixWindowUI from "../../Extends/ModuleDialogs/AffixWindowUI";

export default class AffixWindowUIStruct extends fgui.GComponent
{
	public m_bg : fgui.GLoader;
	public m_panel : AffixTipsPanel;

	
	public static URL:string = "ui://enntu5susd1b1b";
	
	public static DependPackages:string[] = ["ModuleDialogs"];

	
	public static createInstance():AffixWindowUI {
		return <AffixWindowUI><any>(fgui.UIPackage.createObject("ModuleDialogs","AffixWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bg = <fgui.GLoader><any>(this.getChild("bg"));
		this.m_panel = <AffixTipsPanel><any>(this.getChild("panel"));
		
		
	}
}