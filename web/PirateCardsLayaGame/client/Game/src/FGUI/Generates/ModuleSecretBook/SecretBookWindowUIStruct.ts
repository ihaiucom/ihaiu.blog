/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import WindowHead from "../../Extends/CommonGame/WindowHead";
import SecretButton from "../../Extends/ModuleSecretBook/SecretButton";
import SecretBookWindowUI from "../../Extends/ModuleSecretBook/SecretBookWindowUI";

export default class SecretBookWindowUIStruct extends fgui.GComponent
{
	public m_hero : fgui.GLoader;
	public m_list : fgui.GList;
	public m_head : WindowHead;
	public m_secretBtn : SecretButton;

	
	public static URL:string = "ui://dmgf4euxsjrp0";
	
	public static DependPackages:string[] = ["ModuleSecretBook","CommonGame","CommonBase"];

	
	public static createInstance():SecretBookWindowUI {
		return <SecretBookWindowUI><any>(fgui.UIPackage.createObject("ModuleSecretBook","SecretBookWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_hero = <fgui.GLoader><any>(this.getChild("hero"));
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_head = <WindowHead><any>(this.getChild("head"));
		this.m_secretBtn = <SecretButton><any>(this.getChild("secretBtn"));
		
		
	}
}