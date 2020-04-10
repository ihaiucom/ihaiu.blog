/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GoStepView from "../../Extends/GameWarUI/GoStepView";

export default class GoStepViewStruct extends fgui.GComponent
{
	public m_text : fgui.GTextField;

	
	public static URL:string = "ui://rfow21emfv8ww7a";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():GoStepView {
		return <GoStepView><any>(fgui.UIPackage.createObject("GameWarUI","GoStepView"));
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