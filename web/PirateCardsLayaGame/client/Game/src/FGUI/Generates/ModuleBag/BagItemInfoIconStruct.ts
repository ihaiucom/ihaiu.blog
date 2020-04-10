/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BagItemInfoIcon from "../../Extends/ModuleBag/BagItemInfoIcon";

export default class BagItemInfoIconStruct extends fgui.GComponent
{
	public m_itemState : fgui.Controller;
	public m_hasCount : fgui.Controller;
	public m_quality : fgui.Controller;
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://4mjxxvpqphnv4";
	
	public static DependPackages:string[] = ["ModuleBag","CommonGame"];

	
	public static createInstance():BagItemInfoIcon {
		return <BagItemInfoIcon><any>(fgui.UIPackage.createObject("ModuleBag","BagItemInfoIcon"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_itemState = this.getController("itemState");
		this.m_hasCount = this.getController("hasCount");
		this.m_quality = this.getController("quality");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		
		
	}
}