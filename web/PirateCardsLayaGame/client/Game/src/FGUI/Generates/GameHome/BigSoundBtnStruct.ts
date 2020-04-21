/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BigSoundBtn from "../../Extends/GameHome/BigSoundBtn";

export default class BigSoundBtnStruct extends fgui.GComponent
{
	public m_button : fgui.Controller;
	public m_off : fgui.GButton;
	public m_on : fgui.GButton;

	
	public static URL:string = "ui://moe42ygrsqzy87";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():BigSoundBtn {
		return <BigSoundBtn><any>(fgui.UIPackage.createObject("GameHome","BigSoundBtn"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_off = <fgui.GButton><any>(this.getChild("off"));
		this.m_on = <fgui.GButton><any>(this.getChild("on"));
		
		
	}
}