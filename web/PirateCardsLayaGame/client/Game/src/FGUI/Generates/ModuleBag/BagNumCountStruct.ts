/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonButton3 from "../../Extends/CommonBase/CommonButton3";
import BagNumCount from "../../Extends/ModuleBag/BagNumCount";

export default class BagNumCountStruct extends fgui.GComponent
{
	public m_title : fgui.GTextInput;
	public m_minBtn : CommonButton3;
	public m_maxBtn : CommonButton3;
	public m_minusBtn : CommonButton3;
	public m_addBtn : CommonButton3;

	
	public static URL:string = "ui://4mjxxvpqmm04d";
	
	public static DependPackages:string[] = ["ModuleBag","CommonBase","CommonGame"];

	
	public static createInstance():BagNumCount {
		return <BagNumCount><any>(fgui.UIPackage.createObject("ModuleBag","BagNumCount"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fgui.GTextInput><any>(this.getChild("title"));
		this.m_minBtn = <CommonButton3><any>(this.getChild("minBtn"));
		this.m_maxBtn = <CommonButton3><any>(this.getChild("maxBtn"));
		this.m_minusBtn = <CommonButton3><any>(this.getChild("minusBtn"));
		this.m_addBtn = <CommonButton3><any>(this.getChild("addBtn"));
		
		
	}
}