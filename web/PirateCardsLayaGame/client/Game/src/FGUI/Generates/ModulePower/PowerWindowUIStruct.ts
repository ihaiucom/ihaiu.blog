/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PowerView from "../../Extends/ModulePower/PowerView";
import PowerWindowUI from "../../Extends/ModulePower/PowerWindowUI";

export default class PowerWindowUIStruct extends fgui.GComponent
{
	public m_powerView : PowerView;

	
	public static URL:string = "ui://kkzurfexltul0";
	
	public static DependPackages:string[] = ["ModulePower","CommonBase","CommonGame","_ResImageUIV1"];

	
	public static createInstance():PowerWindowUI {
		return <PowerWindowUI><any>(fgui.UIPackage.createObject("ModulePower","PowerWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_powerView = <PowerView><any>(this.getChild("powerView"));
		
		
	}
}