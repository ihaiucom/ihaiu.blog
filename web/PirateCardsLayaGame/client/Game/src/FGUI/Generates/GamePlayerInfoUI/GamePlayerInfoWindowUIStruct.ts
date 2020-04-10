/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GamePlayerInfoInfoView from "../../Extends/GamePlayerInfoUI/GamePlayerInfoInfoView";
import GamePlayerInfoHeroView from "../../Extends/GamePlayerInfoUI/GamePlayerInfoHeroView";
import GamePlayerInfoTab from "../../Extends/GamePlayerInfoUI/GamePlayerInfoTab";
import WindowHead from "../../Extends/CommonGame/WindowHead";
import GamePlayerInfoChangeHeadPanel from "../../Extends/GamePlayerInfoUI/GamePlayerInfoChangeHeadPanel";
import ChangeNamePanel from "../../Extends/CommonGame/ChangeNamePanel";
import GamePlayerInfoWindowUI from "../../Extends/GamePlayerInfoUI/GamePlayerInfoWindowUI";

export default class GamePlayerInfoWindowUIStruct extends fgui.GComponent
{
	public m_ViewType : fgui.Controller;
	public m_showChangeHeadIcon : fgui.Controller;
	public m_showChangeName : fgui.Controller;
	public m_infoView : GamePlayerInfoInfoView;
	public m_heroView : GamePlayerInfoHeroView;
	public m_tab_info : GamePlayerInfoTab;
	public m_tab_hero : GamePlayerInfoTab;
	public m_tab_hornor : GamePlayerInfoTab;
	public m_tab_other : GamePlayerInfoTab;
	public m_backBtn : WindowHead;
	public m_changeHeadView : GamePlayerInfoChangeHeadPanel;
	public m_changeNameView : ChangeNamePanel;

	
	public static URL:string = "ui://776a9nj0lzv90";
	
	public static DependPackages:string[] = ["GamePlayerInfoUI","CommonBase","CommonGame","_ResImagePic"];

	
	public static createInstance():GamePlayerInfoWindowUI {
		return <GamePlayerInfoWindowUI><any>(fgui.UIPackage.createObject("GamePlayerInfoUI","GamePlayerInfoWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_ViewType = this.getController("ViewType");
		this.m_showChangeHeadIcon = this.getController("showChangeHeadIcon");
		this.m_showChangeName = this.getController("showChangeName");

		
		this.m_infoView = <GamePlayerInfoInfoView><any>(this.getChild("infoView"));
		this.m_heroView = <GamePlayerInfoHeroView><any>(this.getChild("heroView"));
		this.m_tab_info = <GamePlayerInfoTab><any>(this.getChild("tab_info"));
		this.m_tab_hero = <GamePlayerInfoTab><any>(this.getChild("tab_hero"));
		this.m_tab_hornor = <GamePlayerInfoTab><any>(this.getChild("tab_hornor"));
		this.m_tab_other = <GamePlayerInfoTab><any>(this.getChild("tab_other"));
		this.m_backBtn = <WindowHead><any>(this.getChild("backBtn"));
		this.m_changeHeadView = <GamePlayerInfoChangeHeadPanel><any>(this.getChild("changeHeadView"));
		this.m_changeNameView = <ChangeNamePanel><any>(this.getChild("changeNameView"));
		
		
	}
}