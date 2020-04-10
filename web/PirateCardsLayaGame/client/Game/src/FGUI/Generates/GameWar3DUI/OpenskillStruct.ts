/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Openskill from "../../Extends/GameWar3DUI/Openskill";

export default class OpenskillStruct extends fgui.GComponent
{
	public m_open : fgui.Transition;

	
	public static URL:string = "ui://yhpe9txzpaqh4x";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():Openskill {
		return <Openskill><any>(fgui.UIPackage.createObject("GameWar3DUI","open skill"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		
		
		this.m_open =  this.getTransition("open");
	}
}