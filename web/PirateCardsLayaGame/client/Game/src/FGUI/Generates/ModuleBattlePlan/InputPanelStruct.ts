/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import InputPanel from "../../Extends/ModuleBattlePlan/InputPanel";

export default class InputPanelStruct extends fgui.GComponent
{
	public m_img_inputBackground : fgui.GGraph;
	public m_textInput : fgui.GTextInput;

	
	public static URL:string = "ui://lrfjmmwxod3lh";
	
	public static DependPackages:string[] = ["ModuleBattlePlan"];

	
	public static createInstance():InputPanel {
		return <InputPanel><any>(fgui.UIPackage.createObject("ModuleBattlePlan","InputPanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_img_inputBackground = <fgui.GGraph><any>(this.getChild("img_inputBackground"));
		this.m_textInput = <fgui.GTextInput><any>(this.getChild("textInput"));
		
		
	}
}