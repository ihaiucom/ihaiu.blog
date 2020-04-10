/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import SystemItemDialog from "../../Extends/SystemModuleDialog/SystemItemDialog";
import ItemDialog from "../../Extends/SystemModuleDialog/ItemDialog";
import ItemItem from "../../Extends/SystemModuleDialog/ItemItem";
import SystemObtainDialog from "../../Extends/SystemModuleDialog/SystemObtainDialog";
import ObtaionDialog from "../../Extends/SystemModuleDialog/ObtaionDialog";
import Bg from "../../Extends/SystemModuleDialog/Bg";
import CloseButton from "../../Extends/SystemModuleDialog/CloseButton";
import ObtainWayItem from "../../Extends/SystemModuleDialog/ObtainWayItem";
import GoButton from "../../Extends/SystemModuleDialog/GoButton";
import ObtainItem from "../../Extends/SystemModuleDialog/ObtainItem";
import SystemTeamInviteDialog from "../../Extends/SystemModuleDialog/SystemTeamInviteDialog";
import CheckIDView from "../../Extends/SystemModuleDialog/CheckIDView";
import SystemCheckIDDialog from "../../Extends/SystemModuleDialog/SystemCheckIDDialog";
import SystemCanGetDialog from "../../Extends/SystemModuleDialog/SystemCanGetDialog";

export default class SystemModuleDialogBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(SystemItemDialog.URL, SystemItemDialog);
		bind(ItemDialog.URL, ItemDialog);
		bind(ItemItem.URL, ItemItem);
		bind(SystemObtainDialog.URL, SystemObtainDialog);
		bind(ObtaionDialog.URL, ObtaionDialog);
		bind(Bg.URL, Bg);
		bind(CloseButton.URL, CloseButton);
		bind(ObtainWayItem.URL, ObtainWayItem);
		bind(GoButton.URL, GoButton);
		bind(ObtainItem.URL, ObtainItem);
		bind(SystemTeamInviteDialog.URL, SystemTeamInviteDialog);
		bind(CheckIDView.URL, CheckIDView);
		bind(SystemCheckIDDialog.URL, SystemCheckIDDialog);
		bind(SystemCanGetDialog.URL, SystemCanGetDialog);
	}
}