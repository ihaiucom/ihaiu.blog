/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TypeComboBox from "../../Extends/ModuleDraug/TypeComboBox";

export default class TypeComboBoxStruct extends fgui.GComboBox
{
	public m_button : fgui.Controller;
	public m_Type : fgui.Controller;
	public m_title : fgui.GTextField;
	public m_imgType : fgui.GLoader;

	
	public static URL:string = "ui://hc5dpgynqq5rq";
	
	public static DependPackages:string[] = ["ModuleDraug","CommonGame"];

	
	public static createInstance():TypeComboBox {
		return <TypeComboBox><any>(fgui.UIPackage.createObject("ModuleDraug","TypeComboBox"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_Type = this.getController("Type");

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_imgType = <fgui.GLoader><any>(this.getChild("imgType"));
		
		
	}
}