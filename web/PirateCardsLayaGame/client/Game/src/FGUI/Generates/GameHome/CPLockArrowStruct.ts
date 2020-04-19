/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CPLockArrow from "../../Extends/GameHome/CPLockArrow";

export default class CPLockArrowStruct extends fgui.GComponent
{
	public m_clickSuccess : fgui.Transition;
	public m_clickFail : fgui.Transition;

	
	public static URL:string = "ui://moe42ygrjak7au";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():CPLockArrow {
		return <CPLockArrow><any>(fgui.UIPackage.createObject("GameHome","CPLockArrow"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		
		
		this.m_clickSuccess =  this.getTransition("clickSuccess");
		this.m_clickFail =  this.getTransition("clickFail");
	}
}