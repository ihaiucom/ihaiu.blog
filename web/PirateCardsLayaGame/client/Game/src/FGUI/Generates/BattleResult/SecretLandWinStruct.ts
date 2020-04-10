/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BattleResultSecretBox from "../../Extends/BattleResult/BattleResultSecretBox";
import SecretLandWin from "../../Extends/BattleResult/SecretLandWin";

export default class SecretLandWinStruct extends fgui.GComponent
{
	public m_level : fgui.GTextField;
	public m_mapName : fgui.GTextField;
	public m_keystone : fgui.GTextField;
	public m_timeLb : fgui.GTextField;
	public m_box0 : BattleResultSecretBox;
	public m_box1 : BattleResultSecretBox;
	public m_box2 : BattleResultSecretBox;
	public m_box3 : BattleResultSecretBox;

	
	public static URL:string = "ui://qffcb501ee481j";
	
	public static DependPackages:string[] = ["BattleResult"];

	
	public static createInstance():SecretLandWin {
		return <SecretLandWin><any>(fgui.UIPackage.createObject("BattleResult","SecretLandWin"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_level = <fgui.GTextField><any>(this.getChild("level"));
		this.m_mapName = <fgui.GTextField><any>(this.getChild("mapName"));
		this.m_keystone = <fgui.GTextField><any>(this.getChild("keystone"));
		this.m_timeLb = <fgui.GTextField><any>(this.getChild("timeLb"));
		this.m_box0 = <BattleResultSecretBox><any>(this.getChild("box0"));
		this.m_box1 = <BattleResultSecretBox><any>(this.getChild("box1"));
		this.m_box2 = <BattleResultSecretBox><any>(this.getChild("box2"));
		this.m_box3 = <BattleResultSecretBox><any>(this.getChild("box3"));
		
		
	}
}