/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AddButton from "../../Extends/CommonBase/AddButton";
import HeroLevelUpDialog from "../../Extends/ModuleHero/HeroLevelUpDialog";
import HeroLevelProgressBar from "../../Extends/CommonBase/HeroLevelProgressBar";
import HeroFuncBaseView from "../../Extends/ModuleHero/HeroFuncBaseView";

export default class HeroFuncBaseViewStruct extends fgui.GComponent
{
	public m_levelBgState : fgui.Controller;
	public m_list : fgui.GList;
	public m_labelLv : fgui.GTextField;
	public m_labelExp : fgui.GTextField;
	public m_propList : fgui.GList;
	public m_highPropList : fgui.GList;
	public m_btnAdd : AddButton;
	public m_levelUpView : HeroLevelUpDialog;
	public m_progress : HeroLevelProgressBar;

	
	public static URL:string = "ui://lxpvy4fwujzg1h";
	
	public static DependPackages:string[] = ["ModuleHero","CommonBase"];

	
	public static createInstance():HeroFuncBaseView {
		return <HeroFuncBaseView><any>(fgui.UIPackage.createObject("ModuleHero","HeroFuncBaseView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_levelBgState = this.getController("levelBgState");

		
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_labelLv = <fgui.GTextField><any>(this.getChild("labelLv"));
		this.m_labelExp = <fgui.GTextField><any>(this.getChild("labelExp"));
		this.m_propList = <fgui.GList><any>(this.getChild("propList"));
		this.m_highPropList = <fgui.GList><any>(this.getChild("highPropList"));
		this.m_btnAdd = <AddButton><any>(this.getChild("btnAdd"));
		this.m_levelUpView = <HeroLevelUpDialog><any>(this.getChild("levelUpView"));
		this.m_progress = <HeroLevelProgressBar><any>(this.getChild("progress"));
		
		
	}
}