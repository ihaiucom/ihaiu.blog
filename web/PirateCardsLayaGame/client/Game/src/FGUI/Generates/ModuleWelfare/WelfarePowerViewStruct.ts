/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GetButton from "../../Extends/ModuleWelfare/GetButton";
import WelfarePowerView from "../../Extends/ModuleWelfare/WelfarePowerView";

export default class WelfarePowerViewStruct extends fgui.GComponent
{
	public m_labNoon : fgui.GTextField;
	public m_labNight : fgui.GTextField;
	public m_btnNoon : GetButton;
	public m_btnNight : GetButton;

	
	public static URL:string = "ui://m4vd07beovfrm";
	
	public static DependPackages:string[] = ["ModuleWelfare"];

	
	public static createInstance():WelfarePowerView {
		return <WelfarePowerView><any>(fgui.UIPackage.createObject("ModuleWelfare","WelfarePowerView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_labNoon = <fgui.GTextField><any>(this.getChild("labNoon"));
		this.m_labNight = <fgui.GTextField><any>(this.getChild("labNight"));
		this.m_btnNoon = <GetButton><any>(this.getChild("btnNoon"));
		this.m_btnNight = <GetButton><any>(this.getChild("btnNight"));
		
		
	}
}