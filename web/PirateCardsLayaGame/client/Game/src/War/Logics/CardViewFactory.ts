import WarGame from "../WarGame";
import CardViewFrontHero from "../../FGUI/Extends/GameHome/CardViewFrontHero";
import { HeroType } from "../Enums/HeroType";
import CardViewBack from "../../FGUI/Extends/GameHome/CardViewBack";
import CardViewFrontWarriowEnemy from "../../FGUI/Extends/GameHome/CardViewFrontWarriowEnemy";
import CardViewFrontWarriowBoss from "../../FGUI/Extends/GameHome/CardViewFrontWarriowBoss";
import { CardScoreType } from "../Enums/CardScoreType";
import CardViewFrontPowerUp from "../../FGUI/Extends/GameHome/CardViewFrontPowerUp";

export default class CardViewFactory
{
    game: WarGame;
    /** 卡牌容器 */
    container: fgui.GComponent;
    
    constructor(game: WarGame)
    {
        this.game =game;
        this.container = game.container;
    }

    /** 英雄 */
    getHeroShape(heroType: HeroType)
    {
        return CardViewFrontHero.createInstance();
    }

    getDefaultShape()
    {
        return CardViewBack.createInstance();
    }

    /** 桥 */
    getTrapCardShape()
    {
        return CardViewFrontWarriowEnemy.createInstance();
    }

    /** 小怪 */
    getEnemyCardShape(cardType)
    {
        return CardViewFrontWarriowEnemy.createInstance();
    }

    /** Boss */
    getBossCardShape(cardType)
    {
        return CardViewFrontWarriowBoss.createInstance();
    }

    /** 好的牌 */
    getPowerUpCardShape(cardScoreType: CardScoreType, score: number)
    {
        return CardViewFrontPowerUp.createInstance();
    }


}