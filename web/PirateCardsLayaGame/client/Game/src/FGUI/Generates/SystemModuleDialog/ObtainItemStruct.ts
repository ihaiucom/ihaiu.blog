/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonButton2 from "../../Extends/CommonBase/CommonButton2";
import ObtainItem from "../../Extends/SystemModuleDialog/ObtainItem";

export default class ObtainItemStruct extends fgui.GComponent
{
	public m_Type : fgui.Controller;
	public m_icon : fgui.GLoader;
	public m_labName : fgui.GTextField;
	public m_labInfo : fgui.GTextField;
	public m_btnGo : CommonButton2;

	
	public static URL:string = "ui://q5yddivts0xql";
	
	public static DependPackages:string[] = ["SystemModuleDialog","CommonBase","CommonGame"];

	
	public static createInstance():ObtainItem {
		return <ObtainItem><any>(fgui.UIPackage.createObject("SystemModuleDialog","ObtainItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_Type = this.getController("Type");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_labName = <fgui.GTextField><any>(this.getChild("labName"));
		this.m_labInfo = <fgui.GTextField><any>(this.getChild("labInfo"));
		this.m_btnGo = <CommonButton2><any>(this.getChild("btnGo"));
		
		
	}
}