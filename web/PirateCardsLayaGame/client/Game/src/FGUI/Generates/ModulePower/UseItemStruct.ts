/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import ItemCommon from "../../Extends/CommonGame/ItemCommon";
import UseItem from "../../Extends/ModulePower/UseItem";

export default class UseItemStruct extends fgui.GComponent
{
	public m_Enough : fgui.Controller;
	public m_btnUse : CommonButton1;
	public m_item : ItemCommon;

	
	public static URL:string = "ui://kkzurfexltuln";
	
	public static DependPackages:string[] = ["ModulePower","CommonBase","CommonGame"];

	
	public static createInstance():UseItem {
		return <UseItem><any>(fgui.UIPackage.createObject("ModulePower","UseItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_Enough = this.getController("Enough");

		
		this.m_btnUse = <CommonButton1><any>(this.getChild("btnUse"));
		this.m_item = <ItemCommon><any>(this.getChild("item"));
		
		
	}
}