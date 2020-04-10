/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DraugItem from "../../Extends/ModuleDraug/DraugItem";

export default class DraugItemStruct extends fgui.GComponent
{
	public m_Quality : fgui.Controller;
	public m_State : fgui.Controller;
	public m_Part : fgui.Controller;
	public m_imgQuality : fgui.GLoader;
	public m_imgPart : fgui.GLoader;
	public m_imgItem : fgui.GLoader;
	public m_labLevel : fgui.GTextField;
	public m_imgLock : fgui.GLoader;
	public m_imgSwallow : fgui.GImage;
	public m_btnSelect : fgui.GButton;

	
	public static URL:string = "ui://hc5dpgynqq5r5";
	
	public static DependPackages:string[] = ["ModuleDraug","CommonGame"];

	
	public static createInstance():DraugItem {
		return <DraugItem><any>(fgui.UIPackage.createObject("ModuleDraug","DraugItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_Quality = this.getController("Quality");
		this.m_State = this.getController("State");
		this.m_Part = this.getController("Part");

		
		this.m_imgQuality = <fgui.GLoader><any>(this.getChild("imgQuality"));
		this.m_imgPart = <fgui.GLoader><any>(this.getChild("imgPart"));
		this.m_imgItem = <fgui.GLoader><any>(this.getChild("imgItem"));
		this.m_labLevel = <fgui.GTextField><any>(this.getChild("labLevel"));
		this.m_imgLock = <fgui.GLoader><any>(this.getChild("imgLock"));
		this.m_imgSwallow = <fgui.GImage><any>(this.getChild("imgSwallow"));
		this.m_btnSelect = <fgui.GButton><any>(this.getChild("btnSelect"));
		
		
	}
}