/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretBookCondition from "../../Extends/ModuleSecretBook/SecretBookCondition";

export default class SecretBookConditionStruct extends fgui.GLabel
{
	public m_icon : fgui.GLoader;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://dmgf4euxpop4a";
	
	public static DependPackages:string[] = ["ModuleSecretBook"];

	
	public static createInstance():SecretBookCondition {
		return <SecretBookCondition><any>(fgui.UIPackage.createObject("ModuleSecretBook","SecretBookCondition"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		
	}
}