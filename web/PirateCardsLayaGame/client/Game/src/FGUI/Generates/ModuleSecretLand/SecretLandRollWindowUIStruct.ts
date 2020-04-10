/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretLandRollView from "../../Extends/ModuleSecretLand/SecretLandRollView";
import SecretLandRollWindowUI from "../../Extends/ModuleSecretLand/SecretLandRollWindowUI";

export default class SecretLandRollWindowUIStruct extends fgui.GComponent
{
	public m_rollView : SecretLandRollView;

	
	public static URL:string = "ui://62v5hdr0sd1b29";
	
	public static DependPackages:string[] = ["ModuleSecretLand","CommonBase","_ResImageUIV1"];

	
	public static createInstance():SecretLandRollWindowUI {
		return <SecretLandRollWindowUI><any>(fgui.UIPackage.createObject("ModuleSecretLand","SecretLandRollWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_rollView = <SecretLandRollView><any>(this.getChild("rollView"));
		
		
	}
}