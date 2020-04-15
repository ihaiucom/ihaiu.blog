/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import PanelMainMenu from "../../Extends/GameHome/PanelMainMenu";
import PanelChooseHero from "../../Extends/GameHome/PanelChooseHero";
import WindowHomeUI from "../../Extends/GameHome/WindowHomeUI";
import HeroSprite from "../../Extends/GameHome/HeroSprite";
import PanelShop from "../../Extends/GameHome/PanelShop";
import PanelChooseGameFormat from "../../Extends/GameHome/PanelChooseGameFormat";
import WindowWarUI from "../../Extends/GameHome/WindowWarUI";
import PanelResult from "../../Extends/GameHome/PanelResult";
import MenuTopPanelWar from "../../Extends/GameHome/MenuTopPanelWar";
import CardView from "../../Extends/GameHome/CardView";
import CardLifeHero from "../../Extends/GameHome/CardLifeHero";
import CardViewFrontHero from "../../Extends/GameHome/CardViewFrontHero";
import CardViewFrontWarriow from "../../Extends/GameHome/CardViewFrontWarriow";
import CardLifeWarriow from "../../Extends/GameHome/CardLifeWarriow";
import CardViewFrontPowerUp from "../../Extends/GameHome/CardViewFrontPowerUp";
import CardLifePowerUp from "../../Extends/GameHome/CardLifePowerUp";
import CardShield from "../../Extends/GameHome/CardShield";
import CardShopBar from "../../Extends/GameHome/CardShopBar";
import CardViewBack from "../../Extends/GameHome/CardViewBack";
import CardViewFrontWarriowEnemy from "../../Extends/GameHome/CardViewFrontWarriowEnemy";
import SpriteEnemy from "../../Extends/GameHome/SpriteEnemy";
import SpriteBoss from "../../Extends/GameHome/SpriteBoss";
import CardViewFrontWarriowBoss from "../../Extends/GameHome/CardViewFrontWarriowBoss";
import Container from "../../Extends/GameHome/Container";

export default class GameHomeBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(PanelMainMenu.URL, PanelMainMenu);
		bind(PanelChooseHero.URL, PanelChooseHero);
		bind(WindowHomeUI.URL, WindowHomeUI);
		bind(HeroSprite.URL, HeroSprite);
		bind(PanelShop.URL, PanelShop);
		bind(PanelChooseGameFormat.URL, PanelChooseGameFormat);
		bind(WindowWarUI.URL, WindowWarUI);
		bind(PanelResult.URL, PanelResult);
		bind(MenuTopPanelWar.URL, MenuTopPanelWar);
		bind(CardView.URL, CardView);
		bind(CardLifeHero.URL, CardLifeHero);
		bind(CardViewFrontHero.URL, CardViewFrontHero);
		bind(CardViewFrontWarriow.URL, CardViewFrontWarriow);
		bind(CardLifeWarriow.URL, CardLifeWarriow);
		bind(CardViewFrontPowerUp.URL, CardViewFrontPowerUp);
		bind(CardLifePowerUp.URL, CardLifePowerUp);
		bind(CardShield.URL, CardShield);
		bind(CardShopBar.URL, CardShopBar);
		bind(CardViewBack.URL, CardViewBack);
		bind(CardViewFrontWarriowEnemy.URL, CardViewFrontWarriowEnemy);
		bind(SpriteEnemy.URL, SpriteEnemy);
		bind(SpriteBoss.URL, SpriteBoss);
		bind(CardViewFrontWarriowBoss.URL, CardViewFrontWarriowBoss);
		bind(Container.URL, Container);
	}
}