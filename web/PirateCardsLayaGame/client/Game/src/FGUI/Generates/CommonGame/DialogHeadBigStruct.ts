/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CloseButton from "../../Extends/CommonBase/CloseButton";
import DialogHeadBig from "../../Extends/CommonGame/DialogHeadBig";

export default class DialogHeadBigStruct extends fgui.GComponent
{
	public m_icon : fgui.GLoader;
	public m_closeBtn : CloseButton;

	
	public static URL:string = "ui://4snov4n9q2gx9";
	
	public static DependPackages:string[] = ["CommonGame","CommonBase"];

	
	public static createInstance():DialogHeadBig {
		return <DialogHeadBig><any>(fgui.UIPackage.createObject("CommonGame","DialogHeadBig"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_closeBtn = <CloseButton><any>(this.getChild("closeBtn"));
		
		
	}
}