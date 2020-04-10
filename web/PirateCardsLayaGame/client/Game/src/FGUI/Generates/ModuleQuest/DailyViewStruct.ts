/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DailyView from "../../Extends/ModuleQuest/DailyView";

export default class DailyViewStruct extends fgui.GComponent
{
	public m_listsQuest : fgui.GList;
	public m_listActive : fgui.GList;
	public m_labActive : fgui.GTextField;
	public m_progressActive : fgui.GProgressBar;

	
	public static URL:string = "ui://8o0exepai078q";
	
	public static DependPackages:string[] = ["ModuleQuest"];

	
	public static createInstance():DailyView {
		return <DailyView><any>(fgui.UIPackage.createObject("ModuleQuest","DailyView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_listsQuest = <fgui.GList><any>(this.getChild("listsQuest"));
		this.m_listActive = <fgui.GList><any>(this.getChild("listActive"));
		this.m_labActive = <fgui.GTextField><any>(this.getChild("labActive"));
		this.m_progressActive = <fgui.GProgressBar><any>(this.getChild("progressActive"));
		
		
	}
}