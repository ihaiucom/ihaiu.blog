/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BagItemInfoIcon from "../../Extends/ModuleBag/BagItemInfoIcon";
import AffixTips from "../../Extends/CommonGame/AffixTips";

export default class AffixTipsStruct extends fgui.GComponent
{
	public m_isLimit : fgui.Controller;
	public m_backgoundLoader : fgui.GLoader;
	public m_itemName : fgui.GTextField;
	public m_num : fgui.GTextField;
	public m_expiredTimeLb : fgui.GTextField;
	public m_icon : BagItemInfoIcon;

	
	public static URL:string = "ui://4snov4n9p3uaz5o";
	
	public static DependPackages:string[] = ["CommonGame","ModuleBag"];

	
	public static createInstance():AffixTips {
		return <AffixTips><any>(fgui.UIPackage.createObject("CommonGame","AffixTips"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_isLimit = this.getController("isLimit");

		
		this.m_backgoundLoader = <fgui.GLoader><any>(this.getChild("backgoundLoader"));
		this.m_itemName = <fgui.GTextField><any>(this.getChild("itemName"));
		this.m_num = <fgui.GTextField><any>(this.getChild("num"));
		this.m_expiredTimeLb = <fgui.GTextField><any>(this.getChild("expiredTimeLb"));
		this.m_icon = <BagItemInfoIcon><any>(this.getChild("icon"));
		
		
	}
}