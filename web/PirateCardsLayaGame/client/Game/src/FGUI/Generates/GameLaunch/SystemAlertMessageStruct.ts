/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DialogCloseWindow from "../../Extends/GameLaunch/DialogCloseWindow";
import SystemAlertMessage from "../../Extends/GameLaunch/SystemAlertMessage";

export default class SystemAlertMessageStruct extends fgui.GComponent
{
	public m_content : fgui.GTextField;
	public m_title : fgui.GTextField;
	public m_dialog : DialogCloseWindow;
	public m_okBtn : fgui.GButton;

	
	public static URL:string = "ui://47qsdr42nk8t1";
	
	public static DependPackages:string[] = ["GameLaunch"];

	
	public static createInstance():SystemAlertMessage {
		return <SystemAlertMessage><any>(fgui.UIPackage.createObject("GameLaunch","SystemAlertMessage"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_content = <fgui.GTextField><any>(this.getChild("content"));
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_dialog = <DialogCloseWindow><any>(this.getChild("dialog"));
		this.m_okBtn = <fgui.GButton><any>(this.getChild("okBtn"));
		
		
	}
}