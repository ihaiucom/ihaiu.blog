/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuCenterBar from "../../Extends/SystemModuleHome/MenuCenterBar";
import MenuLeftBottomBar from "../../Extends/SystemModuleHome/MenuLeftBottomBar";
import MenuRightBottomBar from "../../Extends/SystemModuleHome/MenuRightBottomBar";
import MenuBottomBar from "../../Extends/SystemModuleHome/MenuBottomBar";
import MenuLeftTopBar from "../../Extends/SystemModuleHome/MenuLeftTopBar";
import MenuTopBar from "../../Extends/SystemModuleHome/MenuTopBar";
import MenuRightTopBar from "../../Extends/SystemModuleHome/MenuRightTopBar";
import HomeWindowUI from "../../Extends/SystemModuleHome/HomeWindowUI";

export default class HomeWindowUIStruct extends fgui.GComponent
{
	public m_bg : fgui.GComponent;
	public m_barCenter : MenuCenterBar;
	public m_barLeftBottom : MenuLeftBottomBar;
	public m_barRightBottom : MenuRightBottomBar;
	public m_barBottom : MenuBottomBar;
	public m_barLeftTop : MenuLeftTopBar;
	public m_barTop : MenuTopBar;
	public m_barRightTop : MenuRightTopBar;

	
	public static URL:string = "ui://4sapkhzuntfm0";
	
	public static DependPackages:string[] = ["SystemModuleHome"];

	
	public static createInstance():HomeWindowUI {
		return <HomeWindowUI><any>(fgui.UIPackage.createObject("SystemModuleHome","HomeWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bg = <fgui.GComponent><any>(this.getChild("bg"));
		this.m_barCenter = <MenuCenterBar><any>(this.getChild("barCenter"));
		this.m_barLeftBottom = <MenuLeftBottomBar><any>(this.getChild("barLeftBottom"));
		this.m_barRightBottom = <MenuRightBottomBar><any>(this.getChild("barRightBottom"));
		this.m_barBottom = <MenuBottomBar><any>(this.getChild("barBottom"));
		this.m_barLeftTop = <MenuLeftTopBar><any>(this.getChild("barLeftTop"));
		this.m_barTop = <MenuTopBar><any>(this.getChild("barTop"));
		this.m_barRightTop = <MenuRightTopBar><any>(this.getChild("barRightTop"));
		
		
	}
}