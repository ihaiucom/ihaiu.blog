/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonButton4 from "../../Extends/CommonBase/CommonButton4";
import DuelTempTaskListItem from "../../Extends/ModuleDuelTemp/DuelTempTaskListItem";

export default class DuelTempTaskListItemStruct extends fgui.GLabel
{
	public m_list : fgui.GList;
	public m_task : fgui.GTextField;
	public m_recieveBtn : CommonButton4;

	
	public static URL:string = "ui://rx0filvjgfpnu";
	
	public static DependPackages:string[] = ["ModuleDuelTemp","CommonBase","CommonGame"];

	
	public static createInstance():DuelTempTaskListItem {
		return <DuelTempTaskListItem><any>(fgui.UIPackage.createObject("ModuleDuelTemp","DuelTempTaskListItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_task = <fgui.GTextField><any>(this.getChild("task"));
		this.m_recieveBtn = <CommonButton4><any>(this.getChild("recieveBtn"));
		
		
	}
}