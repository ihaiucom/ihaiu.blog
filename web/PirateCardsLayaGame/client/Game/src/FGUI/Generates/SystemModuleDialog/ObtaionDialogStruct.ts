/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CloseButton from "../../Extends/SystemModuleDialog/CloseButton";
import ObtainItem from "../../Extends/SystemModuleDialog/ObtainItem";
import ObtaionDialog from "../../Extends/SystemModuleDialog/ObtaionDialog";

export default class ObtaionDialogStruct extends fgui.GComponent
{
	public m_listWay : fgui.GList;
	public m_btnClose : CloseButton;
	public m_item : ObtainItem;

	
	public static URL:string = "ui://q5yddivts0xqg";
	
	public static DependPackages:string[] = ["SystemModuleDialog","CommonBase"];

	
	public static createInstance():ObtaionDialog {
		return <ObtaionDialog><any>(fgui.UIPackage.createObject("SystemModuleDialog","ObtaionDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_listWay = <fgui.GList><any>(this.getChild("listWay"));
		this.m_btnClose = <CloseButton><any>(this.getChild("btnClose"));
		this.m_item = <ObtainItem><any>(this.getChild("item"));
		
		
	}
}