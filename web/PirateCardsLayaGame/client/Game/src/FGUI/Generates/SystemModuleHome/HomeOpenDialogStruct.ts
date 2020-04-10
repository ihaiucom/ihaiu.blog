/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EmptyButton from "../../Extends/CommonBase/EmptyButton";
import HomeOpenDialog from "../../Extends/SystemModuleHome/HomeOpenDialog";

export default class HomeOpenDialogStruct extends fgui.GComponent
{
	public m_imgMenu : fgui.GLoader;
	public m_labMenu : fgui.GTextField;
	public m_btnClose : EmptyButton;

	
	public static URL:string = "ui://4sapkhzut4ku21";
	
	public static DependPackages:string[] = ["SystemModuleHome","CommonBase","_ResImageUIV1"];

	
	public static createInstance():HomeOpenDialog {
		return <HomeOpenDialog><any>(fgui.UIPackage.createObject("SystemModuleHome","HomeOpenDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_imgMenu = <fgui.GLoader><any>(this.getChild("imgMenu"));
		this.m_labMenu = <fgui.GTextField><any>(this.getChild("labMenu"));
		this.m_btnClose = <EmptyButton><any>(this.getChild("btnClose"));
		
		
	}
}