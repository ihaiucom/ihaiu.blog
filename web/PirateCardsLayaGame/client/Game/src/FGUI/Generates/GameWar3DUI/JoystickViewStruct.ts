/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import JoystickView from "../../Extends/GameWar3DUI/JoystickView";

export default class JoystickViewStruct extends fgui.GComponent
{
	public m_Net : fgui.Controller;
	public m_imgCenter : fgui.GLoader;
	public m_imgTouchArea : fgui.GLoader;
	public m_labPing : fgui.GTextField;
	public m_labTime : fgui.GTextField;
	public m_btnJoystick : fgui.GButton;
	public m_net4G : fgui.GComponent;
	public m_netWifi : fgui.GComponent;
	public m_power : fgui.GComponent;

	
	public static URL:string = "ui://yhpe9txzb3sf3j";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():JoystickView {
		return <JoystickView><any>(fgui.UIPackage.createObject("GameWar3DUI","JoystickView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_Net = this.getController("Net");

		
		this.m_imgCenter = <fgui.GLoader><any>(this.getChild("imgCenter"));
		this.m_imgTouchArea = <fgui.GLoader><any>(this.getChild("imgTouchArea"));
		this.m_labPing = <fgui.GTextField><any>(this.getChild("labPing"));
		this.m_labTime = <fgui.GTextField><any>(this.getChild("labTime"));
		this.m_btnJoystick = <fgui.GButton><any>(this.getChild("btnJoystick"));
		this.m_net4G = <fgui.GComponent><any>(this.getChild("net4G"));
		this.m_netWifi = <fgui.GComponent><any>(this.getChild("netWifi"));
		this.m_power = <fgui.GComponent><any>(this.getChild("power"));
		
		
	}
}