/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import InfoIyem from "../../Extends/GameWarUI/InfoIyem";
import LevelInfoView from "../../Extends/GameWarUI/LevelInfoView";

export default class LevelInfoViewStruct extends fgui.GComponent
{
	public m_labTime : fgui.GTextField;
	public m_info1 : InfoIyem;
	public m_info2 : InfoIyem;

	
	public static URL:string = "ui://rfow21emi78t4a";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():LevelInfoView {
		return <LevelInfoView><any>(fgui.UIPackage.createObject("GameWarUI","LevelInfoView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_labTime = <fgui.GTextField><any>(this.getChild("labTime"));
		this.m_info1 = <InfoIyem><any>(this.getChild("info1"));
		this.m_info2 = <InfoIyem><any>(this.getChild("info2"));
		
		
	}
}