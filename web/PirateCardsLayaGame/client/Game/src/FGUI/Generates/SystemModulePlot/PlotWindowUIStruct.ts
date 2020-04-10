/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PlotGuideHeroItem from "../../Extends/SystemModulePlot/PlotGuideHeroItem";
import PlotGuideTextItem from "../../Extends/SystemModulePlot/PlotGuideTextItem";
import JumpButton from "../../Extends/CommonBase/JumpButton";
import FrameView from "../../Extends/CommonBase/FrameView";
import PlotWindowUI from "../../Extends/SystemModulePlot/PlotWindowUI";

export default class PlotWindowUIStruct extends fgui.GComponent
{
	public m_textIn : fgui.Transition;
	public m_textOut : fgui.Transition;
	public m_leftIn : fgui.Transition;
	public m_leftOut : fgui.Transition;
	public m_rightIn : fgui.Transition;
	public m_rightOut : fgui.Transition;
	public m_leftIn2 : fgui.Transition;
	public m_leftOut2 : fgui.Transition;
	public m_rightIn2 : fgui.Transition;
	public m_rightOut2 : fgui.Transition;
	public m_behitAnimation : fgui.Transition;
	public m_bgAnimation : fgui.Transition;
	public m_rightBehitAni : fgui.Transition;
	public m_leftBehitAni : fgui.Transition;
	public m_behitAnimation2 : fgui.Transition;
	public m_bgMap : fgui.GLoader;
	public m_rightBehitSpr : fgui.GMovieClip;
	public m_leftBehitSpr : fgui.GMovieClip;
	public m_nameBg : fgui.GImage;
	public m_nameSprite : fgui.GImage;
	public m_labelName : fgui.GTextField;
	public m_boomSprite : fgui.GImage;
	public m_leftItem : PlotGuideHeroItem;
	public m_rightItem : PlotGuideHeroItem;
	public m_textItem : PlotGuideTextItem;
	public m_btnJump : JumpButton;
	public m_bgFrame : FrameView;

	
	public static URL:string = "ui://be275eg3mz0412";
	
	public static DependPackages:string[] = ["SystemModulePlot","CommonBase"];

	
	public static createInstance():PlotWindowUI {
		return <PlotWindowUI><any>(fgui.UIPackage.createObject("SystemModulePlot","PlotWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bgMap = <fgui.GLoader><any>(this.getChild("bgMap"));
		this.m_rightBehitSpr = <fgui.GMovieClip><any>(this.getChild("rightBehitSpr"));
		this.m_leftBehitSpr = <fgui.GMovieClip><any>(this.getChild("leftBehitSpr"));
		this.m_nameBg = <fgui.GImage><any>(this.getChild("nameBg"));
		this.m_nameSprite = <fgui.GImage><any>(this.getChild("nameSprite"));
		this.m_labelName = <fgui.GTextField><any>(this.getChild("labelName"));
		this.m_boomSprite = <fgui.GImage><any>(this.getChild("boomSprite"));
		this.m_leftItem = <PlotGuideHeroItem><any>(this.getChild("leftItem"));
		this.m_rightItem = <PlotGuideHeroItem><any>(this.getChild("rightItem"));
		this.m_textItem = <PlotGuideTextItem><any>(this.getChild("textItem"));
		this.m_btnJump = <JumpButton><any>(this.getChild("btnJump"));
		this.m_bgFrame = <FrameView><any>(this.getChild("bgFrame"));
		
		
		this.m_textIn =  this.getTransition("textIn");
		this.m_textOut =  this.getTransition("textOut");
		this.m_leftIn =  this.getTransition("leftIn");
		this.m_leftOut =  this.getTransition("leftOut");
		this.m_rightIn =  this.getTransition("rightIn");
		this.m_rightOut =  this.getTransition("rightOut");
		this.m_leftIn2 =  this.getTransition("leftIn2");
		this.m_leftOut2 =  this.getTransition("leftOut2");
		this.m_rightIn2 =  this.getTransition("rightIn2");
		this.m_rightOut2 =  this.getTransition("rightOut2");
		this.m_behitAnimation =  this.getTransition("behitAnimation");
		this.m_bgAnimation =  this.getTransition("bgAnimation");
		this.m_rightBehitAni =  this.getTransition("rightBehitAni");
		this.m_leftBehitAni =  this.getTransition("leftBehitAni");
		this.m_behitAnimation2 =  this.getTransition("behitAnimation2");
	}
}