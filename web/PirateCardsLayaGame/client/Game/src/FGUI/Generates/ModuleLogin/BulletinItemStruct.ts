/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BulletinItem from "../../Extends/ModuleLogin/BulletinItem";

export default class BulletinItemStruct extends fgui.GComponent
{
	public m_labtitle : fgui.GRichTextField;
	public m_labItem : fgui.GRichTextField;

	
	public static URL:string = "ui://4698ugpkje283x";
	
	public static DependPackages:string[] = ["ModuleLogin"];

	
	public static createInstance():BulletinItem {
		return <BulletinItem><any>(fgui.UIPackage.createObject("ModuleLogin","BulletinItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_labtitle = <fgui.GRichTextField><any>(this.getChild("labtitle"));
		this.m_labItem = <fgui.GRichTextField><any>(this.getChild("labItem"));
		
		
	}
}