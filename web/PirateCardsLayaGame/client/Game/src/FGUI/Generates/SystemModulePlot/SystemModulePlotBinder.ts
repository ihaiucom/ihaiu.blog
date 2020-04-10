/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import PlotGuideTextItem from "../../Extends/SystemModulePlot/PlotGuideTextItem";
import PlotGuideHeroItem from "../../Extends/SystemModulePlot/PlotGuideHeroItem";
import PlotWindowUI from "../../Extends/SystemModulePlot/PlotWindowUI";

export default class SystemModulePlotBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(PlotGuideTextItem.URL, PlotGuideTextItem);
		bind(PlotGuideHeroItem.URL, PlotGuideHeroItem);
		bind(PlotWindowUI.URL, PlotWindowUI);
	}
}