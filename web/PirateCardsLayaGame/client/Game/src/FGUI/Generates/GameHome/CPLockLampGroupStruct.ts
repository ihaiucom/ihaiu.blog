/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CPLockLamp from "../../Extends/GameHome/CPLockLamp";
import CPLockLampGroup from "../../Extends/GameHome/CPLockLampGroup";

export default class CPLockLampGroupStruct extends fgui.GComponent
{
	public m_lamp_1 : CPLockLamp;
	public m_lamp_2 : CPLockLamp;
	public m_lamp_3 : CPLockLamp;
	public m_lamp_4 : CPLockLamp;

	
	public static URL:string = "ui://moe42ygrjak7av";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():CPLockLampGroup {
		return <CPLockLampGroup><any>(fgui.UIPackage.createObject("GameHome","CPLockLampGroup"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_lamp_1 = <CPLockLamp><any>(this.getChild("lamp_1"));
		this.m_lamp_2 = <CPLockLamp><any>(this.getChild("lamp_2"));
		this.m_lamp_3 = <CPLockLamp><any>(this.getChild("lamp_3"));
		this.m_lamp_4 = <CPLockLamp><any>(this.getChild("lamp_4"));
		
		
	}
}