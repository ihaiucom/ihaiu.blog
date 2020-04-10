/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import GrowUpView from "../../Extends/ModuleQuest/GrowUpView";
import ViewButton from "../../Extends/ModuleQuest/ViewButton";
import QuestWindowUI from "../../Extends/ModuleQuest/QuestWindowUI";
import QuestItem from "../../Extends/ModuleQuest/QuestItem";
import DailyView from "../../Extends/ModuleQuest/DailyView";
import ActiveItem from "../../Extends/ModuleQuest/ActiveItem";

export default class ModuleQuestBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(GrowUpView.URL, GrowUpView);
		bind(ViewButton.URL, ViewButton);
		bind(QuestWindowUI.URL, QuestWindowUI);
		bind(QuestItem.URL, QuestItem);
		bind(DailyView.URL, DailyView);
		bind(ActiveItem.URL, ActiveItem);
	}
}