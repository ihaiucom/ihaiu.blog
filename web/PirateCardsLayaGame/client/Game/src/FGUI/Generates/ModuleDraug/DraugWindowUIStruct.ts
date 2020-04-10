/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AwakenView from "../../Extends/ModuleDraug/AwakenView";
import WearView from "../../Extends/ModuleDraug/WearView";
import DecomposeView from "../../Extends/ModuleDraug/DecomposeView";
import WindowHead from "../../Extends/CommonGame/WindowHead";
import DraugWindowUI from "../../Extends/ModuleDraug/DraugWindowUI";

export default class DraugWindowUIStruct extends fgui.GComponent
{
	public m_view : fgui.Controller;
	public m_awakenView : AwakenView;
	public m_wearView : WearView;
	public m_decomposeView : DecomposeView;
	public m_head : WindowHead;
	public m_btnAwaken : fgui.GButton;
	public m_btnWear : fgui.GButton;
	public m_btnDecompose : fgui.GButton;

	
	public static URL:string = "ui://hc5dpgynqq5r0";
	
	public static DependPackages:string[] = ["ModuleDraug","CommonBase","CommonGame"];

	
	public static createInstance():DraugWindowUI {
		return <DraugWindowUI><any>(fgui.UIPackage.createObject("ModuleDraug","DraugWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_view = this.getController("view");

		
		this.m_awakenView = <AwakenView><any>(this.getChild("awakenView"));
		this.m_wearView = <WearView><any>(this.getChild("wearView"));
		this.m_decomposeView = <DecomposeView><any>(this.getChild("decomposeView"));
		this.m_head = <WindowHead><any>(this.getChild("head"));
		this.m_btnAwaken = <fgui.GButton><any>(this.getChild("btnAwaken"));
		this.m_btnWear = <fgui.GButton><any>(this.getChild("btnWear"));
		this.m_btnDecompose = <fgui.GButton><any>(this.getChild("btnDecompose"));
		
		
	}
}