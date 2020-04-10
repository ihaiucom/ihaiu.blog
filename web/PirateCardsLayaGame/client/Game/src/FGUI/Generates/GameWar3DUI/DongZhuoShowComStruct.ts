/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DongZhuoShowCom from "../../Extends/GameWar3DUI/DongZhuoShowCom";

export default class DongZhuoShowComStruct extends fgui.GComponent
{
	public m_show : fgui.Transition;
	public m_bossImg : fgui.GLoader;
	public m_bossName : fgui.GLoader;
	public m_topBoard : fgui.GImage;
	public m_bottomBoard : fgui.GImage;
	public m_bossMsg : fgui.GLoader;

	
	public static URL:string = "ui://yhpe9txzkkidf3";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():DongZhuoShowCom {
		return <DongZhuoShowCom><any>(fgui.UIPackage.createObject("GameWar3DUI","DongZhuoShowCom"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bossImg = <fgui.GLoader><any>(this.getChild("bossImg"));
		this.m_bossName = <fgui.GLoader><any>(this.getChild("bossName"));
		this.m_topBoard = <fgui.GImage><any>(this.getChild("topBoard"));
		this.m_bottomBoard = <fgui.GImage><any>(this.getChild("bottomBoard"));
		this.m_bossMsg = <fgui.GLoader><any>(this.getChild("bossMsg"));
		
		
		this.m_show =  this.getTransition("show");
	}
}