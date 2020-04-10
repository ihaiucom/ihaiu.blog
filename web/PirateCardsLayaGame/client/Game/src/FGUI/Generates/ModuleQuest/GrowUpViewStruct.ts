/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GrowUpView from "../../Extends/ModuleQuest/GrowUpView";

export default class GrowUpViewStruct extends fgui.GComponent
{
	public m_listsQuest : fgui.GList;

	
	public static URL:string = "ui://8o0exepanh29k";
	
	public static DependPackages:string[] = ["ModuleQuest"];

	
	public static createInstance():GrowUpView {
		return <GrowUpView><any>(fgui.UIPackage.createObject("ModuleQuest","GrowUpView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_listsQuest = <fgui.GList><any>(this.getChild("listsQuest"));
		
		
	}
}