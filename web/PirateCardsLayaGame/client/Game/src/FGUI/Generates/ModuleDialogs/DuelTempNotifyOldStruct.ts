/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DuelTempStar from "../../Extends/CommonGame/DuelTempStar";
import DuelTempNotifyOld from "../../Extends/ModuleDialogs/DuelTempNotifyOld";

export default class DuelTempNotifyOldStruct extends fgui.GComponent
{
	public m_DanIcon : fgui.GLoader;
	public m_danName : fgui.GTextField;
	public m_star : DuelTempStar;

	
	public static URL:string = "ui://enntu5su9reym";
	
	public static DependPackages:string[] = ["ModuleDialogs","CommonGame"];

	
	public static createInstance():DuelTempNotifyOld {
		return <DuelTempNotifyOld><any>(fgui.UIPackage.createObject("ModuleDialogs","DuelTempNotifyOld"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_DanIcon = <fgui.GLoader><any>(this.getChild("DanIcon"));
		this.m_danName = <fgui.GTextField><any>(this.getChild("danName"));
		this.m_star = <DuelTempStar><any>(this.getChild("star"));
		
		
	}
}