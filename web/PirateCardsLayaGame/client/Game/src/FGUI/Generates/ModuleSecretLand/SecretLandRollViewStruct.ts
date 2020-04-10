/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CloseButton2 from "../../Extends/CommonBase/CloseButton2";
import CommonButton6 from "../../Extends/CommonBase/CommonButton6";
import SecretLandRollView from "../../Extends/ModuleSecretLand/SecretLandRollView";

export default class SecretLandRollViewStruct extends fgui.GComponent
{
	public m_View : fgui.Controller;
	public m_des : fgui.GTextField;
	public m_title : fgui.GTextField;
	public m_btnClose : CloseButton2;
	public m_yesBtn : CommonButton6;
	public m_cancelBtn : CommonButton6;

	
	public static URL:string = "ui://62v5hdr0sd1b2a";
	
	public static DependPackages:string[] = ["ModuleSecretLand","CommonBase"];

	
	public static createInstance():SecretLandRollView {
		return <SecretLandRollView><any>(fgui.UIPackage.createObject("ModuleSecretLand","SecretLandRollView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_View = this.getController("View");

		
		this.m_des = <fgui.GTextField><any>(this.getChild("des"));
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_btnClose = <CloseButton2><any>(this.getChild("btnClose"));
		this.m_yesBtn = <CommonButton6><any>(this.getChild("yesBtn"));
		this.m_cancelBtn = <CommonButton6><any>(this.getChild("cancelBtn"));
		
		
	}
}