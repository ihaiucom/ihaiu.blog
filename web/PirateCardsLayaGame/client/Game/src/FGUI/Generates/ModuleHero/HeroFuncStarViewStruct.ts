/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroStarPos from "../../Extends/CommonGame/HeroStarPos";
import HeroIconItemButton from "../../Extends/ModuleHero/HeroIconItemButton";
import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import HeroFuncStarView from "../../Extends/ModuleHero/HeroFuncStarView";

export default class HeroFuncStarViewStruct extends fgui.GComponent
{
	public m_color : fgui.Controller;
	public m_state : fgui.Controller;
	public m_star0 : fgui.GImage;
	public m_proList : fgui.GList;
	public m_labelNeed : fgui.GTextField;
	public m_labelHave : fgui.GTextField;
	public m_skillDesc : fgui.GTextField;
	public m_starCur : HeroStarPos;
	public m_starNew : HeroStarPos;
	public m_btnIcon : HeroIconItemButton;
	public m_btnStar : CommonButton1;

	
	public static URL:string = "ui://lxpvy4fwbwlm1s";
	
	public static DependPackages:string[] = ["ModuleHero","CommonGame","CommonBase"];

	
	public static createInstance():HeroFuncStarView {
		return <HeroFuncStarView><any>(fgui.UIPackage.createObject("ModuleHero","HeroFuncStarView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_color = this.getController("color");
		this.m_state = this.getController("state");

		
		this.m_star0 = <fgui.GImage><any>(this.getChild("star0"));
		this.m_proList = <fgui.GList><any>(this.getChild("proList"));
		this.m_labelNeed = <fgui.GTextField><any>(this.getChild("labelNeed"));
		this.m_labelHave = <fgui.GTextField><any>(this.getChild("labelHave"));
		this.m_skillDesc = <fgui.GTextField><any>(this.getChild("skillDesc"));
		this.m_starCur = <HeroStarPos><any>(this.getChild("starCur"));
		this.m_starNew = <HeroStarPos><any>(this.getChild("starNew"));
		this.m_btnIcon = <HeroIconItemButton><any>(this.getChild("btnIcon"));
		this.m_btnStar = <CommonButton1><any>(this.getChild("btnStar"));
		
		
	}
}