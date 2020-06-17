/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipTip from "../../Extends/GameHome/EquipTip";

export default class EquipTipStruct extends fgui.GLabel
{
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://moe42ygr9cgecx";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():EquipTip {
		return <EquipTip><any>(fgui.UIPackage.createObject("GameHome","EquipTip"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}