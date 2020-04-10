/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CloseButton from "../../Extends/CommonBase/CloseButton";
import DialogHeadMiddle from "../../Extends/CommonGame/DialogHeadMiddle";

export default class DialogHeadMiddleStruct extends fgui.GComponent
{
	public m_icon : fgui.GLoader;
	public m_btnClose : CloseButton;

	
	public static URL:string = "ui://4snov4n9q2gxe";
	
	public static DependPackages:string[] = ["CommonGame","CommonBase"];

	
	public static createInstance():DialogHeadMiddle {
		return <DialogHeadMiddle><any>(fgui.UIPackage.createObject("CommonGame","DialogHeadMiddle"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_btnClose = <CloseButton><any>(this.getChild("btnClose"));
		
		
	}
}