/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HorizontalStar from "../../Extends/CommonGame/HorizontalStar";
import SecretBookListItem from "../../Extends/ModuleSecretBook/SecretBookListItem";

export default class SecretBookListItemStruct extends fgui.GComponent
{
	public m_state : fgui.Controller;
	public m_isHideStar : fgui.Controller;
	public m_mapId : fgui.Controller;
	public m_name : fgui.GTextField;
	public m_icon : fgui.GLoader;
	public m_timesRemain : fgui.GTextField;
	public m_condition : fgui.GTextField;
	public m_star : HorizontalStar;

	
	public static URL:string = "ui://dmgf4euxpop4c";
	
	public static DependPackages:string[] = ["ModuleSecretBook","CommonGame"];

	
	public static createInstance():SecretBookListItem {
		return <SecretBookListItem><any>(fgui.UIPackage.createObject("ModuleSecretBook","SecretBookListItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");
		this.m_isHideStar = this.getController("isHideStar");
		this.m_mapId = this.getController("mapId");

		
		this.m_name = <fgui.GTextField><any>(this.getChild("name"));
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_timesRemain = <fgui.GTextField><any>(this.getChild("timesRemain"));
		this.m_condition = <fgui.GTextField><any>(this.getChild("condition"));
		this.m_star = <HorizontalStar><any>(this.getChild("star"));
		
		
	}
}