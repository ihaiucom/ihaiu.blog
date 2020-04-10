/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GoStepView from "../../Extends/GameWar3DUI/GoStepView";

export default class GoStepViewStruct extends fgui.GComponent
{
	public m_text : fgui.GTextField;

	
	public static URL:string = "ui://yhpe9txzqt5m7k";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():GoStepView {
		return <GoStepView><any>(fgui.UIPackage.createObject("GameWar3DUI","GoStepView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_text = <fgui.GTextField><any>(this.getChild("text"));
		
		
	}
}