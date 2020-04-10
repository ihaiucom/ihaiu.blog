/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EmptyButton from "../../Extends/CommonBase/EmptyButton";
import HomeHeroDialog from "../../Extends/SystemModuleHome/HomeHeroDialog";

export default class HomeHeroDialogStruct extends fgui.GComponent
{
	public m_listHero : fgui.GList;
	public m_btnClose : EmptyButton;

	
	public static URL:string = "ui://4sapkhzui0lo1y";
	
	public static DependPackages:string[] = ["SystemModuleHome","CommonBase"];

	
	public static createInstance():HomeHeroDialog {
		return <HomeHeroDialog><any>(fgui.UIPackage.createObject("SystemModuleHome","HomeHeroDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_listHero = <fgui.GList><any>(this.getChild("listHero"));
		this.m_btnClose = <EmptyButton><any>(this.getChild("btnClose"));
		
		
	}
}