/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GrayMask from "../../Extends/SystemModuleGuide/GrayMask";
import GuideDialogUI from "../../Extends/SystemModuleGuide/GuideDialogUI";

export default class GuideDialogUIStruct extends fgui.GComponent
{
	public m_leftTopMask : GrayMask;
	public m_RightTopMask : GrayMask;
	public m_leftBottomMask : GrayMask;
	public m_rightBottomMask : GrayMask;
	public m_allMask : GrayMask;

	
	public static URL:string = "ui://4bbdqtkikkks5";
	
	public static DependPackages:string[] = ["SystemModuleGuide"];

	
	public static createInstance():GuideDialogUI {
		return <GuideDialogUI><any>(fgui.UIPackage.createObject("SystemModuleGuide","GuideDialogUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_leftTopMask = <GrayMask><any>(this.getChild("leftTopMask"));
		this.m_RightTopMask = <GrayMask><any>(this.getChild("RightTopMask"));
		this.m_leftBottomMask = <GrayMask><any>(this.getChild("leftBottomMask"));
		this.m_rightBottomMask = <GrayMask><any>(this.getChild("rightBottomMask"));
		this.m_allMask = <GrayMask><any>(this.getChild("allMask"));
		
		
	}
}