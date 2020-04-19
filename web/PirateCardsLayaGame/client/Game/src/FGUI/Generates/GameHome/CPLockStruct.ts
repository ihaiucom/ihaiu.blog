/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CPLockDial from "../../Extends/GameHome/CPLockDial";
import CPLockSwitch from "../../Extends/GameHome/CPLockSwitch";
import CPLockBridge from "../../Extends/GameHome/CPLockBridge";
import CPLockLampGroup from "../../Extends/GameHome/CPLockLampGroup";
import CPLock from "../../Extends/GameHome/CPLock";

export default class CPLockStruct extends fgui.GComponent
{
	public m_bg : fgui.GImage;
	public m_dial : CPLockDial;
	public m_switch : CPLockSwitch;
	public m_bridge : CPLockBridge;
	public m_lampGroup : CPLockLampGroup;

	
	public static URL:string = "ui://moe42ygrjak7b1";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():CPLock {
		return <CPLock><any>(fgui.UIPackage.createObject("GameHome","CPLock"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bg = <fgui.GImage><any>(this.getChild("bg"));
		this.m_dial = <CPLockDial><any>(this.getChild("dial"));
		this.m_switch = <CPLockSwitch><any>(this.getChild("switch"));
		this.m_bridge = <CPLockBridge><any>(this.getChild("bridge"));
		this.m_lampGroup = <CPLockLampGroup><any>(this.getChild("lampGroup"));
		
		
	}
}