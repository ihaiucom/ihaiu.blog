/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TestWarInput from "../../Extends/GameTestView/TestWarInput";
import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import CloseButton from "../../Extends/CommonBase/CloseButton";
import TestWarView from "../../Extends/GameTestView/TestWarView";

export default class TestWarViewStruct extends fgui.GComponent
{
	public m_section : TestWarInput;
	public m_capter : TestWarInput;
	public m_myRole1 : TestWarInput;
	public m_myRole2 : TestWarInput;
	public m_myRole3 : TestWarInput;
	public m_myHP : TestWarInput;
	public m_myMP : TestWarInput;
	public m_myAttack : TestWarInput;
	public m_otherRole : TestWarInput;
	public m_otherHp : TestWarInput;
	public m_otherMP : TestWarInput;
	public m_otherAttack : TestWarInput;
	public m_otherAI : TestWarInput;
	public m_start : CommonButton1;
	public m_close : CloseButton;

	
	public static URL:string = "ui://7jw5s5t8k6j63";
	
	public static DependPackages:string[] = ["GameTestView","CommonBase"];

	
	public static createInstance():TestWarView {
		return <TestWarView><any>(fgui.UIPackage.createObject("GameTestView","TestWarView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_section = <TestWarInput><any>(this.getChild("section"));
		this.m_capter = <TestWarInput><any>(this.getChild("capter"));
		this.m_myRole1 = <TestWarInput><any>(this.getChild("myRole1"));
		this.m_myRole2 = <TestWarInput><any>(this.getChild("myRole2"));
		this.m_myRole3 = <TestWarInput><any>(this.getChild("myRole3"));
		this.m_myHP = <TestWarInput><any>(this.getChild("myHP"));
		this.m_myMP = <TestWarInput><any>(this.getChild("myMP"));
		this.m_myAttack = <TestWarInput><any>(this.getChild("myAttack"));
		this.m_otherRole = <TestWarInput><any>(this.getChild("otherRole"));
		this.m_otherHp = <TestWarInput><any>(this.getChild("otherHp"));
		this.m_otherMP = <TestWarInput><any>(this.getChild("otherMP"));
		this.m_otherAttack = <TestWarInput><any>(this.getChild("otherAttack"));
		this.m_otherAI = <TestWarInput><any>(this.getChild("otherAI"));
		this.m_start = <CommonButton1><any>(this.getChild("start"));
		this.m_close = <CloseButton><any>(this.getChild("close"));
		
		
	}
}