/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Com_DamagePanel from "../../Extends/GameWar3DUI/Com_DamagePanel";

export default class Com_DamagePanelStruct extends fgui.GComponent
{
	public m_damageList : fgui.GList;

	
	public static URL:string = "ui://yhpe9txzk8vb98";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():Com_DamagePanel {
		return <Com_DamagePanel><any>(fgui.UIPackage.createObject("GameWar3DUI","com_DamagePanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_damageList = <fgui.GList><any>(this.getChild("damageList"));
		
		
	}
}