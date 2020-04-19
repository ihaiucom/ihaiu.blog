/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CPLockDialFixedBig from "../../Extends/GameHome/CPLockDialFixedBig";
import CPLockDialFixedSmall from "../../Extends/GameHome/CPLockDialFixedSmall";
import CPLockDialLoadBig from "../../Extends/GameHome/CPLockDialLoadBig";
import CPLockDialLoadSmall from "../../Extends/GameHome/CPLockDialLoadSmall";
import CPLockDial from "../../Extends/GameHome/CPLockDial";

export default class CPLockDialStruct extends fgui.GComponent
{
	public m_fixedBig0 : CPLockDialFixedBig;
	public m_fixedBig1 : CPLockDialFixedBig;
	public m_fixedSmall0 : CPLockDialFixedSmall;
	public m_fixedSmall1 : CPLockDialFixedSmall;
	public m_fixedSmall2 : CPLockDialFixedSmall;
	public m_fixedSmall3 : CPLockDialFixedSmall;
	public m_loadBig0 : CPLockDialLoadBig;
	public m_loadSmall0 : CPLockDialLoadSmall;
	public m_loadSmall1 : CPLockDialLoadSmall;
	public m_loadSmall2 : CPLockDialLoadSmall;

	
	public static URL:string = "ui://moe42ygrjak7b0";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():CPLockDial {
		return <CPLockDial><any>(fgui.UIPackage.createObject("GameHome","CPLockDial"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_fixedBig0 = <CPLockDialFixedBig><any>(this.getChild("fixedBig0"));
		this.m_fixedBig1 = <CPLockDialFixedBig><any>(this.getChild("fixedBig1"));
		this.m_fixedSmall0 = <CPLockDialFixedSmall><any>(this.getChild("fixedSmall0"));
		this.m_fixedSmall1 = <CPLockDialFixedSmall><any>(this.getChild("fixedSmall1"));
		this.m_fixedSmall2 = <CPLockDialFixedSmall><any>(this.getChild("fixedSmall2"));
		this.m_fixedSmall3 = <CPLockDialFixedSmall><any>(this.getChild("fixedSmall3"));
		this.m_loadBig0 = <CPLockDialLoadBig><any>(this.getChild("loadBig0"));
		this.m_loadSmall0 = <CPLockDialLoadSmall><any>(this.getChild("loadSmall0"));
		this.m_loadSmall1 = <CPLockDialLoadSmall><any>(this.getChild("loadSmall1"));
		this.m_loadSmall2 = <CPLockDialLoadSmall><any>(this.getChild("loadSmall2"));
		
		
	}
}