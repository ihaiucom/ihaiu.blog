/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipSelectIcon from "../../Extends/GameHome/EquipSelectIcon";
import UplevelAlert from "../../Extends/GameHome/UplevelAlert";

export default class UplevelAlertStruct extends fgui.GComponent
{
	public m_closeBtn : fgui.GButton;
	public m_equipDecorate : EquipSelectIcon;
	public m_equipWeapon : EquipSelectIcon;
	public m_equipConsume : EquipSelectIcon;

	
	public static URL:string = "ui://moe42ygrn2s1cs";
	
	public static DependPackages:string[] = ["GameHome"];

	
	public static createInstance():UplevelAlert {
		return <UplevelAlert><any>(fgui.UIPackage.createObject("GameHome","UplevelAlert"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_closeBtn = <fgui.GButton><any>(this.getChild("closeBtn"));
		this.m_equipDecorate = <EquipSelectIcon><any>(this.getChild("equipDecorate"));
		this.m_equipWeapon = <EquipSelectIcon><any>(this.getChild("equipWeapon"));
		this.m_equipConsume = <EquipSelectIcon><any>(this.getChild("equipConsume"));
		
		
	}
}