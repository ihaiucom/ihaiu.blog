/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GashaponPreviewItem from "../../Extends/GashaponUI/GashaponPreviewItem";
import GashaponPreview from "../../Extends/GashaponUI/GashaponPreview";

export default class GashaponPreviewStruct extends fgui.GComponent
{
	public m_background : fgui.GLoader;
	public m_sHero : GashaponPreviewItem;
	public m_aHero : GashaponPreviewItem;
	public m_equipment : GashaponPreviewItem;
	public m_other : GashaponPreviewItem;

	
	public static URL:string = "ui://660ksptmjgfw3";
	
	public static DependPackages:string[] = ["GashaponUI"];

	
	public static createInstance():GashaponPreview {
		return <GashaponPreview><any>(fgui.UIPackage.createObject("GashaponUI","GashaponPreview"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_background = <fgui.GLoader><any>(this.getChild("background"));
		this.m_sHero = <GashaponPreviewItem><any>(this.getChild("sHero"));
		this.m_aHero = <GashaponPreviewItem><any>(this.getChild("aHero"));
		this.m_equipment = <GashaponPreviewItem><any>(this.getChild("equipment"));
		this.m_other = <GashaponPreviewItem><any>(this.getChild("other"));
		
		
	}
}