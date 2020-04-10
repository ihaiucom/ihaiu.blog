/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import NewSeasonWindowUI from "../../Extends/ModuleDialogs/NewSeasonWindowUI";
import DuelTempNotifyNew from "../../Extends/ModuleDialogs/DuelTempNotifyNew";
import DuelTempNotifyOld from "../../Extends/ModuleDialogs/DuelTempNotifyOld";
import PlayerLevelUpWindowUI from "../../Extends/ModuleDialogs/PlayerLevelUpWindowUI";
import AffixWindowUI from "../../Extends/ModuleDialogs/AffixWindowUI";
import AffixTipsPanel from "../../Extends/ModuleDialogs/AffixTipsPanel";

export default class ModuleDialogsBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(NewSeasonWindowUI.URL, NewSeasonWindowUI);
		bind(DuelTempNotifyNew.URL, DuelTempNotifyNew);
		bind(DuelTempNotifyOld.URL, DuelTempNotifyOld);
		bind(PlayerLevelUpWindowUI.URL, PlayerLevelUpWindowUI);
		bind(AffixWindowUI.URL, AffixWindowUI);
		bind(AffixTipsPanel.URL, AffixTipsPanel);
	}
}