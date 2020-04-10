/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GuideFinger from "../../Extends/SystemModuleGuide/GuideFinger";

export default class GuideFingerStruct extends fgui.GComponent
{
	public m_finger_anim : fgui.Transition;

	
	public static URL:string = "ui://4bbdqtki96sl7";
	
	public static DependPackages:string[] = ["SystemModuleGuide"];

	
	public static createInstance():GuideFinger {
		return <GuideFinger><any>(fgui.UIPackage.createObject("SystemModuleGuide","GuideFinger"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		
		
		this.m_finger_anim =  this.getTransition("finger_anim");
	}
}