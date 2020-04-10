/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretLandReadyTitle from "../../Extends/ModuleSecretLand/SecretLandReadyTitle";
import SecretLandReadyLevel from "../../Extends/ModuleSecretLand/SecretLandReadyLevel";
import SecretLandReadytime from "../../Extends/ModuleSecretLand/SecretLandReadytime";
import SecretLandReadyWindowUI from "../../Extends/ModuleSecretLand/SecretLandReadyWindowUI";

export default class SecretLandReadyWindowUIStruct extends fgui.GComponent
{
	public m_AnimCtrl : fgui.Controller;
	public m_hide : fgui.Transition;
	public m_show : fgui.Transition;
	public m_list : fgui.GList;
	public m_title : SecretLandReadyTitle;
	public m_level : SecretLandReadyLevel;
	public m_time : SecretLandReadytime;

	
	public static URL:string = "ui://62v5hdr0foxi6";
	
	public static DependPackages:string[] = ["ModuleSecretLand"];

	
	public static createInstance():SecretLandReadyWindowUI {
		return <SecretLandReadyWindowUI><any>(fgui.UIPackage.createObject("ModuleSecretLand","SecretLandReadyWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_AnimCtrl = this.getController("AnimCtrl");

		
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_title = <SecretLandReadyTitle><any>(this.getChild("title"));
		this.m_level = <SecretLandReadyLevel><any>(this.getChild("level"));
		this.m_time = <SecretLandReadytime><any>(this.getChild("time"));
		
		
		this.m_hide =  this.getTransition("hide");
		this.m_show =  this.getTransition("show");
	}
}