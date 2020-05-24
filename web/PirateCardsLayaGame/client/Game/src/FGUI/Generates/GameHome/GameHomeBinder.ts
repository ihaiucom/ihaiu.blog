/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import PanelMainMenu from "../../Extends/GameHome/PanelMainMenu";
import BigSoundBtn from "../../Extends/GameHome/BigSoundBtn";
import MainMenuBtnBar from "../../Extends/GameHome/MainMenuBtnBar";
import PanelChooseHero from "../../Extends/GameHome/PanelChooseHero";
import WindowHomeUI from "../../Extends/GameHome/WindowHomeUI";
import MenuTopPanel from "../../Extends/GameHome/MenuTopPanel";
import ChoiceHero from "../../Extends/GameHome/ChoiceHero";
import HeroSprite from "../../Extends/GameHome/HeroSprite";
import ChoiceHeroInfo from "../../Extends/GameHome/ChoiceHeroInfo";
import HeroInfoKey from "../../Extends/GameHome/HeroInfoKey";
import HeroInfoBomb from "../../Extends/GameHome/HeroInfoBomb";
import HeroInfoGun from "../../Extends/GameHome/HeroInfoGun";
import ChoiceHeroCard from "../../Extends/GameHome/ChoiceHeroCard";
import ShopCard from "../../Extends/GameHome/ShopCard";
import FxSmallRing from "../../Extends/GameHome/FxSmallRing";
import ShopIcon from "../../Extends/GameHome/ShopIcon";
import PanelShop from "../../Extends/GameHome/PanelShop";
import PanelChooseGameFormat from "../../Extends/GameHome/PanelChooseGameFormat";
import GameFormatCard from "../../Extends/GameHome/GameFormatCard";
import FxShadow from "../../Extends/GameHome/FxShadow";
import ShopCardFront from "../../Extends/GameHome/ShopCardFront";
import ShopCardBack from "../../Extends/GameHome/ShopCardBack";
import PanelPause from "../../Extends/GameHome/PanelPause";
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
import FxShootCannon from "../../Extends/GameHome/FxShootCannon";
import FxShootSmoke from "../../Extends/GameHome/FxShootSmoke";
import FxShootBoom from "../../Extends/GameHome/FxShootBoom";
import FxShootLightningBig from "../../Extends/GameHome/FxShootLightningBig";
import FxShootLightningSmall from "../../Extends/GameHome/FxShootLightningSmall";
import FxSkull from "../../Extends/GameHome/FxSkull";
import PanelPopupChest from "../../Extends/GameHome/PanelPopupChest";
import CPLockLamp from "../../Extends/GameHome/CPLockLamp";
import CPLockBridge from "../../Extends/GameHome/CPLockBridge";
import CPLockSwitch from "../../Extends/GameHome/CPLockSwitch";
import CPLockArrow from "../../Extends/GameHome/CPLockArrow";
import CPLockLampGroup from "../../Extends/GameHome/CPLockLampGroup";
import CPLockDialLoadBig from "../../Extends/GameHome/CPLockDialLoadBig";
import CPLockDialLoadSmall from "../../Extends/GameHome/CPLockDialLoadSmall";
import CPLockDialFixedSmall from "../../Extends/GameHome/CPLockDialFixedSmall";
import CPLockDialFixedBig from "../../Extends/GameHome/CPLockDialFixedBig";
import CPLockDial from "../../Extends/GameHome/CPLockDial";
import CPLock from "../../Extends/GameHome/CPLock";
import GetUserInfoBtn from "../../Extends/GameHome/GetUserInfoBtn";
import ShareBtn from "../../Extends/GameHome/ShareBtn";
import ShareBtnBar from "../../Extends/GameHome/ShareBtnBar";
import ShareIconBtn from "../../Extends/GameHome/ShareIconBtn";
import PlayerLevelBar from "../../Extends/GameHome/PlayerLevelBar";
import Level from "../../Extends/GameHome/Level";
import ExpBar from "../../Extends/GameHome/ExpBar";
import EquipIcon from "../../Extends/GameHome/EquipIcon";
import PanelUplevel from "../../Extends/GameHome/PanelUplevel";
import EquipSelectIcon from "../../Extends/GameHome/EquipSelectIcon";
import UplevelAlert from "../../Extends/GameHome/UplevelAlert";
import CardStep from "../../Extends/GameHome/CardStep";

export default class GameHomeBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(PanelMainMenu.URL, PanelMainMenu);
		bind(BigSoundBtn.URL, BigSoundBtn);
		bind(MainMenuBtnBar.URL, MainMenuBtnBar);
		bind(PanelChooseHero.URL, PanelChooseHero);
		bind(WindowHomeUI.URL, WindowHomeUI);
		bind(MenuTopPanel.URL, MenuTopPanel);
		bind(ChoiceHero.URL, ChoiceHero);
		bind(HeroSprite.URL, HeroSprite);
		bind(ChoiceHeroInfo.URL, ChoiceHeroInfo);
		bind(HeroInfoKey.URL, HeroInfoKey);
		bind(HeroInfoBomb.URL, HeroInfoBomb);
		bind(HeroInfoGun.URL, HeroInfoGun);
		bind(ChoiceHeroCard.URL, ChoiceHeroCard);
		bind(ShopCard.URL, ShopCard);
		bind(FxSmallRing.URL, FxSmallRing);
		bind(ShopIcon.URL, ShopIcon);
		bind(PanelShop.URL, PanelShop);
		bind(PanelChooseGameFormat.URL, PanelChooseGameFormat);
		bind(GameFormatCard.URL, GameFormatCard);
		bind(FxShadow.URL, FxShadow);
		bind(ShopCardFront.URL, ShopCardFront);
		bind(ShopCardBack.URL, ShopCardBack);
		bind(PanelPause.URL, PanelPause);
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
		bind(FxShootCannon.URL, FxShootCannon);
		bind(FxShootSmoke.URL, FxShootSmoke);
		bind(FxShootBoom.URL, FxShootBoom);
		bind(FxShootLightningBig.URL, FxShootLightningBig);
		bind(FxShootLightningSmall.URL, FxShootLightningSmall);
		bind(FxSkull.URL, FxSkull);
		bind(PanelPopupChest.URL, PanelPopupChest);
		bind(CPLockLamp.URL, CPLockLamp);
		bind(CPLockBridge.URL, CPLockBridge);
		bind(CPLockSwitch.URL, CPLockSwitch);
		bind(CPLockArrow.URL, CPLockArrow);
		bind(CPLockLampGroup.URL, CPLockLampGroup);
		bind(CPLockDialLoadBig.URL, CPLockDialLoadBig);
		bind(CPLockDialLoadSmall.URL, CPLockDialLoadSmall);
		bind(CPLockDialFixedSmall.URL, CPLockDialFixedSmall);
		bind(CPLockDialFixedBig.URL, CPLockDialFixedBig);
		bind(CPLockDial.URL, CPLockDial);
		bind(CPLock.URL, CPLock);
		bind(GetUserInfoBtn.URL, GetUserInfoBtn);
		bind(ShareBtn.URL, ShareBtn);
		bind(ShareBtnBar.URL, ShareBtnBar);
		bind(ShareIconBtn.URL, ShareIconBtn);
		bind(PlayerLevelBar.URL, PlayerLevelBar);
		bind(Level.URL, Level);
		bind(ExpBar.URL, ExpBar);
		bind(EquipIcon.URL, EquipIcon);
		bind(PanelUplevel.URL, PanelUplevel);
		bind(EquipSelectIcon.URL, EquipSelectIcon);
		bind(UplevelAlert.URL, UplevelAlert);
		bind(CardStep.URL, CardStep);
	}
}