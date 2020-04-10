/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GashaponHeroIconButton from "../../Extends/GashaponUI/GashaponHeroIconButton";
import CloseButton from "../../Extends/CommonBase/CloseButton";
import GashaponBasePropItem from "../../Extends/GashaponUI/GashaponBasePropItem";
import GashaponHeroDetail from "../../Extends/GashaponUI/GashaponHeroDetail";

export default class GashaponHeroDetailStruct extends fgui.GComponent
{
	public m_background : fgui.GLoader;
	public m_name : fgui.GTextField;
	public m_skill0 : fgui.GLoader;
	public m_skill1 : fgui.GLoader;
	public m_skill2 : fgui.GLoader;
	public m_skill3 : fgui.GLoader;
	public m_hero : GashaponHeroIconButton;
	public m_backBtn : CloseButton;
	public m_prop0 : GashaponBasePropItem;
	public m_prop1 : GashaponBasePropItem;
	public m_prop2 : GashaponBasePropItem;
	public m_prop3 : GashaponBasePropItem;
	public m_prop4 : GashaponBasePropItem;
	public m_prop5 : GashaponBasePropItem;

	
	public static URL:string = "ui://660ksptmv09e1q";
	
	public static DependPackages:string[] = ["GashaponUI","CommonGame","CommonBase","_ResImageUIV1"];

	
	public static createInstance():GashaponHeroDetail {
		return <GashaponHeroDetail><any>(fgui.UIPackage.createObject("GashaponUI","GashaponHeroDetail"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_background = <fgui.GLoader><any>(this.getChild("background"));
		this.m_name = <fgui.GTextField><any>(this.getChild("name"));
		this.m_skill0 = <fgui.GLoader><any>(this.getChild("skill0"));
		this.m_skill1 = <fgui.GLoader><any>(this.getChild("skill1"));
		this.m_skill2 = <fgui.GLoader><any>(this.getChild("skill2"));
		this.m_skill3 = <fgui.GLoader><any>(this.getChild("skill3"));
		this.m_hero = <GashaponHeroIconButton><any>(this.getChild("hero"));
		this.m_backBtn = <CloseButton><any>(this.getChild("backBtn"));
		this.m_prop0 = <GashaponBasePropItem><any>(this.getChild("prop0"));
		this.m_prop1 = <GashaponBasePropItem><any>(this.getChild("prop1"));
		this.m_prop2 = <GashaponBasePropItem><any>(this.getChild("prop2"));
		this.m_prop3 = <GashaponBasePropItem><any>(this.getChild("prop3"));
		this.m_prop4 = <GashaponBasePropItem><any>(this.getChild("prop4"));
		this.m_prop5 = <GashaponBasePropItem><any>(this.getChild("prop5"));
		
		
	}
}