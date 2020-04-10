/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DongZhuoShowCom from "../../Extends/GameWar3DUI/DongZhuoShowCom";
import BossBornShowView from "../../Extends/GameWar3DUI/BossBornShowView";

export default class BossBornShowViewStruct extends fgui.GComponent
{
	public m_bossShow : fgui.Controller;
	public m_huaxiong : DongZhuoShowCom;

	
	public static URL:string = "ui://yhpe9txzkkidf2";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():BossBornShowView {
		return <BossBornShowView><any>(fgui.UIPackage.createObject("GameWar3DUI","BossBornShowView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_bossShow = this.getController("bossShow");

		
		this.m_huaxiong = <DongZhuoShowCom><any>(this.getChild("huaxiong"));
		
		
	}
}