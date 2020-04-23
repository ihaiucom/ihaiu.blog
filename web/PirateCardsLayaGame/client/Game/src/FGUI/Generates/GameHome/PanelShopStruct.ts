/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PanelShop from "../../Extends/GameHome/PanelShop";

export default class PanelShopStruct extends fgui.GComponent
{
	public m_list : fgui.GList;
	public m_playBtn : fgui.GButton;

	
	public static URL:string = "ui://moe42ygrsqzy8y";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():PanelShop {
		return <PanelShop><any>(fgui.UIPackage.createObject("GameHome","PanelShop"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_playBtn = <fgui.GButton><any>(this.getChild("playBtn"));
		
		
	}
}