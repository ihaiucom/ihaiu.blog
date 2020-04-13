/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import LogoView from "../../Extends/GameLaunch/LogoView";

export default class LogoViewStruct extends fgui.GComponent
{
	public m_t0 : fgui.Transition;

	
	public static URL:string = "ui://47qsdr42tnlhw2t";
	
	public static DependPackages:string[] = ["GameLaunch"];

	
	public static createInstance():LogoView {
		return <LogoView><any>(fgui.UIPackage.createObject("GameLaunch","LogoView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		
		
		this.m_t0 =  this.getTransition("t0");
	}
}