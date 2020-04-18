import CardView from "../../FGUI/Extends/GameHome/CardView";
import { CardScoreType } from "../Enums/CardScoreType";
import GameStatus from "../Datas/GameStatus";
import WarGame from "../WarGame";
import Consts from "../Enums/Consts";
import { HeroType } from "../Enums/HeroType";
import Point from "../Datas/Point";
import TweenUtil from "../Utils/TweenUtil";
import TweenHelper from "../Utils/TweenHelper";
import SoundController from "./SoundController";
import SoundConsts from "../Enums/SoundConsts";
import TweenContainer from "../Utils/TweenContainer";
import CardViewFrontWarriowBoss from "../../FGUI/Extends/GameHome/CardViewFrontWarriowBoss";
import CardViewBack from "../../FGUI/Extends/GameHome/CardViewBack";
import CardConfig from "../../Config/ConfigExtends/CardConfig";
import { CardBackgroundType } from "../Enums/CardBackgroundType";
import Game from "../../Game";

export default class Card
{
    
    
    static GetDefault(game) 
    {
        var card = <Card> Pool.createByClass(Card);
        card.game = game;
        card.type = CardScoreType.None;
        card.SetEmpty();
        return card;
    }
    static GetNew(game, cardScoreType: CardScoreType, level: number, score: number) {
        
        var config: CardConfig = Game.config.card.getTypeLevelConfig(cardScoreType, level);

        var card = <Card> Pool.createByClass(Card);
        card.game = game;
        card.type = cardScoreType;
        card.SetConfig(config);
        card.setScore(score),
        GameStatus.updateCardCounter(cardScoreType),
        GameStatus.updateMovesAfterSpecialCard(cardScoreType);
        return card;
    }



    game: WarGame;
    config: CardConfig;
    type: CardScoreType = CardScoreType.None;
    view: CardView;
    
    isOnClickInitiated = false;
    powerUpAmount = 0;

    lifeAmount = 0;
    // 初始血量
    initialLife: number = 0;

    // 当前血量
    currentLife: number = 0;

    // 是否是打开状态
    isOpen: boolean = false;
    

    
    constructor()
    {
        this.view = CardView.PoolGet();
    }

    SetEmpty()
    {
        this.SetConfig(null);
    }

    SetConfig(config: CardConfig)
    {
        this.config = config;
        this.view.game = this.game;
        this.view.SetConfig(config);
        this.view.SetCard(this);
    }

    get isEmpty()
    {
        return this.type == CardScoreType.None;
    }

    get isHero(): boolean
    {
        return this.type == CardScoreType.Hero;
    }

    get isBoss(): boolean
    {
        return this.type == CardScoreType.Boss;
    }

    get isTrap(): boolean
    {
        return this.type == CardScoreType.Trap;
    }

    get level(): number
    {
        return this.config.level;
    }


    stepUpdate() 
    {
        if (this.isTrap) 
        {
            this.changeStatus();
            var isGrun = GameStatus.currentHero == HeroType.Gun;
            this.lifeAmount = o ? 0 : i ? this.powerUpAmount: 0,
            this.setHealthText()
        }
        this.type == CardScoreType.Poison && this.setPowerUp(this.powerUpAmount + 1),
        this.type == CardScoreType.Bomb && this.setPowerUp(this.powerUpAmount - 1),
        this.type == CardScoreType.Barrel && this.powerUpAmount > 2 && this.setPowerUp(this.powerUpAmount - 1)
    }

    changeStatus()
    {
        if(this.isOpen)
        {
            this.view.setClose()
            this.isOpen = false;
        }
        else
        {
            this.view.setClose()
            this.isOpen = true;
        }
    }

    
    getScore() {
        return this.type == CardScoreType.Trap ? this.lifeAmount: this.lifeAmount + this.powerUpAmount
    }
    // 血量
    getLife() {
        return this.lifeAmount
    }
    getPowerUp() {
        return this.powerUpAmount
    }
    multiplyScore(t) 
    {
        return this.lifeAmount > 0 ? this.getScaleTween(this.getCardLifeText(), this.increaseLife, t) : this.powerUpAmount > 0 ? this.getScaleTween(this.getPowerUpText(), this.increasePowerUp, t) : null
    }
    increaseLife(e, i, o) {
        this.setLife(this.lifeAmount * o),
        this.type === CardScoreType.Trap && this.setPowerUp(this.powerUpAmount * o)
    }
    increasePowerUp(t, e, i) {
        this.setPowerUp(this.powerUpAmount * i)
    }
    reduceScoreInNSeconds(t, e) {
        this.powerUpAmount > 0 && (this.powerUpAmount = this.powerUpAmount - t, setTimeout(this.setPowerUpText.bind(this), e)),
        this.lifeAmount > 0 && (this.lifeAmount = this.lifeAmount - t, setTimeout(this.setHealthText.bind(this), e))
    }
    increaseScoreInNSeconds(t, e) {
        this.powerUpAmount > 0 && (this.powerUpAmount = this.powerUpAmount + t, setTimeout(this.increasePowerUpTween.bind(this), e)),
        this.lifeAmount > 0 && (this.lifeAmount = this.lifeAmount + t, setTimeout(this.increaseLifeTween.bind(this), e))
    }
    increasePowerUpTween() {
        this.getScaleTween(this.getPowerUpText(), this.setPowerUpText, this.powerUpAmount).start()
    }
    increaseLifeTween() {
        this.getScaleTween(this.getCardLifeText(), this.setHealthText, this.lifeAmount).start()
    }
    setScore(score: number) 
    {
        switch (this.type) 
        {
        case CardScoreType.Boss:
        case CardScoreType.Enemy:
            this.initialLife = score,
            this.setLife(score);
            break;
        case CardScoreType.Gold:
        case CardScoreType.Health:
        case CardScoreType.Armor:
        case CardScoreType.Poison:
        case CardScoreType.Cannon:
        case CardScoreType.Lightning:
        case CardScoreType.Multiplier:
        case CardScoreType.Skull:
        case CardScoreType.Barrel:
            this.setPowerUp(score);
            break;
        case CardScoreType.Bomb:
            this.setLife(score),
            this.setPowerUp(10);
            break;
        case CardScoreType.Trap:
            this.setPowerUp(score),
            this.setLife(score);
            break;
        case CardScoreType.Chest:
            break;
        case CardScoreType.Horseshoe:
            this.setPowerUp(1)
        }
    }
    setPowerUp(t) {
        this.powerUpAmount = t,
        this.setPowerUpText()
    }

    setLife(val?: number) 
    {
        if(val != undefined)
        {
            this.lifeAmount = val;
        }
        this.setHealthText()
    }

    setHealthText() 
    {
        this.view.setHealthText();
    }

    setPowerUpText() 
    {
        this.view.setPowerUpText();
    }

    isNegative() 
    {
        switch (this.type) 
        {
            case CardScoreType.Trap:
            case CardScoreType.Bomb:
            case CardScoreType.Poison:
                return true;
            case CardScoreType.Health:
            case CardScoreType.Gold:
            case CardScoreType.Armor:
            case CardScoreType.Cannon:
            case CardScoreType.Chest:
            case CardScoreType.Barrel:
            case CardScoreType.Horseshoe:
            case CardScoreType.Lightning:
            case CardScoreType.Multiplier:
            case CardScoreType.Skull:
            case CardScoreType.Hero:
                return false;
        }
    }

    getGoldValue() 
    {
        return this.initialLife
    }

    moveTo(point: Point, time: number): Laya.Tween
    {
        this.game.container.addChild(this.view);
        return TweenUtil.to(this.view, point, time);
    }

    setCoordinate(point: Point)
    {
        this.game.container.addChild(this.view);
        this.view.setXY(point.x, point.y);
    }

    open(): Laya.Tween
    {
        return null;
    }

    endTurnAnimationStart()
    {
        this.view.setScale(0, Consts.FlipZoom);
    }

    startTurnAnimation(endCallback: () => void, endCaller:any): TweenContainer
    { 
        var i = this.removeShapeFromStage;
        var tweenContainer = TweenHelper.turnAnimationStart(null, this.view);
        tweenContainer.onStart.add(this.playCardSoundInSeconds, this);
        tweenContainer.onComplete.add(this.removeShapeFromStage, this);
        tweenContainer.onComplete.add(endCallback, endCaller);
        return tweenContainer;
    }

    playCardSoundInSeconds()
    {
        setTimeout(this.playCardSound.bind(this), 50)
    }

    playCardSound()
    {
        SoundController.instance.playSound(SoundConsts.Card);
    }

    

    endTurnAnimationEnd()
    {
        if(this.isBoss)
        {
            SoundController.instance.playSound(SoundConsts.BossAppearance);
        }
        this.view.scaleX = 0.1;
        
        TweenHelper.turnAnimationEnd(null, this.view).restart();
    }

    removeShapeFromStage()
    {
        this.view.removeFromParent();
    }

    getScaleTween(view, e) 
    {
        for (var i = [], o = 2; o < arguments.length; o++) i[o - 2] = arguments[o];
        var n, s = this.game.add.tween(view.scale).to({
            x: 2.5,
            y: 2.5
        },
        200),
        a = this.game.add.tween(view.scale).to({
            x: 1,
            y: 1
        },
        200);
        return (n = s.onComplete).add.apply(n, [e, this, null].concat(i)),
        s.chain(a),
        s
    }
}