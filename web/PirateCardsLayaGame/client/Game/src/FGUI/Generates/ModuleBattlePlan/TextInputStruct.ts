/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TextInput from "../../Extends/ModuleBattlePlan/TextInput";

export default class TextInputStruct extends fgui.GComponent
{
	public m_title : fgui.GTextInput;

	
	public static URL:string = "ui://lrfjmmwxj35s1e";
	
	public static DependPackages:string[] = ["ModuleBattlePlan"];

	
	public static createInstance():TextInput {
		return <TextInput><any>(fgui.UIPackage.createObject("ModuleBattlePlan","TextInput"));
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