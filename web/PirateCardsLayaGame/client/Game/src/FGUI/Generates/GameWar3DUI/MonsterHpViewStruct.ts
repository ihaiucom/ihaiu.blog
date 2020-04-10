/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MonsterLongHp from "../../Extends/GameWar3DUI/MonsterLongHp";
import MonsterMidHp from "../../Extends/GameWar3DUI/MonsterMidHp";
import MonsterShortHp from "../../Extends/GameWar3DUI/MonsterShortHp";
import MonsterHpBossView from "../../Extends/GameWar3DUI/MonsterHpBossView";
import MonsterHpView from "../../Extends/GameWar3DUI/MonsterHpView";

export default class MonsterHpViewStruct extends fgui.GComponent
{
	public m_monster_type : fgui.Controller;
	public m_monsterLongHp : MonsterLongHp;
	public m_monsterMidHp : MonsterMidHp;
	public m_MonsterShortHp : MonsterShortHp;
	public m_bossHp : MonsterHpBossView;

	
	public static URL:string = "ui://yhpe9txzq91pcv";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():MonsterHpView {
		return <MonsterHpView><any>(fgui.UIPackage.createObject("GameWar3DUI","MonsterHpView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_monster_type = this.getController("monster_type");

		
		this.m_monsterLongHp = <MonsterLongHp><any>(this.getChild("monsterLongHp"));
		this.m_monsterMidHp = <MonsterMidHp><any>(this.getChild("monsterMidHp"));
		this.m_MonsterShortHp = <MonsterShortHp><any>(this.getChild("MonsterShortHp"));
		this.m_bossHp = <MonsterHpBossView><any>(this.getChild("bossHp"));
		
		
	}
}