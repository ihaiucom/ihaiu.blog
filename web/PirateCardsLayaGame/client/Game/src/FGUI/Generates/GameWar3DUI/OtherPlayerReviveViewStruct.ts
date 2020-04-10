/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import OtherPlayerReviveView from "../../Extends/GameWar3DUI/OtherPlayerReviveView";

export default class OtherPlayerReviveViewStruct extends fgui.GComponent
{
	public m_icon : fgui.GLoader;
	public m_btn : fgui.GGraph;

	
	public static URL:string = "ui://yhpe9txzociofw";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():OtherPlayerReviveView {
		return <OtherPlayerReviveView><any>(fgui.UIPackage.createObject("GameWar3DUI","OtherPlayerReviveView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_btn = <fgui.GGraph><any>(this.getChild("btn"));
		
		
	}
}