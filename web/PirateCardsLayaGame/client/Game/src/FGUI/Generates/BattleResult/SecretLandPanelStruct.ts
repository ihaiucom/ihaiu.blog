/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BattleResultSecretBox from "../../Extends/BattleResult/BattleResultSecretBox";
import SecretLandPanel from "../../Extends/BattleResult/SecretLandPanel";

export default class SecretLandPanelStruct extends fgui.GComponent
{
	public m_View : fgui.Controller;
	public m_mapName : fgui.GLoader;
	public m_keystone : fgui.GTextField;
	public m_timeLb : fgui.GTextField;
	public m_level : fgui.GTextField;
	public m_box0 : BattleResultSecretBox;
	public m_box1 : BattleResultSecretBox;
	public m_box2 : BattleResultSecretBox;
	public m_box3 : BattleResultSecretBox;

	
	public static URL:string = "ui://qffcb501piae1q";
	
	public static DependPackages:string[] = ["BattleResult"];

	
	public static createInstance():SecretLandPanel {
		return <SecretLandPanel><any>(fgui.UIPackage.createObject("BattleResult","SecretLandPanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_View = this.getController("View");

		
		this.m_mapName = <fgui.GLoader><any>(this.getChild("mapName"));
		this.m_keystone = <fgui.GTextField><any>(this.getChild("keystone"));
		this.m_timeLb = <fgui.GTextField><any>(this.getChild("timeLb"));
		this.m_level = <fgui.GTextField><any>(this.getChild("level"));
		this.m_box0 = <BattleResultSecretBox><any>(this.getChild("box0"));
		this.m_box1 = <BattleResultSecretBox><any>(this.getChild("box1"));
		this.m_box2 = <BattleResultSecretBox><any>(this.getChild("box2"));
		this.m_box3 = <BattleResultSecretBox><any>(this.getChild("box3"));
		
		
	}
}