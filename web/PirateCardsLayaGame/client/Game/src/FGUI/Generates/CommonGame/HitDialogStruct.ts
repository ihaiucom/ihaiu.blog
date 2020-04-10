/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CloseButton from "../../Extends/CommonBase/CloseButton";
import HitDialog from "../../Extends/CommonGame/HitDialog";

export default class HitDialogStruct extends fgui.GComponent
{
	public m_btnClose : CloseButton;

	
	public static URL:string = "ui://4snov4n9j35sg";
	
	public static DependPackages:string[] = ["CommonGame","CommonBase"];

	
	public static createInstance():HitDialog {
		return <HitDialog><any>(fgui.UIPackage.createObject("CommonGame","HitDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_btnClose = <CloseButton><any>(this.getChild("btnClose"));
		
		
	}
}