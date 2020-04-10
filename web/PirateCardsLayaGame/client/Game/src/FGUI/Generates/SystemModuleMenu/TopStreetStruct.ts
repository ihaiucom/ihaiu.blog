/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TopStreet from "../../Extends/SystemModuleMenu/TopStreet";

export default class TopStreetStruct extends fgui.GButton
{
	public m_t0 : fgui.Transition;
	public m_streetRank : fgui.GTextField;
	public m_streetName : fgui.GTextField;
	public m_red : fgui.GObject;

	
	public static URL:string = "ui://4rsi5gesszhv15";
	
	public static DependPackages:string[] = ["SystemModuleMenu","_ResImageUIV1"];

	
	public static createInstance():TopStreet {
		return <TopStreet><any>(fgui.UIPackage.createObject("SystemModuleMenu","TopStreet"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_streetRank = <fgui.GTextField><any>(this.getChild("streetRank"));
		this.m_streetName = <fgui.GTextField><any>(this.getChild("streetName"));
		this.m_red = <fgui.GObject><any>(this.getChild("red"));
		
		
		this.m_t0 =  this.getTransition("t0");
	}
}