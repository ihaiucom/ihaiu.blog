/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Effect_13001_fade from "../../Extends/Effect_13001_fade/Effect_13001_fade";
import Effect_1001_Dianguanglongqi_Skin1__Skill4_13 from "../../Extends/Effect_1001_Dianguanglongqi_Skin1__Skill4_13/Effect_1001_Dianguanglongqi_Skin1__Skill4_13";
import Effect_1002_Zhanji_Skin1__Skill4_13 from "../../Extends/Effect_1002_Zhanji_Skin1__Skill4_13/Effect_1002_Zhanji_Skin1__Skill4_13";
import Effect_13002_321go from "../../Extends/Effect_13002_321go/Effect_13002_321go";
import Effect_13003_dijiangjipo from "../../Extends/Effect_13003_dijiangjipo/Effect_13003_dijiangjipo";
import EffectView from "../../Extends/GameWar3DUI/EffectView";

export default class EffectViewStruct extends fgui.GComponent
{
	public m_Effect_13001_fade : Effect_13001_fade;
	public m_Effect_1001_Dianguanglongqi_Skin1__Skill4_13 : Effect_1001_Dianguanglongqi_Skin1__Skill4_13;
	public m_Effect_1002_Zhanji_Skin1__Skill4_13 : Effect_1002_Zhanji_Skin1__Skill4_13;
	public m_Effect_13002_321go : Effect_13002_321go;
	public m_Effect_13003_dijiangjipo : Effect_13003_dijiangjipo;

	
	public static URL:string = "ui://yhpe9txzk9yu92";
	
	public static DependPackages:string[] = ["GameWar3DUI","Effect_13001_fade","Effect_1001_Dianguanglongqi_Skin1__Skill4_13","Effect_1002_Zhanji_Skin1__Skill4_13","Effect_13002_321go","Effect_13003_dijiangjipo"];

	
	public static createInstance():EffectView {
		return <EffectView><any>(fgui.UIPackage.createObject("GameWar3DUI","EffectView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_Effect_13001_fade = <Effect_13001_fade><any>(this.getChild("Effect_13001_fade"));
		this.m_Effect_1001_Dianguanglongqi_Skin1__Skill4_13 = <Effect_1001_Dianguanglongqi_Skin1__Skill4_13><any>(this.getChild("Effect_1001_Dianguanglongqi_Skin1__Skill4_13"));
		this.m_Effect_1002_Zhanji_Skin1__Skill4_13 = <Effect_1002_Zhanji_Skin1__Skill4_13><any>(this.getChild("Effect_1002_Zhanji_Skin1__Skill4_13"));
		this.m_Effect_13002_321go = <Effect_13002_321go><any>(this.getChild("Effect_13002_321go"));
		this.m_Effect_13003_dijiangjipo = <Effect_13003_dijiangjipo><any>(this.getChild("Effect_13003_dijiangjipo"));
		
		
	}
}