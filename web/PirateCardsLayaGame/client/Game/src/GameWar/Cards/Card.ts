import CardBase from "./CardBase";
import { CardScoreType } from "../enums/CardScoreType";
import GameStatus from "./GameStatus";

export default class Card extends CardBase
{
    isOnClickInitiated = false;
    powerUpAmount = 0;
    lifeAmount = 0;
    type: CardScoreType;
    initialLife: number = 0;

    static GetDefault(shape, game) 
    {
        return new Card(shape, game)
    }
    static GetNew(shape, game, n, s) {
        var a = new Card(shape, game);
        return a.type = n,
        a.setScore(s),
        GameStatus.updateCardCounter(n),
        GameStatus.updateMovesAfterSpecialCard(n),
        a
    }
    stepUpdate() {
        var e = this.shape.getByName(t.Consts.CardManAnimation);
        if (e instanceof t.Trap) {
            var i = e.changeStatus(),
            o = GameStatus.currentHero == t.HeroType.Gun;
            this.lifeAmount = o ? 0 : i ? this.powerUpAmount: 0,
            this.setHealthText()
        }
        this.type == CardScoreType.Poison && this.setPowerUp(this.powerUpAmount + 1),
        this.type == CardScoreType.Bomb && this.setPowerUp(this.powerUpAmount - 1),
        this.type == CardScoreType.Barrel && this.powerUpAmount > 2 && this.setPowerUp(this.powerUpAmount - 1)
    }
    getScore() {
        return this.type == CardScoreType.Trap ? this.lifeAmount: this.lifeAmount + this.powerUpAmount
    }
    getLife() {
        return this.lifeAmount
    }
    getPowerUp() {
        return this.powerUpAmount
    }
    multiplyScore(t) {
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
    setScore(e) {
        switch (this.type) {
        case CardScoreType.Warrior:
            this.initialLife = e,
            this.setLife(e);
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
            this.setPowerUp(e);
            break;
        case CardScoreType.Bomb:
            this.setLife(e),
            this.setPowerUp(10);
            break;
        case CardScoreType.Trap:
            this.setPowerUp(e),
            this.setLife(e);
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
    setLife(t) {
        this.lifeAmount = t,
        this.setHealthText()
    }
    setHealthText() {
        var t = this.getCardLifeText();
        t && t && t.setText(this.lifeAmount.toString())
    }
    setPowerUpText() {
        var t = this.getPowerUpText();
        t && t && t.setText(this.powerUpAmount.toString())
    }
    getPowerUpText() {
        return this.shape.getByName(t.Consts.PowerUp)
    }
    setOnClickEvent(e, i, o) {
        if (!this.isOnClickInitiated) for (var n = 0; n < this.shape.children.length; n++) {
            var s = this.shape.children[n];
            s.name == t.Consts.BackgroundName && (s.inputEnabled = !0, s.events.onInputDown.add(e, o, 1, this), s.events.onInputUp.add(i, o, 1, this), this.isOnClickInitiated = !0)
        }
    }
    isNegative() {
        switch (this.type) {
        case CardScoreType.Trap:
        case CardScoreType.Warrior:
        case CardScoreType.Bomb:
        case CardScoreType.Poison:
            return ! 0;
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
            return ! 1
        }
    }
    isBoss() {
        return this.type == CardScoreType.Warrior && this.shape.getByName(t.Consts.CardManAnimation) instanceof t.Boss
    }
    getGoldValue() {
        return this.initialLife
    }
    i
} (t.CardBase);
t.Card = e