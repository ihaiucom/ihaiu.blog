/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GashaponTabButton from "../../Extends/GashaponUI/GashaponTabButton";
import GashaponButton from "../../Extends/GashaponUI/GashaponButton";
import Gashapon10Button from "../../Extends/GashaponUI/Gashapon10Button";
import GashaponPreviewButton from "../../Extends/GashaponUI/GashaponPreviewButton";
import WindowHead from "../../Extends/CommonGame/WindowHead";
import GashaponPreview from "../../Extends/GashaponUI/GashaponPreview";
import GashaponRewardView from "../../Extends/GashaponUI/GashaponRewardView";
import GashaponGetHeroView from "../../Extends/GashaponUI/GashaponGetHeroView";
import GashaponWindowUI from "../../Extends/GashaponUI/GashaponWindowUI";

export default class GashaponWindowUIStruct extends fgui.GComponent
{
	public m_GashaponType : fgui.Controller;
	public m_showPreView : fgui.Controller;
	public m_showAnimation : fgui.Controller;
	public m_timeRemain : fgui.GTextField;
	public m_btnGeneral : GashaponTabButton;
	public m_btnAdvanced : GashaponTabButton;
	public m_gashaponBtn : GashaponButton;
	public m_gashapon10Btn : Gashapon10Button;
	public m_previewBtn : GashaponPreviewButton;
	public m_head : WindowHead;
	public m_preview : GashaponPreview;
	public m_rewardView : GashaponRewardView;
	public m_heroView : GashaponGetHeroView;

	
	public static URL:string = "ui://660ksptmqo9t0";
	
	public static DependPackages:string[] = ["GashaponUI","CommonGame","CommonBase"];

	
	public static createInstance():GashaponWindowUI {
		return <GashaponWindowUI><any>(fgui.UIPackage.createObject("GashaponUI","GashaponWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_GashaponType = this.getController("GashaponType");
		this.m_showPreView = this.getController("showPreView");
		this.m_showAnimation = this.getController("showAnimation");

		
		this.m_timeRemain = <fgui.GTextField><any>(this.getChild("timeRemain"));
		this.m_btnGeneral = <GashaponTabButton><any>(this.getChild("btnGeneral"));
		this.m_btnAdvanced = <GashaponTabButton><any>(this.getChild("btnAdvanced"));
		this.m_gashaponBtn = <GashaponButton><any>(this.getChild("gashaponBtn"));
		this.m_gashapon10Btn = <Gashapon10Button><any>(this.getChild("gashapon10Btn"));
		this.m_previewBtn = <GashaponPreviewButton><any>(this.getChild("previewBtn"));
		this.m_head = <WindowHead><any>(this.getChild("head"));
		this.m_preview = <GashaponPreview><any>(this.getChild("preview"));
		this.m_rewardView = <GashaponRewardView><any>(this.getChild("rewardView"));
		this.m_heroView = <GashaponGetHeroView><any>(this.getChild("heroView"));
		
		
	}
}