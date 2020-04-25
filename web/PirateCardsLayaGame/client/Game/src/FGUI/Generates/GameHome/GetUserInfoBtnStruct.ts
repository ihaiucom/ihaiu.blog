/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GetUserInfoBtn from "../../Extends/GameHome/GetUserInfoBtn";

export default class GetUserInfoBtnStruct extends fgui.GButton
{
	public m_title : fgui.GTextField;
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://moe42ygrgvpab9";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():GetUserInfoBtn {
		return <GetUserInfoBtn><any>(fgui.UIPackage.createObject("GameHome","GetUserInfoBtn"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		
		
	}
}