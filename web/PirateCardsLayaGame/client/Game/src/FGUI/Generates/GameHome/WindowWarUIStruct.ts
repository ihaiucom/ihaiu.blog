/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ScreenBG from "../../Extends/GameLaunch/ScreenBG";
import MenuTopPanelWar from "../../Extends/GameHome/MenuTopPanelWar";
import ShareBtnBar from "../../Extends/GameHome/ShareBtnBar";
import PlayerLevelBar from "../../Extends/GameHome/PlayerLevelBar";
import Container from "../../Extends/GameHome/Container";
import PanelPopupChest from "../../Extends/GameHome/PanelPopupChest";
import PanelPause from "../../Extends/GameHome/PanelPause";
import PanelUplevel from "../../Extends/GameHome/PanelUplevel";
import TextBtn from "../../Extends/GameHome/TextBtn";
import GMButton from "../../Extends/GameLaunch/GMButton";
import WindowWarUI from "../../Extends/GameHome/WindowWarUI";

export default class WindowWarUIStruct extends fgui.GComponent
{
	public m_debugBar : fgui.GGroup;
	public m_bg : ScreenBG;
	public m_menuTopPanel : MenuTopPanelWar;
	public m_shareBtnBar : ShareBtnBar;
	public m_playerLevelBar : PlayerLevelBar;
	public m_container : Container;
	public m_chectPopupPanel : PanelPopupChest;
	public m_pausePanel : PanelPause;
	public m_uplevelPanel : PanelUplevel;
	public m_debugBtn_uplevel : TextBtn;
	public m_debugBtn_addStageLevel : TextBtn;
	public m_debugBtn_trigger : TextBtn;
	public m_debugBtn_music : TextBtn;
	public m_gmBtn : GMButton;

	
	public static URL:string = "ui://moe42ygrsqzy9c";
	
	public static DependPackages:string[] = ["GameHome","GameLaunch"];

	
	public static createInstance():WindowWarUI {
		return <WindowWarUI><any>(fgui.UIPackage.createObject("GameHome","WindowWarUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_debugBar = <fgui.GGroup><any>(this.getChild("debugBar"));
		this.m_bg = <ScreenBG><any>(this.getChild("bg"));
		this.m_menuTopPanel = <MenuTopPanelWar><any>(this.getChild("menuTopPanel"));
		this.m_shareBtnBar = <ShareBtnBar><any>(this.getChild("shareBtnBar"));
		this.m_playerLevelBar = <PlayerLevelBar><any>(this.getChild("playerLevelBar"));
		this.m_container = <Container><any>(this.getChild("container"));
		this.m_chectPopupPanel = <PanelPopupChest><any>(this.getChild("chectPopupPanel"));
		this.m_pausePanel = <PanelPause><any>(this.getChild("pausePanel"));
		this.m_uplevelPanel = <PanelUplevel><any>(this.getChild("uplevelPanel"));
		this.m_debugBtn_uplevel = <TextBtn><any>(this.getChild("debugBtn_uplevel"));
		this.m_debugBtn_addStageLevel = <TextBtn><any>(this.getChild("debugBtn_addStageLevel"));
		this.m_debugBtn_trigger = <TextBtn><any>(this.getChild("debugBtn_trigger"));
		this.m_debugBtn_music = <TextBtn><any>(this.getChild("debugBtn_music"));
		this.m_gmBtn = <GMButton><any>(this.getChild("gmBtn"));
		
		
	}
}