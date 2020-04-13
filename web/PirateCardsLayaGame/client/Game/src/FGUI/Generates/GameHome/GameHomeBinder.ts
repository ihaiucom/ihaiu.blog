/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import PanelMainMenu from "../../Extends/GameHome/PanelMainMenu";
import PanelChooseHero from "../../Extends/GameHome/PanelChooseHero";
import WindowHomeUI from "../../Extends/GameHome/WindowHomeUI";
import PanelShop from "../../Extends/GameHome/PanelShop";
import PanelChooseGameFormat from "../../Extends/GameHome/PanelChooseGameFormat";
import PanelPause from "../../Extends/GameHome/PanelPause";
import WindowWarUI from "../../Extends/GameHome/WindowWarUI";
import PanelResult from "../../Extends/GameHome/PanelResult";

export default class GameHomeBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(PanelMainMenu.URL, PanelMainMenu);
		bind(PanelChooseHero.URL, PanelChooseHero);
		bind(WindowHomeUI.URL, WindowHomeUI);
		bind(PanelShop.URL, PanelShop);
		bind(PanelChooseGameFormat.URL, PanelChooseGameFormat);
		bind(PanelPause.URL, PanelPause);
		bind(WindowWarUI.URL, WindowWarUI);
		bind(PanelResult.URL, PanelResult);
	}
}