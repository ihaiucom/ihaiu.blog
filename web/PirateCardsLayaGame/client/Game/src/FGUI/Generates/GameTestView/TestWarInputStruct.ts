/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TestWarInput from "../../Extends/GameTestView/TestWarInput";

export default class TestWarInputStruct extends fgui.GComponent
{
	public m_title : fgui.GTextInput;

	
	public static URL:string = "ui://7jw5s5t8k6j61";
	
	public static DependPackages:string[] = ["GameTestView"];

	
	public static createInstance():TestWarInput {
		return <TestWarInput><any>(fgui.UIPackage.createObject("GameTestView","TestWarInput"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fgui.GTextInput><any>(this.getChild("title"));
		
		
	}
}