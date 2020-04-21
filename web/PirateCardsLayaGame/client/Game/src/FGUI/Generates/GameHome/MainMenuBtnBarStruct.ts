/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BigSoundBtn from "../../Extends/GameHome/BigSoundBtn";
import MainMenuBtnBar from "../../Extends/GameHome/MainMenuBtnBar";

export default class MainMenuBtnBarStruct extends fgui.GComponent
{
	public m_groupBtn : fgui.GButton;
	public m_soundBtn : BigSoundBtn;
	public m_bigPlayBtn : fgui.GButton;

	
	public static URL:string = "ui://moe42ygrsqzy88";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():MainMenuBtnBar {
		return <MainMenuBtnBar><any>(fgui.UIPackage.createObject("GameHome","MainMenuBtnBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_groupBtn = <fgui.GButton><any>(this.getChild("groupBtn"));
		this.m_soundBtn = <BigSoundBtn><any>(this.getChild("soundBtn"));
		this.m_bigPlayBtn = <fgui.GButton><any>(this.getChild("bigPlayBtn"));
		
		
	}
}