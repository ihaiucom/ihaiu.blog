/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FuryEffect from "../../Extends/GameWar3DUI/FuryEffect";

export default class FuryEffectStruct extends fgui.GComponent
{
	public m_effWave : fgui.GMovieClip;

	
	public static URL:string = "ui://yhpe9txzpaqh4z";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():FuryEffect {
		return <FuryEffect><any>(fgui.UIPackage.createObject("GameWar3DUI","FuryEffect"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_effWave = <fgui.GMovieClip><any>(this.getChild("effWave"));
		
		
	}
}