/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CloseButton from "../../Extends/CommonBase/CloseButton";
import HitDialog2 from "../../Extends/CommonGame/HitDialog2";

export default class HitDialog2Struct extends fgui.GComponent
{
	public m_type : fgui.Controller;
	public m_btnClose : CloseButton;

	
	public static URL:string = "ui://4snov4n9j35sn";
	
	public static DependPackages:string[] = ["CommonGame","CommonBase"];

	
	public static createInstance():HitDialog2 {
		return <HitDialog2><any>(fgui.UIPackage.createObject("CommonGame","HitDialog2"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_type = this.getController("type");

		
		this.m_btnClose = <CloseButton><any>(this.getChild("btnClose"));
		
		
	}
}