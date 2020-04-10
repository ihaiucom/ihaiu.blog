/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DraugItem from "../../Extends/ModuleDraug/DraugItem";
import PartButton from "../../Extends/ModuleDraug/PartButton";

export default class PartButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_Part : fgui.Controller;
	public m_Quality : fgui.Controller;
	public m_imgPart : fgui.GLoader;
	public m_imgItem : fgui.GLoader;
	public m_draug : DraugItem;

	
	public static URL:string = "ui://hc5dpgynasxn1n";
	
	public static DependPackages:string[] = ["ModuleDraug","CommonGame"];

	
	public static createInstance():PartButton {
		return <PartButton><any>(fgui.UIPackage.createObject("ModuleDraug","PartButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_Part = this.getController("Part");
		this.m_Quality = this.getController("Quality");

		
		this.m_imgPart = <fgui.GLoader><any>(this.getChild("imgPart"));
		this.m_imgItem = <fgui.GLoader><any>(this.getChild("imgItem"));
		this.m_draug = <DraugItem><any>(this.getChild("draug"));
		
		
	}
}