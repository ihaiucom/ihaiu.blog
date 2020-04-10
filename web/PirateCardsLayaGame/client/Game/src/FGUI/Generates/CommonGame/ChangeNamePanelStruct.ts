/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import InputTextField from "../../Extends/CommonGame/InputTextField";
import TouziButton from "../../Extends/CommonBase/TouziButton";
import ChangeNamePanel from "../../Extends/CommonGame/ChangeNamePanel";

export default class ChangeNamePanelStruct extends fgui.GComponent
{
	public m_needCost : fgui.Controller;
	public m_background : fgui.GLoader;
	public m_costLb : fgui.GTextField;
	public m_costIcon : fgui.GLoader;
	public m_commitBtn : CommonButton1;
	public m_input : InputTextField;
	public m_randomBtn : TouziButton;

	
	public static URL:string = "ui://4snov4n9on924";
	
	public static DependPackages:string[] = ["CommonGame","CommonBase"];

	
	public static createInstance():ChangeNamePanel {
		return <ChangeNamePanel><any>(fgui.UIPackage.createObject("CommonGame","ChangeNamePanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_needCost = this.getController("needCost");

		
		this.m_background = <fgui.GLoader><any>(this.getChild("background"));
		this.m_costLb = <fgui.GTextField><any>(this.getChild("costLb"));
		this.m_costIcon = <fgui.GLoader><any>(this.getChild("costIcon"));
		this.m_commitBtn = <CommonButton1><any>(this.getChild("commitBtn"));
		this.m_input = <InputTextField><any>(this.getChild("input"));
		this.m_randomBtn = <TouziButton><any>(this.getChild("randomBtn"));
		
		
	}
}