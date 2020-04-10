/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Effect_1002_Zhanji_Skin1__Skill4_13 from "../../Extends/Effect_1002_Zhanji_Skin1__Skill4_13/Effect_1002_Zhanji_Skin1__Skill4_13";

export default class Effect_1002_Zhanji_Skin1__Skill4_13Struct extends fgui.GComponent
{
	public m_t0 : fgui.Transition;

	
	public static URL:string = "ui://1kv4esbsqs9s2";
	
	public static DependPackages:string[] = ["Effect_1002_Zhanji_Skin1__Skill4_13"];

	
	public static createInstance():Effect_1002_Zhanji_Skin1__Skill4_13 {
		return <Effect_1002_Zhanji_Skin1__Skill4_13><any>(fgui.UIPackage.createObject("Effect_1002_Zhanji_Skin1__Skill4_13","Effect_1002_Zhanji_Skin1__Skill4_13"));
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