/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DraugProbabilityItem from "../../Extends/ModuleDraug/DraugProbabilityItem";

export default class DraugProbabilityItemStruct extends fgui.GComponent
{
	public m_labName : fgui.GTextField;
	public m_labWhiteName : fgui.GTextField;
	public m_labWhiteProbability : fgui.GTextField;
	public m_labGreenName : fgui.GTextField;
	public m_labGreenProbability : fgui.GTextField;
	public m_labBlueName : fgui.GTextField;
	public m_labBlueProbability : fgui.GTextField;
	public m_labPurPleName : fgui.GTextField;
	public m_labPurPleProbability : fgui.GTextField;
	public m_labOrangeName : fgui.GTextField;
	public m_labOrangeProbability : fgui.GTextField;

	
	public static URL:string = "ui://hc5dpgynexbl3x";
	
	public static DependPackages:string[] = ["ModuleDraug"];

	
	public static createInstance():DraugProbabilityItem {
		return <DraugProbabilityItem><any>(fgui.UIPackage.createObject("ModuleDraug","DraugProbabilityItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_labName = <fgui.GTextField><any>(this.getChild("labName"));
		this.m_labWhiteName = <fgui.GTextField><any>(this.getChild("labWhiteName"));
		this.m_labWhiteProbability = <fgui.GTextField><any>(this.getChild("labWhiteProbability"));
		this.m_labGreenName = <fgui.GTextField><any>(this.getChild("labGreenName"));
		this.m_labGreenProbability = <fgui.GTextField><any>(this.getChild("labGreenProbability"));
		this.m_labBlueName = <fgui.GTextField><any>(this.getChild("labBlueName"));
		this.m_labBlueProbability = <fgui.GTextField><any>(this.getChild("labBlueProbability"));
		this.m_labPurPleName = <fgui.GTextField><any>(this.getChild("labPurPleName"));
		this.m_labPurPleProbability = <fgui.GTextField><any>(this.getChild("labPurPleProbability"));
		this.m_labOrangeName = <fgui.GTextField><any>(this.getChild("labOrangeName"));
		this.m_labOrangeProbability = <fgui.GTextField><any>(this.getChild("labOrangeProbability"));
		
		
	}
}