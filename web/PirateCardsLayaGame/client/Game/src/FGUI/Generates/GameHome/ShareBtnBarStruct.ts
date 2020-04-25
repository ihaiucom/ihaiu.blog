/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ShareBtn from "../../Extends/GameHome/ShareBtn";
import ShareBtnBar from "../../Extends/GameHome/ShareBtnBar";

export default class ShareBtnBarStruct extends fgui.GComponent
{
	public m_wxBtn : ShareBtn;

	
	public static URL:string = "ui://moe42ygrp1whbe";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():ShareBtnBar {
		return <ShareBtnBar><any>(fgui.UIPackage.createObject("GameHome","ShareBtnBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_wxBtn = <ShareBtn><any>(this.getChild("wxBtn"));
		
		
	}
}