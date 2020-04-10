/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AwakenProbabilityItem from "../../Extends/ModuleDraug/AwakenProbabilityItem";

export default class AwakenProbabilityItemStruct extends fgui.GComponent
{
	public m_labName : fgui.GTextField;
	public m_labProbability : fgui.GTextField;

	
	public static URL:string = "ui://hc5dpgynexbl3w";
	
	public static DependPackages:string[] = ["ModuleDraug"];

	
	public static createInstance():AwakenProbabilityItem {
		return <AwakenProbabilityItem><any>(fgui.UIPackage.createObject("ModuleDraug","AwakenProbabilityItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_labName = <fgui.GTextField><any>(this.getChild("labName"));
		this.m_labProbability = <fgui.GTextField><any>(this.getChild("labProbability"));
		
		
	}
}