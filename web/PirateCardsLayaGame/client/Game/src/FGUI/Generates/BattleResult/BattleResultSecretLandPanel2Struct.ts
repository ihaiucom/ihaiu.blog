/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import BattleResultSecretLandPanel2 from "../../Extends/BattleResult/BattleResultSecretLandPanel2";

export default class BattleResultSecretLandPanel2Struct extends fgui.GComponent
{
	public m_cancelBtn : CommonButton1;
	public m_confirmBtn : CommonButton1;

	
	public static URL:string = "ui://qffcb501ee481p";
	
	public static DependPackages:string[] = ["BattleResult","CommonBase"];

	
	public static createInstance():BattleResultSecretLandPanel2 {
		return <BattleResultSecretLandPanel2><any>(fgui.UIPackage.createObject("BattleResult","BattleResultSecretLandPanel2"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_cancelBtn = <CommonButton1><any>(this.getChild("cancelBtn"));
		this.m_confirmBtn = <CommonButton1><any>(this.getChild("confirmBtn"));
		
		
	}
}