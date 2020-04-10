/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import WindowHead from "../../Extends/CommonGame/WindowHead";
import SectionBookAddButton from "../../Extends/ModuleSecretBook/SectionBookAddButton";
import SecretBookStarCount from "../../Extends/ModuleSecretBook/SecretBookStarCount";
import SecretBookRewardBoxButton from "../../Extends/ModuleSecretBook/SecretBookRewardBoxButton";
import ChapterStarTips from "../../Extends/CommonGame/ChapterStarTips";
import SectionBuyTimesView from "../../Extends/CommonGame/SectionBuyTimesView";
import SecretBookListWindowUI from "../../Extends/ModuleSecretBook/SecretBookListWindowUI";

export default class SecretBookListWindowUIStruct extends fgui.GComponent
{
	public m_boxState : fgui.Controller;
	public m_list : fgui.GList;
	public m_times : fgui.GTextField;
	public m_heroIcon : fgui.GLoader;
	public m_head : WindowHead;
	public m_addTimesBtn : SectionBookAddButton;
	public m_starCount : SecretBookStarCount;
	public m_reward1 : SecretBookRewardBoxButton;
	public m_reward2 : SecretBookRewardBoxButton;
	public m_reward3 : SecretBookRewardBoxButton;
	public m_starTipView : ChapterStarTips;
	public m_buyTimesView : SectionBuyTimesView;

	
	public static URL:string = "ui://dmgf4euxpop4b";
	
	public static DependPackages:string[] = ["ModuleSecretBook","CommonGame","CommonBase"];

	
	public static createInstance():SecretBookListWindowUI {
		return <SecretBookListWindowUI><any>(fgui.UIPackage.createObject("ModuleSecretBook","SecretBookListWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_boxState = this.getController("boxState");

		
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_times = <fgui.GTextField><any>(this.getChild("times"));
		this.m_heroIcon = <fgui.GLoader><any>(this.getChild("heroIcon"));
		this.m_head = <WindowHead><any>(this.getChild("head"));
		this.m_addTimesBtn = <SectionBookAddButton><any>(this.getChild("addTimesBtn"));
		this.m_starCount = <SecretBookStarCount><any>(this.getChild("starCount"));
		this.m_reward1 = <SecretBookRewardBoxButton><any>(this.getChild("reward1"));
		this.m_reward2 = <SecretBookRewardBoxButton><any>(this.getChild("reward2"));
		this.m_reward3 = <SecretBookRewardBoxButton><any>(this.getChild("reward3"));
		this.m_starTipView = <ChapterStarTips><any>(this.getChild("starTipView"));
		this.m_buyTimesView = <SectionBuyTimesView><any>(this.getChild("buyTimesView"));
		
		
	}
}