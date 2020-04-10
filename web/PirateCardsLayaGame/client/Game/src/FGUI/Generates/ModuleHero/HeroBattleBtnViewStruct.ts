/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonButton from "../../Extends/CommonBase/CommonButton";
import HeroBattleBtnView from "../../Extends/ModuleHero/HeroBattleBtnView";

export default class HeroBattleBtnViewStruct extends fgui.GComponent
{
	public m_btnCancel : CommonButton;
	public m_btnOK : CommonButton;

	
	public static URL:string = "ui://lxpvy4fwsm7d27";
	
	public static DependPackages:string[] = ["ModuleHero","CommonBase"];

	
	public static createInstance():HeroBattleBtnView {
		return <HeroBattleBtnView><any>(fgui.UIPackage.createObject("ModuleHero","HeroBattleBtnView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_btnCancel = <CommonButton><any>(this.getChild("btnCancel"));
		this.m_btnOK = <CommonButton><any>(this.getChild("btnOK"));
		
		
	}
}