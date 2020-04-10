/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CloseButton from "../../Extends/CommonBase/CloseButton";
import ItemCommon2 from "../../Extends/CommonGame/ItemCommon2";
import SystemObtainDialog from "../../Extends/SystemModuleDialog/SystemObtainDialog";

export default class SystemObtainDialogStruct extends fgui.GComponent
{
	public m_listObtain : fgui.GList;
	public m_labName : fgui.GTextField;
	public m_labNumber : fgui.GTextField;
	public m_btnOk : fgui.GButton;
	public m_btnClose : CloseButton;
	public m_item : ItemCommon2;

	
	public static URL:string = "ui://q5yddivtja85c";
	
	public static DependPackages:string[] = ["SystemModuleDialog","CommonBase","CommonGame"];

	
	public static createInstance():SystemObtainDialog {
		return <SystemObtainDialog><any>(fgui.UIPackage.createObject("SystemModuleDialog","SystemObtainDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_listObtain = <fgui.GList><any>(this.getChild("listObtain"));
		this.m_labName = <fgui.GTextField><any>(this.getChild("labName"));
		this.m_labNumber = <fgui.GTextField><any>(this.getChild("labNumber"));
		this.m_btnOk = <fgui.GButton><any>(this.getChild("btnOk"));
		this.m_btnClose = <CloseButton><any>(this.getChild("btnClose"));
		this.m_item = <ItemCommon2><any>(this.getChild("item"));
		
		
	}
}