/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ShareIconBtn from "../../Extends/GameHome/ShareIconBtn";

export default class ShareIconBtnStruct extends fgui.GButton
{
	public m_title : fgui.GTextField;
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://moe42ygrp1whbg";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():ShareIconBtn {
		return <ShareIconBtn><any>(fgui.UIPackage.createObject("GameHome","ShareIconBtn"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		
		
	}
}