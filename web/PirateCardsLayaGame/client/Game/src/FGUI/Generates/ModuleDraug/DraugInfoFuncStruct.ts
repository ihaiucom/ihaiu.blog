/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonButton2 from "../../Extends/CommonBase/CommonButton2";
import DraugInfoFunc from "../../Extends/ModuleDraug/DraugInfoFunc";

export default class DraugInfoFuncStruct extends fgui.GComponent
{
	public m_Type : fgui.Controller;
	public m_MaxLv : fgui.Controller;
	public m_btnSwallow : CommonButton2;
	public m_btnUnWear : CommonButton2;
	public m_btnDecompose : CommonButton2;
	public m_btnWear : CommonButton2;
	public m_btnChange : CommonButton2;

	
	public static URL:string = "ui://hc5dpgyn8sfv3a";
	
	public static DependPackages:string[] = ["ModuleDraug","CommonBase","CommonGame"];

	
	public static createInstance():DraugInfoFunc {
		return <DraugInfoFunc><any>(fgui.UIPackage.createObject("ModuleDraug","DraugInfoFunc"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_Type = this.getController("Type");
		this.m_MaxLv = this.getController("MaxLv");

		
		this.m_btnSwallow = <CommonButton2><any>(this.getChild("btnSwallow"));
		this.m_btnUnWear = <CommonButton2><any>(this.getChild("btnUnWear"));
		this.m_btnDecompose = <CommonButton2><any>(this.getChild("btnDecompose"));
		this.m_btnWear = <CommonButton2><any>(this.getChild("btnWear"));
		this.m_btnChange = <CommonButton2><any>(this.getChild("btnChange"));
		
		
	}
}