/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SkillNormalButton from "../../Extends/GameWar3DUI/SkillNormalButton";
import SkillSmallButton from "../../Extends/GameWar3DUI/SkillSmallButton";
import SkillFinalButton from "../../Extends/GameWar3DUI/SkillFinalButton";
import SkillView from "../../Extends/GameWar3DUI/SkillView";

export default class SkillViewStruct extends fgui.GComponent
{
	public m_btnAttack : fgui.GButton;
	public m_btnSkillFir : SkillNormalButton;
	public m_btnSkillSec : SkillNormalButton;
	public m_btnSkillThi : SkillNormalButton;
	public m_btnJump : SkillSmallButton;
	public m_btnSkillFou : SkillFinalButton;
	public m_btnCommonSkill : SkillNormalButton;

	
	public static URL:string = "ui://yhpe9txzb3sf3q";
	
	public static DependPackages:string[] = ["GameWar3DUI"];

	
	public static createInstance():SkillView {
		return <SkillView><any>(fgui.UIPackage.createObject("GameWar3DUI","SkillView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_btnAttack = <fgui.GButton><any>(this.getChild("btnAttack"));
		this.m_btnSkillFir = <SkillNormalButton><any>(this.getChild("btnSkillFir"));
		this.m_btnSkillSec = <SkillNormalButton><any>(this.getChild("btnSkillSec"));
		this.m_btnSkillThi = <SkillNormalButton><any>(this.getChild("btnSkillThi"));
		this.m_btnJump = <SkillSmallButton><any>(this.getChild("btnJump"));
		this.m_btnSkillFou = <SkillFinalButton><any>(this.getChild("btnSkillFou"));
		this.m_btnCommonSkill = <SkillNormalButton><any>(this.getChild("btnCommonSkill"));
		
		
	}
}