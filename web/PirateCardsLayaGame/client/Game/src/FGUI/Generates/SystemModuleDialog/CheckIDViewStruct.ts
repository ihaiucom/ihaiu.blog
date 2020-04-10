/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CloseButton from "../../Extends/CommonBase/CloseButton";
import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import CheckIDView from "../../Extends/SystemModuleDialog/CheckIDView";

export default class CheckIDViewStruct extends fgui.GComponent
{
	public m_Type : fgui.Controller;
	public m_labName : fgui.GTextInput;
	public m_labID : fgui.GTextInput;
	public m_btnClose : CloseButton;
	public m_btnMake : CommonButton1;

	
	public static URL:string = "ui://q5yddivttnlh1d";
	
	public static DependPackages:string[] = ["SystemModuleDialog","CommonBase","CommonGame"];

	
	public static createInstance():CheckIDView {
		return <CheckIDView><any>(fgui.UIPackage.createObject("SystemModuleDialog","CheckIDView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_Type = this.getController("Type");

		
		this.m_labName = <fgui.GTextInput><any>(this.getChild("labName"));
		this.m_labID = <fgui.GTextInput><any>(this.getChild("labID"));
		this.m_btnClose = <CloseButton><any>(this.getChild("btnClose"));
		this.m_btnMake = <CommonButton1><any>(this.getChild("btnMake"));
		
		
	}
}