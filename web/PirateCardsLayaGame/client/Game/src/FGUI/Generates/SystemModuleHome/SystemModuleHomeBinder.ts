/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import HomeWindowUI from "../../Extends/SystemModuleHome/HomeWindowUI";
import MenuBottomButton from "../../Extends/SystemModuleHome/MenuBottomButton";
import MenuBottomBar from "../../Extends/SystemModuleHome/MenuBottomBar";
import MenuLeftBottomBar from "../../Extends/SystemModuleHome/MenuLeftBottomBar";
import MenuLeftBottomButton from "../../Extends/SystemModuleHome/MenuLeftBottomButton";
import MenuRightBottomBar from "../../Extends/SystemModuleHome/MenuRightBottomBar";
import MenuRightTopButton from "../../Extends/SystemModuleHome/MenuRightTopButton";
import MenuRightTopBar from "../../Extends/SystemModuleHome/MenuRightTopBar";
import MenuTopButton from "../../Extends/SystemModuleHome/MenuTopButton";
import MenuTopBar from "../../Extends/SystemModuleHome/MenuTopBar";
import MenuLeftTopButton from "../../Extends/SystemModuleHome/MenuLeftTopButton";
import MenuLeftTopBar from "../../Extends/SystemModuleHome/MenuLeftTopBar";
import MenuCenterBar from "../../Extends/SystemModuleHome/MenuCenterBar";
import HomeHeroDialog from "../../Extends/SystemModuleHome/HomeHeroDialog";
import HomeOpenDialog from "../../Extends/SystemModuleHome/HomeOpenDialog";

export default class SystemModuleHomeBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(HomeWindowUI.URL, HomeWindowUI);
		bind(MenuBottomButton.URL, MenuBottomButton);
		bind(MenuBottomBar.URL, MenuBottomBar);
		bind(MenuLeftBottomBar.URL, MenuLeftBottomBar);
		bind(MenuLeftBottomButton.URL, MenuLeftBottomButton);
		bind(MenuRightBottomBar.URL, MenuRightBottomBar);
		bind(MenuRightTopButton.URL, MenuRightTopButton);
		bind(MenuRightTopBar.URL, MenuRightTopBar);
		bind(MenuTopButton.URL, MenuTopButton);
		bind(MenuTopBar.URL, MenuTopBar);
		bind(MenuLeftTopButton.URL, MenuLeftTopButton);
		bind(MenuLeftTopBar.URL, MenuLeftTopBar);
		bind(MenuCenterBar.URL, MenuCenterBar);
		bind(HomeHeroDialog.URL, HomeHeroDialog);
		bind(HomeOpenDialog.URL, HomeOpenDialog);
	}
}