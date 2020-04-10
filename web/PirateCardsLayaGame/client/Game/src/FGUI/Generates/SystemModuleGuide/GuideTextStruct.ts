/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GuideText from "../../Extends/SystemModuleGuide/GuideText";

export default class GuideTextStruct extends fgui.GComponent
{
	public m_content : fgui.GTextField;

	
	public static URL:string = "ui://4bbdqtki96sla";
	
	public static DependPackages:string[] = ["SystemModuleGuide"];

	
	public static createInstance():GuideText {
		return <GuideText><any>(fgui.UIPackage.createObject("SystemModuleGuide","GuideText"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_content = <fgui.GTextField><any>(this.getChild("content"));
		
		
	}
}