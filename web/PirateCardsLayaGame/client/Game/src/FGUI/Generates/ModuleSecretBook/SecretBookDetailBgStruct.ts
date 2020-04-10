/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CloseButton from "../../Extends/CommonBase/CloseButton";
import SecretBookDetailBg from "../../Extends/ModuleSecretBook/SecretBookDetailBg";

export default class SecretBookDetailBgStruct extends fgui.GComponent
{
	public m_closeBtn : CloseButton;

	
	public static URL:string = "ui://dmgf4euxoue81b";
	
	public static DependPackages:string[] = ["ModuleSecretBook","CommonBase"];

	
	public static createInstance():SecretBookDetailBg {
		return <SecretBookDetailBg><any>(fgui.UIPackage.createObject("ModuleSecretBook","SecretBookDetailBg"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_closeBtn = <CloseButton><any>(this.getChild("closeBtn"));
		
		
	}
}