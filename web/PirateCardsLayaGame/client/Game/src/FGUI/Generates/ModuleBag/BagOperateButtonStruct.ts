/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BagOperateButton from "../../Extends/ModuleBag/BagOperateButton";

export default class BagOperateButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://4mjxxvpqphnv7";
	
	public static DependPackages:string[] = ["ModuleBag"];

	
	public static createInstance():BagOperateButton {
		return <BagOperateButton><any>(fgui.UIPackage.createObject("ModuleBag","BagOperateButton"));
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