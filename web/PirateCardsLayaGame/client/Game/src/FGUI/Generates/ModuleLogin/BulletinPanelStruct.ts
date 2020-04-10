/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonDialogBg from "../../Extends/ModuleLogin/CommonDialogBg";
import BulletinPanel from "../../Extends/ModuleLogin/BulletinPanel";

export default class BulletinPanelStruct extends fgui.GComponent
{
	public m_Type : fgui.Controller;
	public m_listTest : fgui.GList;
	public m_listUpdate : fgui.GList;
	public m_bg : CommonDialogBg;

	
	public static URL:string = "ui://4698ugpkrlfx2m";
	
	public static DependPackages:string[] = ["ModuleLogin"];

	
	public static createInstance():BulletinPanel {
		return <BulletinPanel><any>(fgui.UIPackage.createObject("ModuleLogin","BulletinPanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_Type = this.getController("Type");

		
		this.m_listTest = <fgui.GList><any>(this.getChild("listTest"));
		this.m_listUpdate = <fgui.GList><any>(this.getChild("listUpdate"));
		this.m_bg = <CommonDialogBg><any>(this.getChild("bg"));
		
		
	}
}