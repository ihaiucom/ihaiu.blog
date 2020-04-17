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
import FxBarrel from "../../Extends/GameHome/FxBarrel";
import CardView from "../../Extends/GameHome/CardView";
import CardLifeHero from "../../Extends/GameHome/CardLifeHero";
import CardViewFrontHero from "../../Extends/GameHome/CardViewFrontHero";
import CardViewFrontWarriow from "../../Extends/GameHome/CardViewFrontWarriow";
import CardLifeWarriow from "../../Extends/GameHome/CardLifeWarriow";
import CardViewFrontPowerUpCannon from "../../Extends/GameHome/CardViewFrontPowerUpCannon";
import CardLifePowerUp from "../../Extends/GameHome/CardLifePowerUp";
import CardShield from "../../Extends/GameHome/CardShield";
import CardShopBar from "../../Extends/GameHome/CardShopBar";
import CardViewBack from "../../Extends/GameHome/CardViewBack";
import CardViewFrontWarriowEnemy from "../../Extends/GameHome/CardViewFrontWarriowEnemy";
import SpriteEnemy from "../../Extends/GameHome/SpriteEnemy";
import SpriteBoss from "../../Extends/GameHome/SpriteBoss";
import CardViewFrontWarriowBoss from "../../Extends/GameHome/CardViewFrontWarriowBoss";
import Container from "../../Extends/GameHome/Container";
import CardViewFrontBg from "../../Extends/GameHome/CardViewFrontBg";
import CardViewFrontWarriowTrap from "../../Extends/GameHome/CardViewFrontWarriowTrap";
import CardViewFrontPowerUp from "../../Extends/GameHome/CardViewFrontPowerUp";
import CardViewFrontPowerUpBarrel from "../../Extends/GameHome/CardViewFrontPowerUpBarrel";
import CardViewFrontPowerUpChest from "../../Extends/GameHome/CardViewFrontPowerUpChest";
import CardViewFrontPowerUpBomb from "../../Extends/GameHome/CardViewFrontPowerUpBomb";
import CardViewFrontPowerUpSkull from "../../Extends/GameHome/CardViewFrontPowerUpSkull";

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
		bind(FxBarrel.URL, FxBarrel);
		bind(CardView.URL, CardView);
		bind(CardLifeHero.URL, CardLifeHero);
		bind(CardViewFrontHero.URL, CardViewFrontHero);
		bind(CardViewFrontWarriow.URL, CardViewFrontWarriow);
		bind(CardLifeWarriow.URL, CardLifeWarriow);
		bind(CardViewFrontPowerUpCannon.URL, CardViewFrontPowerUpCannon);
		bind(CardLifePowerUp.URL, CardLifePowerUp);
		bind(CardShield.URL, CardShield);
		bind(CardShopBar.URL, CardShopBar);
		bind(CardViewBack.URL, CardViewBack);
		bind(CardViewFrontWarriowEnemy.URL, CardViewFrontWarriowEnemy);
		bind(SpriteEnemy.URL, SpriteEnemy);
		bind(SpriteBoss.URL, SpriteBoss);
		bind(CardViewFrontWarriowBoss.URL, CardViewFrontWarriowBoss);
		bind(Container.URL, Container);
		bind(CardViewFrontBg.URL, CardViewFrontBg);
		bind(CardViewFrontWarriowTrap.URL, CardViewFrontWarriowTrap);
		bind(CardViewFrontPowerUp.URL, CardViewFrontPowerUp);
		bind(CardViewFrontPowerUpBarrel.URL, CardViewFrontPowerUpBarrel);
		bind(CardViewFrontPowerUpChest.URL, CardViewFrontPowerUpChest);
		bind(CardViewFrontPowerUpBomb.URL, CardViewFrontPowerUpBomb);
		bind(CardViewFrontPowerUpSkull.URL, CardViewFrontPowerUpSkull);
	}
}