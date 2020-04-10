/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BagComboBox from "../../Extends/ModuleBag/BagComboBox";

export default class BagComboBoxStruct extends fgui.GComboBox
{
	public m_button : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://4mjxxvpqphnva";
	
	public static DependPackages:string[] = ["ModuleBag","CommonGame"];

	
	public static createInstance():BagComboBox {
		return <BagComboBox><any>(fgui.UIPackage.createObject("ModuleBag","BagComboBox"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}