/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CheckIDView from "../../Extends/SystemModuleDialog/CheckIDView";
import SystemCheckIDDialog from "../../Extends/SystemModuleDialog/SystemCheckIDDialog";

export default class SystemCheckIDDialogStruct extends fgui.GComponent
{
	public m_btnOk : fgui.GButton;
	public m_chekIDView : CheckIDView;

	
	public static URL:string = "ui://q5yddivttnlh1j";
	
	public static DependPackages:string[] = ["SystemModuleDialog","CommonBase"];

	
	public static createInstance():SystemCheckIDDialog {
		return <SystemCheckIDDialog><any>(fgui.UIPackage.createObject("SystemModuleDialog","SystemCheckIDDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_btnOk = <fgui.GButton><any>(this.getChild("btnOk"));
		this.m_chekIDView = <CheckIDView><any>(this.getChild("chekIDView"));
		
		
	}
}