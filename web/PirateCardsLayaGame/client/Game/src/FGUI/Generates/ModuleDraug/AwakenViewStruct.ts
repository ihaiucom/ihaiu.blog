/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import AwakenView from "../../Extends/ModuleDraug/AwakenView";

export default class AwakenViewStruct extends fgui.GComponent
{
	public m_listDrug : fgui.GList;
	public m_listAwaken : fgui.GList;
	public m_btnOneKey : CommonButton1;
	public m_btnCollect : CommonButton1;

	
	public static URL:string = "ui://hc5dpgynqq5r1";
	
	public static DependPackages:string[] = ["ModuleDraug","CommonBase","CommonGame"];

	
	public static createInstance():AwakenView {
		return <AwakenView><any>(fgui.UIPackage.createObject("ModuleDraug","AwakenView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_listDrug = <fgui.GList><any>(this.getChild("listDrug"));
		this.m_listAwaken = <fgui.GList><any>(this.getChild("listAwaken"));
		this.m_btnOneKey = <CommonButton1><any>(this.getChild("btnOneKey"));
		this.m_btnCollect = <CommonButton1><any>(this.getChild("btnCollect"));
		
		
	}
}