/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Effect_13001_fade from "../../Extends/Effect_13001_fade/Effect_13001_fade";

export default class Effect_13001_fadeStruct extends fgui.GComponent
{
	public m_fadeOut : fgui.Transition;

	
	public static URL:string = "ui://rke3bw02o56i84";
	
	public static DependPackages:string[] = ["Effect_13001_fade"];

	
	public static createInstance():Effect_13001_fade {
		return <Effect_13001_fade><any>(fgui.UIPackage.createObject("Effect_13001_fade","Effect_13001_fade"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		
		
		this.m_fadeOut =  this.getTransition("fadeOut");
	}
}