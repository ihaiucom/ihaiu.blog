/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import InfoIyem from "../../Extends/GameWarUI/InfoIyem";

export default class InfoIyemStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_labInfor : fgui.GTextField;

	
	public static URL:string = "ui://rfow21emi78t4f";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():InfoIyem {
		return <InfoIyem><any>(fgui.UIPackage.createObject("GameWarUI","InfoIyem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");

		
		this.m_labInfor = <fgui.GTextField><any>(this.getChild("labInfor"));
		
		
	}
}