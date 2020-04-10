/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HitNumber from "../../Extends/GameWar3DUI/HitNumber";

export default class HitNumberStruct extends fgui.GComponent
{
	public m_level : fgui.Controller;
	public m_type : fgui.Controller;
	public m_imgBg : fgui.GLoader;
	public m_imgHit : fgui.GImage;
	public m_stext : fgui.GTextField;
	public m_mtext : fgui.GTextField;
	public m_btext : fgui.GTextField;

	
	public static URL:string = "ui://yhpe9txzs4zr6y";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():HitNumber {
		return <HitNumber><any>(fgui.UIPackage.createObject("GameWar3DUI","HitNumber"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_level = this.getController("level");
		this.m_type = this.getController("type");

		
		this.m_imgBg = <fgui.GLoader><any>(this.getChild("imgBg"));
		this.m_imgHit = <fgui.GImage><any>(this.getChild("imgHit"));
		this.m_stext = <fgui.GTextField><any>(this.getChild("stext"));
		this.m_mtext = <fgui.GTextField><any>(this.getChild("mtext"));
		this.m_btext = <fgui.GTextField><any>(this.getChild("btext"));
		
		
	}
}