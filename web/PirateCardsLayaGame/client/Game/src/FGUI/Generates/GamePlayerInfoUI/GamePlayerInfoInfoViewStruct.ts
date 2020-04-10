/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GamePlayerInfoHeadIcon from "../../Extends/GamePlayerInfoUI/GamePlayerInfoHeadIcon";
import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import ExpProgressBar from "../../Extends/CommonBase/ExpProgressBar";
import GamePlayerInfoInfoView from "../../Extends/GamePlayerInfoUI/GamePlayerInfoInfoView";

export default class GamePlayerInfoInfoViewStruct extends fgui.GComponent
{
	public m_warFlag : fgui.GLoader;
	public m_nameLb : fgui.GTextField;
	public m_juntuanLb : fgui.GTextField;
	public m_level : fgui.GTextField;
	public m_rankLb : fgui.GTextField;
	public m_highestRankLb : fgui.GTextField;
	public m_highestDuanweiLb : fgui.GTextField;
	public m_expLb : fgui.GTextField;
	public m_duanweiLb : fgui.GTextField;
	public m_headIcon : GamePlayerInfoHeadIcon;
	public m_renameBtn : CommonButton1;
	public m_expBar : ExpProgressBar;

	
	public static URL:string = "ui://776a9nj0lzv92";
	
	public static DependPackages:string[] = ["GamePlayerInfoUI","CommonBase","_ResImageUIV1"];

	
	public static createInstance():GamePlayerInfoInfoView {
		return <GamePlayerInfoInfoView><any>(fgui.UIPackage.createObject("GamePlayerInfoUI","GamePlayerInfoInfoView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_warFlag = <fgui.GLoader><any>(this.getChild("warFlag"));
		this.m_nameLb = <fgui.GTextField><any>(this.getChild("nameLb"));
		this.m_juntuanLb = <fgui.GTextField><any>(this.getChild("juntuanLb"));
		this.m_level = <fgui.GTextField><any>(this.getChild("level"));
		this.m_rankLb = <fgui.GTextField><any>(this.getChild("rankLb"));
		this.m_highestRankLb = <fgui.GTextField><any>(this.getChild("highestRankLb"));
		this.m_highestDuanweiLb = <fgui.GTextField><any>(this.getChild("highestDuanweiLb"));
		this.m_expLb = <fgui.GTextField><any>(this.getChild("expLb"));
		this.m_duanweiLb = <fgui.GTextField><any>(this.getChild("duanweiLb"));
		this.m_headIcon = <GamePlayerInfoHeadIcon><any>(this.getChild("headIcon"));
		this.m_renameBtn = <CommonButton1><any>(this.getChild("renameBtn"));
		this.m_expBar = <ExpProgressBar><any>(this.getChild("expBar"));
		
		
	}
}