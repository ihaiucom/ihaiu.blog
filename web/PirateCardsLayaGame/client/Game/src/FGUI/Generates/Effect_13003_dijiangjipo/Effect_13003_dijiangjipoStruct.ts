/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Effect_13003_dijiangjipo from "../../Extends/Effect_13003_dijiangjipo/Effect_13003_dijiangjipo";

export default class Effect_13003_dijiangjipoStruct extends fgui.GComponent
{
	public m_t0 : fgui.Transition;

	
	public static URL:string = "ui://f2l8wtk9oxr7f";
	
	public static DependPackages:string[] = ["Effect_13003_dijiangjipo"];

	
	public static createInstance():Effect_13003_dijiangjipo {
		return <Effect_13003_dijiangjipo><any>(fgui.UIPackage.createObject("Effect_13003_dijiangjipo","Effect_13003_dijiangjipo"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		
		
		this.m_t0 =  this.getTransition("t0");
	}
}