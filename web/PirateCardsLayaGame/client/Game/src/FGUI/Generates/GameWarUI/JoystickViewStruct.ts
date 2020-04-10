/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import JoystickView from "../../Extends/GameWarUI/JoystickView";

export default class JoystickViewStruct extends fgui.GComponent
{
	public m_labDegree : fgui.GTextField;
	public m_imgCenter : fgui.GLoader;
	public m_imgTouchArea : fgui.GLoader;
	public m_btnJoystick : fgui.GButton;

	
	public static URL:string = "ui://rfow21em98hp1";
	
	public static DependPackages:string[] = ["GameWarUI"];

	
	public static createInstance():JoystickView {
		return <JoystickView><any>(fgui.UIPackage.createObject("GameWarUI","JoystickView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_labDegree = <fgui.GTextField><any>(this.getChild("labDegree"));
		this.m_imgCenter = <fgui.GLoader><any>(this.getChild("imgCenter"));
		this.m_imgTouchArea = <fgui.GLoader><any>(this.getChild("imgTouchArea"));
		this.m_btnJoystick = <fgui.GButton><any>(this.getChild("btnJoystick"));
		
		
	}
}