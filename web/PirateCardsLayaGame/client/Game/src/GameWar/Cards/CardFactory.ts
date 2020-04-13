export default class CardFactory
{
    
}
    
    var e = function() {
    function e(game, container) {
        this.healthBasket = new t.Basket,
        this.armorBasket = new t.Basket,
        this.cannonBasket = new t.Basket,
        this.enemyBasket = new t.Basket,
        this.goldBasket = new t.Basket,
        this.chestBasket = t.Basket.AfterChestBasket(),
        this.movesAfterLastSpecialCard = 0,
        this.game = game,
        this.container = container,
        this.cardShapeFactory = new t.CardShapeFactory(game, container)
    }
    return e.prototype.getDefault = function() {
        var e = this.cardShapeFactory.getDefaultShape();
        return t.Card.GetDefault(e, this.game)
    },
    e.prototype.getHero = function() {
        var e = this.cardShapeFactory.getHeroShape(t.GameStatus.currentHero),
        i = new t.Hero(e, this.game);
        return i.setShopItemsStatus(),
        i.totalLife = 10,
        i.currentLife = 10,
        i.armor = 0,
        t.GameStatus.isHorseshoe && (i.totalLife += 1, i.currentLife += 1),
        i.setStatus(),
        this.movesAfterLastSpecialCard++,
        i
    },
    e.prototype.getCard = function(e, i, o) {
        return void 0 === e && (e = t.CardGenerationType.Random),
        t.GameStatus.isNeedCreateBoss && e == t.CardGenerationType.Random ? (t.GameStatus.isNeedCreateBoss = !1, this.getBoss()) : t.GameStatus.isNeedCreateChest && e == t.CardGenerationType.Random ? (t.GameStatus.isNeedCreateChest = !1, this.getChestCard()) : this.generateCardType(e, o) == t.CardBackgroundType.Warrior ? this.getEnemy(i) : this.getPowerUp(e, i, o)
    },
    e.prototype.getHealth = function(e) {
        var i = t.CardScoreType.Health;
        return t.Card.GetNew(this.cardShapeFactory.getPowerUpCardShape(i, e), this.game, i, e)
    },
    e.prototype.generateCardType = function(i, o) {
        if (i == t.CardGenerationType.AfterBarrel && t.GameStatus.currentHero == t.HeroType.Key) return t.CardBackgroundType.PowerUp;
        if (i == t.CardGenerationType.AfterChest || i == t.CardGenerationType.Positive) return t.CardBackgroundType.PowerUp;
        if (i == t.CardGenerationType.AfterBarrel && Math.random() < .75) return t.CardBackgroundType.PowerUp;
        if (t.LogInfo.reset(), t.GameStatus.cardCounter > 2) {
            var n = Math.random();
            if (t.LogInfo.ChanceOfNegativeFromBox = n, n < .8) return t.CardBackgroundType.Warrior
        }
        if (t.GameStatus.cardCounter < -3) {
            var s = Math.random();
            if (t.LogInfo.ChanceOfPositiveFromBox = s, s < .8) return t.CardBackgroundType.PowerUp
        }
        return e.isShouldBePositiveCard(o) ? t.CardBackgroundType.PowerUp: t.CardBackgroundType.Warrior
    },
    e.isShouldBePositiveCard = function(e) {
        var i = e.filter(t.CardScoreTypeHelper.isCardScoreTypePositive).length,
        o = e.filter(t.CardScoreTypeHelper.isCardScoreTypeNegative).length;
        if (!t.GameStatus.isFourXFour && Math.random() < .85 && i <= 1) return Math.random() < .8;
        if (t.GameStatus.isFourXFour && Math.random() < .85 && i <= 2) return Math.random() < .8;
        var n = Math.min(.35, .4 - .01 * t.GameStatus.levelStep),
        s = o * (t.GameStatus.isFourXFour ? .02 : .03),
        a = Phaser.Math.clamp(n + s, .2, .75),
        r = Math.random();
        return t.LogInfo.PositiveCardProbability = a,
        t.LogInfo.CurrentPositiveCardProbability = r,
        r < a
    },
    e.prototype.getPowerUp = function(e, i, o) {
        var n = this.generatePowerUpType(e, o);
        return i = this.generateCardScore(n, i),
        t.Card.GetNew(this.cardShapeFactory.getPowerUpCardShape(n, i), this.game, n, i)
    },
    e.prototype.generateCardScore = function(e, i) {
        if (void 0 === i && (i = 0), 0 == i) switch (e) {
        case t.CardScoreType.Armor:
            this.armorBasket.fillBasketWithStep(1, 4, 3, 10),
            i = Number(this.armorBasket.getFromBasket());
            break;
        case t.CardScoreType.Health:
            this.healthBasket.fillBasketWithStep(1, 4, 3, 10),
            i = Number(this.healthBasket.getFromBasket());
            break;
        case t.CardScoreType.Cannon:
            this.cannonBasket.fillBasketWithStep(1, 1, 3, 10),
            i = Number(this.cannonBasket.getFromBasket()),
            t.GameStatus.currentHero == t.HeroType.Bomb && (i += 2);
            break;
        case t.CardScoreType.Barrel:
            i = this.generateScore(2, 4, 3, 10);
            break;
        case t.CardScoreType.Poison:
            var o = 1 + Math.ceil(t.GameStatus.gameLevel / 2);
            i = o > 10 ? 10 : o;
            break;
        case t.CardScoreType.Lightning:
            i = this.generateScore(1, 4, 3, 10);
            break;
        case t.CardScoreType.Gold:
            this.goldBasket.fillBasketWithStep(1, 4, 2, 1e3),
            i = Number(this.goldBasket.getFromBasket());
            break;
        default:
            i = this.game.rnd.integerInRange(1, 5)
        }
        return e === t.CardScoreType.Bomb && (i = this.game.rnd.integerInRange(1, 4 + Math.ceil(t.GameStatus.gameLevel / 2))) > 10 && (i = 10),
        e === t.CardScoreType.Multiplier && (i = 2),
        i
    },
    e.prototype.generateScore = function(e, i, o, n) {
        var s = i + Math.ceil(t.GameStatus.gameLevel / o),
        a = this.game.rnd.integerInRange(e, s);
        return Phaser.Math.clamp(a, e, n)
    },
    e.prototype.getEnemy = function(e) {
        var i = this.generateEnemyPower(e);
        return t.Consts.IsDev && this.enemyBasket.print("Enemy"),
        0 == e && (e = i, t.GameStatus.gameLevel > 10 && (e += Math.floor((t.GameStatus.gameLevel - 10) / 2))),
        0 == i ? this.getTrap(e + 1) : this.getWarrior(i, e)
    },
    e.prototype.getTrap = function(e) {
        return t.Card.GetNew(this.cardShapeFactory.getTrapCardShape(), this.game, t.CardScoreType.Trap, e)
    },
    e.prototype.getWarrior = function(e, i) {
        return t.Card.GetNew(this.cardShapeFactory.getEnemyCardShape(e), this.game, t.CardScoreType.Warrior, i)
    },
    e.getTrapScore = function() {
        return t.GameStatus.currentHero == t.HeroType.Gun ? 0 : 1 + t.RandomHelper.getRandomIntInclusive(0, Math.ceil(t.GameStatus.gameLevel / 4))
    },
    e.prototype.getBoss = function() {
        var i = this.cardShapeFactory.getBossCardShape(e.generateBossPower()),
        o = 8 + t.GameStatus.gameLevel;
        return t.Card.GetNew(i, this.game, t.CardScoreType.Warrior, o)
    },
    e.prototype.getChestCard = function() {
        var e = t.CardScoreType.Chest,
        i = this.cardShapeFactory.getPowerUpCardShape(e, 0);
        return t.Card.GetNew(i, this.game, e, 0)
    },
    e.prototype.getCoinCard = function(e) {
        var i = t.CardScoreType.Gold;
        0 === e && (e = this.generateCardScore(i));
        var o = this.cardShapeFactory.getPowerUpCardShape(i, e);
        return t.Card.GetNew(o, this.game, i, e)
    },
    e.generateBossPower = function() {
        return t.RandomHelper.getRandomIntInclusive(1, 3)
    },
    e.prototype.generatePowerUpType = function(i, o) {
        return i == t.CardGenerationType.AfterChest ? this.generatePowerUpTypeFromChest() : i == t.CardGenerationType.AfterBarrel ? e.generatePowerUpTypeFromBarrel(o) : e.generatePowerUpCardScoreType(o)
    },
    e.prototype.generatePowerUpTypeFromChest = function() {
        return Number(this.chestBasket.getFromBasket())
    },
    e.generatePowerUpTypeFromBarrel = function(i) {
        return e.generateFromBasket(i, t.CardScoreTypeHelper.getRandomPowerUpFromBarrel, this.maxPowerUpNumber())
    },
    e.generatePowerUpCardScoreType = function(i) {
        return e.generateFromBasket(i, t.CardScoreTypeHelper.getRandomPowerUp, this.maxPowerUpNumber())
    },
    e.generateFromBasket = function(t, e, i) {
        for (var o, n = 0; n < 10 && (o = e(), !(t.filter(function(t) {
            return t === o
        }).length < i)); n++);
        return o
    },
    e.maxPowerUpNumber = function() {
        return t.RandomHelper.getRandomIntInclusive(1, 2)
    },
    e.prototype.generateEnemyPower = function(t) {
        if (this.enemyBasket.fillBasketWithStep(0, 4, 2, 9), 0 == t) return Number(this.enemyBasket.getFromBasket());
        var e = Phaser.Math.clamp(t, 0, 9);
        return this.enemyBasket.removeFromBasket(e.toString()),
        e
    },
    e
} ();
t.CardFactory = e