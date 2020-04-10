/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CloseButton2 from "../../Extends/CommonBase/CloseButton2";
import SecretLandWeekReward from "../../Extends/ModuleSecretLand/SecretLandWeekReward";

export default class SecretLandWeekRewardStruct extends fgui.GComponent
{
	public m_keystone : fgui.GTextField;
	public m_list : fgui.GList;
	public m_btnClose : CloseButton2;

	
	public static URL:string = "ui://62v5hdr0m2ir2v";
	
	public static DependPackages:string[] = ["ModuleSecretLand","CommonBase"];

	
	public static createInstance():SecretLandWeekReward {
		return <SecretLandWeekReward><any>(fgui.UIPackage.createObject("ModuleSecretLand","SecretLandWeekReward"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_keystone = <fgui.GTextField><any>(this.getChild("keystone"));
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_btnClose = <CloseButton2><any>(this.getChild("btnClose"));
		
		
	}
}