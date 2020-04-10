/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import GashaponGetHeroButton from "../../Extends/GashaponUI/GashaponGetHeroButton";
import GashaponGetHeroView from "../../Extends/GashaponUI/GashaponGetHeroView";

export default class GashaponGetHeroViewStruct extends fgui.GComponent
{
	public m_quality : fgui.Controller;
	public m_background : fgui.GLoader;
	public m_hero : fgui.GLoader;
	public m_nameIcon : fgui.GLoader;
	public m_level : fgui.GLoader;
	public m_backBtn : CommonButton1;
	public m_shareBtn : GashaponGetHeroButton;

	
	public static URL:string = "ui://660ksptmhwig5";
	
	public static DependPackages:string[] = ["GashaponUI","CommonBase"];

	
	public static createInstance():GashaponGetHeroView {
		return <GashaponGetHeroView><any>(fgui.UIPackage.createObject("GashaponUI","GashaponGetHeroView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_quality = this.getController("quality");

		
		this.m_background = <fgui.GLoader><any>(this.getChild("background"));
		this.m_hero = <fgui.GLoader><any>(this.getChild("hero"));
		this.m_nameIcon = <fgui.GLoader><any>(this.getChild("nameIcon"));
		this.m_level = <fgui.GLoader><any>(this.getChild("level"));
		this.m_backBtn = <CommonButton1><any>(this.getChild("backBtn"));
		this.m_shareBtn = <GashaponGetHeroButton><any>(this.getChild("shareBtn"));
		
		
	}
}