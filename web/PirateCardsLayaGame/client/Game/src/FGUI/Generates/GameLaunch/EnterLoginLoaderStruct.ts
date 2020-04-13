/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import LogoView from "../../Extends/GameLaunch/LogoView";
import EnterLoginLoader from "../../Extends/GameLaunch/EnterLoginLoader";

export default class EnterLoginLoaderStruct extends fgui.GComponent
{
	public m_title : fgui.GTextField;
	public m_help : fgui.GTextField;
	public m_txt_resVer : fgui.GTextField;
	public m_txt_gamever : fgui.GTextField;
	public m_progressBar : fgui.GProgressBar;
	public m_imgLogo : LogoView;

	
	public static URL:string = "ui://47qsdr42mrzrw2o";
	
	public static DependPackages:string[] = ["GameLaunch"];

	
	public static createInstance():EnterLoginLoader {
		return <EnterLoginLoader><any>(fgui.UIPackage.createObject("GameLaunch","EnterLoginLoader"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_help = <fgui.GTextField><any>(this.getChild("help"));
		this.m_txt_resVer = <fgui.GTextField><any>(this.getChild("txt_resVer"));
		this.m_txt_gamever = <fgui.GTextField><any>(this.getChild("txt_gamever"));
		this.m_progressBar = <fgui.GProgressBar><any>(this.getChild("progressBar"));
		this.m_imgLogo = <LogoView><any>(this.getChild("imgLogo"));
		
		
	}
}