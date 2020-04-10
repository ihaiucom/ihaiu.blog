/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BattleResultSecretBox from "../../Extends/BattleResult/BattleResultSecretBox";
import ItemCommon3 from "../../Extends/CommonGame/ItemCommon3";
import PlayerHeadIcon from "../../Extends/CommonGame/PlayerHeadIcon";
import BaseRewardItem from "../../Extends/CommonGame/BaseRewardItem";
import BattleResultBoxItem from "../../Extends/BattleResult/BattleResultBoxItem";

export default class BattleResultBoxItemStruct extends fgui.GComponent
{
	public m_View : fgui.Controller;
	public m_IsSelf : fgui.Controller;
	public m_name : fgui.GTextField;
	public m_boxBtn : BattleResultSecretBox;
	public m_item : ItemCommon3;
	public m_headIcon : PlayerHeadIcon;
	public m_baseItem0 : BaseRewardItem;
	public m_baseItem1 : BaseRewardItem;

	
	public static URL:string = "ui://qffcb501m2ir1z";
	
	public static DependPackages:string[] = ["BattleResult","CommonGame"];

	
	public static createInstance():BattleResultBoxItem {
		return <BattleResultBoxItem><any>(fgui.UIPackage.createObject("BattleResult","BattleResultBoxItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_View = this.getController("View");
		this.m_IsSelf = this.getController("IsSelf");

		
		this.m_name = <fgui.GTextField><any>(this.getChild("name"));
		this.m_boxBtn = <BattleResultSecretBox><any>(this.getChild("boxBtn"));
		this.m_item = <ItemCommon3><any>(this.getChild("item"));
		this.m_headIcon = <PlayerHeadIcon><any>(this.getChild("headIcon"));
		this.m_baseItem0 = <BaseRewardItem><any>(this.getChild("baseItem0"));
		this.m_baseItem1 = <BaseRewardItem><any>(this.getChild("baseItem1"));
		
		
	}
}