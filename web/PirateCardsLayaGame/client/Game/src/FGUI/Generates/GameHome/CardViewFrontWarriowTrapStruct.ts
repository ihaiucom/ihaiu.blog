/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CardLifeWarriow from "../../Extends/GameHome/CardLifeWarriow";
import CardViewFrontWarriowTrap from "../../Extends/GameHome/CardViewFrontWarriowTrap";

export default class CardViewFrontWarriowTrapStruct extends fgui.GButton
{
	public m_DoClose : fgui.Transition;
	public m_DoOpen : fgui.Transition;
	public m_icon : fgui.GLoader;
	public m_life : CardLifeWarriow;

	
	public static URL:string = "ui://moe42ygrsqzya9";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():CardViewFrontWarriowTrap {
		return <CardViewFrontWarriowTrap><any>(fgui.UIPackage.createObject("GameHome","CardViewFrontWarriowTrap"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_life = <CardLifeWarriow><any>(this.getChild("life"));
		
		
		this.m_DoClose =  this.getTransition("DoClose");
		this.m_DoOpen =  this.getTransition("DoOpen");
	}
}