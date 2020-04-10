/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EmptyButton from "../../Extends/CommonBase/EmptyButton";
import FrameView from "../../Extends/CommonBase/FrameView";

export default class FrameViewStruct extends fgui.GComponent
{
	public m_closeBtn : EmptyButton;

	
	public static URL:string = "ui://jaoapdicjbnh9";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():FrameView {
		return <FrameView><any>(fgui.UIPackage.createObject("CommonBase","FrameView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_closeBtn = <EmptyButton><any>(this.getChild("closeBtn"));
		
		
	}
}