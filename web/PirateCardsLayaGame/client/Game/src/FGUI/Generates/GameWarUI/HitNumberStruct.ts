/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HitNumber from "../../Extends/GameWarUI/HitNumber";

export default class HitNumberStruct extends fgui.GComponent
{
	public m_text : fgui.GTextField;
	public m_hitPic : fgui.GImage;

	
	public static URL:string = "ui://rfow21emk5yz1q";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():HitNumber {
		return <HitNumber><any>(fgui.UIPackage.createObject("GameWarUI","HitNumber"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_text = <fgui.GTextField><any>(this.getChild("text"));
		this.m_hitPic = <fgui.GImage><any>(this.getChild("hitPic"));
		
		
	}
}