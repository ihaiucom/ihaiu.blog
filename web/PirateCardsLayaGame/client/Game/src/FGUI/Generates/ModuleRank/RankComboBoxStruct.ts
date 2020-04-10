/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RankComboBox from "../../Extends/ModuleRank/RankComboBox";

export default class RankComboBoxStruct extends fgui.GComboBox
{
	public m_button : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://47fv9ahvtgxhn";
	
	public static DependPackages:string[] = ["ModuleRank"];

	
	public static createInstance():RankComboBox {
		return <RankComboBox><any>(fgui.UIPackage.createObject("ModuleRank","RankComboBox"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}