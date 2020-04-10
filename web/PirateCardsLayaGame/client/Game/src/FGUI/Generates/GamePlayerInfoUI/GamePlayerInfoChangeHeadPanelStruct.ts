/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonTab from "../../Extends/CommonBase/CommonTab";
import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import CloseButton from "../../Extends/CommonBase/CloseButton";
import EnableButton from "../../Extends/CommonBase/EnableButton";
import GamePlayerHead from "../../Extends/GamePlayerInfoUI/GamePlayerHead";
import GamePlayerInfoChangeHeadPanel from "../../Extends/GamePlayerInfoUI/GamePlayerInfoChangeHeadPanel";

export default class GamePlayerInfoChangeHeadPanelStruct extends fgui.GComponent
{
	public m_viewType : fgui.Controller;
	public m_headList : fgui.GList;
	public m_des : fgui.GTextField;
	public m_tab_HeadIcon : CommonTab;
	public m_commitBtn : CommonButton1;
	public m_closeBtn : CloseButton;
	public m_wxBtn : EnableButton;
	public m_head : GamePlayerHead;

	
	public static URL:string = "ui://776a9nj0qovk9";
	
	public static DependPackages:string[] = ["GamePlayerInfoUI","CommonBase","CommonGame"];

	
	public static createInstance():GamePlayerInfoChangeHeadPanel {
		return <GamePlayerInfoChangeHeadPanel><any>(fgui.UIPackage.createObject("GamePlayerInfoUI","GamePlayerInfoChangeHeadPanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_viewType = this.getController("viewType");

		
		this.m_headList = <fgui.GList><any>(this.getChild("headList"));
		this.m_des = <fgui.GTextField><any>(this.getChild("des"));
		this.m_tab_HeadIcon = <CommonTab><any>(this.getChild("tab_HeadIcon"));
		this.m_commitBtn = <CommonButton1><any>(this.getChild("commitBtn"));
		this.m_closeBtn = <CloseButton><any>(this.getChild("closeBtn"));
		this.m_wxBtn = <EnableButton><any>(this.getChild("wxBtn"));
		this.m_head = <GamePlayerHead><any>(this.getChild("head"));
		
		
	}
}