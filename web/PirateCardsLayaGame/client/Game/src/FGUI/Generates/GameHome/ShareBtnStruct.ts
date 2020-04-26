/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ShareBtn from "../../Extends/GameHome/ShareBtn";

export default class ShareBtnStruct extends fgui.GButton
{
	public m_icon : fgui.Controller;
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://moe42ygrp1whbd";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():ShareBtn {
		return <ShareBtn><any>(fgui.UIPackage.createObject("GameHome","ShareBtn"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_icon = this.getController("icon");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		
		
	}
}