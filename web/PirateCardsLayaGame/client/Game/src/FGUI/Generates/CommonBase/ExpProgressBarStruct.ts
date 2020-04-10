/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ExpProgressBar from "../../Extends/CommonBase/ExpProgressBar";

export default class ExpProgressBarStruct extends fgui.GProgressBar
{
	public m_bar : fgui.GImage;

	
	public static URL:string = "ui://jaoapdiclzv91";
	
	public static DependPackages:string[] = ["CommonBase","CommonGame"];

	
	public static createInstance():ExpProgressBar {
		return <ExpProgressBar><any>(fgui.UIPackage.createObject("CommonBase","ExpProgressBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bar = <fgui.GImage><any>(this.getChild("bar"));
		
		
	}
}