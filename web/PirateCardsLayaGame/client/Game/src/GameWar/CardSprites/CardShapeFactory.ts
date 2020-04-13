var e = function() {
    function e(t, e) {
        this.game = t,
        this.container = e
    }
    return e.prototype.getHeroShape = function(e) {
        var i = this.getNewShapeContainer(t.CardBackgroundType.Hero);
        this.addShieldToHero(i),
        this.addLifeToHero(i);
        var o = new t.HeroSprite(this.game, 0, 13, e);
        return o.name = t.Consts.CardManAnimation,
        i.addChild(o),
        i
    },
    e.prototype.getDefaultShape = function() {
        return this.getNewShapeContainer(t.CardBackgroundType.Default)
    },
    e.prototype.getTrapCardShape = function() {
        var e = this.getNewShapeContainer(t.CardBackgroundType.Warrior);
        return this.addTrap(e),
        e
    },
    e.prototype.getEnemyCardShape = function(e) {
        var i = this.getNewShapeContainer(t.CardBackgroundType.Warrior);
        return this.addEnemy(e, i),
        i
    },
    e.prototype.getBossCardShape = function(e) {
        var i = this.getNewShapeContainer(t.CardBackgroundType.Warrior);
        return this.addBoss(i, e),
        i
    },
    e.prototype.getPowerUpCardShape = function(e, i) {
        var o = this.getNewShapeContainer(t.CardBackgroundType.PowerUp);
        switch (e) {
        case t.CardScoreType.Armor:
            this.addShield(o, i);
            break;
        case t.CardScoreType.Barrel:
            this.addBarrel(o);
            break;
        case t.CardScoreType.Bomb:
            this.addBomb(o);
            break;
        case t.CardScoreType.Cannon:
            this.addCannon(o);
            break;
        case t.CardScoreType.Chest:
            this.addChest(o);
            break;
        case t.CardScoreType.Gold:
            this.addGold(o, i);
            break;
        case t.CardScoreType.Health:
            this.addHealth(o, i);
            break;
        case t.CardScoreType.Horseshoe:
            this.addHorseshoe(o);
            break;
        case t.CardScoreType.Lightning:
            this.addLightning(o);
            break;
        case t.CardScoreType.Multiplier:
            this.addMultiplier(o, t.MultiplierScore.X2);
            break;
        case t.CardScoreType.Poison:
            this.addPoison(o);
            break;
        case t.CardScoreType.Skull:
            this.addSkull(o);
            break;
        case t.CardScoreType.Warrior:
        case t.CardScoreType.Trap:
        default:
            throw new Error("Invalid Type")
        }
        return this.addShadow(o),
        e != t.CardScoreType.Chest && e != t.CardScoreType.Horseshoe && e != t.CardScoreType.Multiplier && e != t.CardScoreType.Skull && this.addPowerUp(o),
        o
    },
    e.prototype.getNewShapeContainer = function(t) {
        var e = new Phaser.Group(this.game, this.container);
        return e.x = -500,
        e.y = -500,
        this.addBackground(e, t),
        e
    },
    e.prototype.addShieldToHero = function(e) {
        var i = t.ShapeFactoryHelper.getShape(this.game, t.Consts.CardWidth / 2 - 30, -t.Consts.CardHeight / 2, t.ArtConsts.Items1, t.ArtConsts.Shield);
        i.y += i.height / 3,
        i.scale.set(.9, .9),
        i.name = t.Consts.PowerUpCircle,
        e.addChild(i);
        var o = t.TextHelper.getText(this.game, i.x - 5, i.y + 2, "0", "#ffffff", t.Consts.numbersFontWeight);
        e.addChild(o),
        o.name = t.Consts.PowerUp
    },
    e.prototype.addLifeToHero = function(e) {
        var i = new t.CardLifeCircle(this.game, -t.Consts.CardWidth / 2, -t.Consts.CardHeight / 2 + 2, 1);
        e.addChild(i);
        var o = t.TextHelper.getText(this.game, i.x + i.width / 2, i.y + i.height / 2, "0", "#ffffff", t.Consts.numbersFontWeight);
        e.addChild(o),
        o.name = t.Consts.CardLife
    },
    e.prototype.addBackground = function(e, i) {
        var o = new t.CardBackground(this.game, 0, 0, i);
        o.name = t.Consts.BackgroundName,
        e.addChild(o)
    },
    e.prototype.addLifeToCard = function(e) {
        var i = new t.CardLifeCircle(this.game, -t.Consts.CardWidth / 2 - 1, -t.Consts.CardHeight / 2 + 2, 0);
        e.addChild(i);
        var o = t.TextHelper.getText(this.game, i.x + 29.6, i.y + i.height / 2, "0", "#ffffff", t.Consts.numbersFontWeight);
        e.addChild(o),
        o.name = t.Consts.CardLife
    },
    e.prototype.addBoss = function(e, i) {
        var o = new t.Boss(this.game, 0, 0, i);
        o.name = t.Consts.CardManAnimation,
        this.addLifeToCard(e),
        e.addChild(o)
    },
    e.prototype.addTrap = function(e) {
        var i = new t.Trap(this.game, 0, 0);
        i.name = t.Consts.CardManAnimation,
        e.addChild(i),
        this.addLifeToCard(e)
    },
    e.prototype.addEnemy = function(e, i) {
        var o = 9 === e ? new t.Enemy9(this.game, 0, 0) : new t.Enemy(this.game, 0, 0, e);
        this.addLifeToCard(i),
        i.addChild(o)
    },
    e.prototype.addShield = function(e, i) {
        this.addRings(e, t.ArtConsts.SmallRing, t.ArtConsts.BigRing);
        var o = i < 3 ? 0 : i < 5 ? 1 : i < 7 ? 2 : i < 9 ? 3 : 4,
        n = new t.Shield(this.game, 7, -8, o);
        n.name = t.Consts.CardManAnimation,
        e.addChild(n)
    },
    e.prototype.addRings = function(e, i, o) {
        var n = new t.SmallRing(this.game, 0, -11, i),
        s = new t.BigRing(this.game, 0, -11, o);
        e.add(n),
        e.add(s)
    },
    e.prototype.addBarrel = function(e) {
        var i = new t.Barrel(this.game, 0, -40);
        i.name = t.Consts.CardManAnimation,
        e.addChild(i)
    },
    e.prototype.addBomb = function(e) {
        this.addLifeToCard(e),
        e.addChild(new t.Bomb(this.game, 0, 0))
    },
    e.prototype.addCannon = function(e) {
        e.addChild(new t.Cannon(this.game, 0, 0))
    },
    e.prototype.addChest = function(e) {
        var i = new t.Chest(this.game, 0, 0);
        i.name = t.Consts.CardManAnimation,
        e.addChild(i)
    },
    e.prototype.addGold = function(e, i) {
        this.addRings(e, t.ArtConsts.SmallRing, t.ArtConsts.BigRing);
        var o = i > t.Consts.CoinMaxValue ? new t.CoinBag(this.game, 0, 0) : new t.Coin(this.game, 0, 0, "", !0);
        o.y = -7,
        o.name = t.Consts.CardManAnimation,
        e.addChild(o)
    },
    e.prototype.addHealth = function(e, i) {
        this.addRings(e, t.ArtConsts.SmallRing, t.ArtConsts.BigRing);
        var o = i > 5 ? 2 : 1;
        e.addChild(new t.Health(this.game, 0, -15, o))
    },
    e.prototype.addHorseshoe = function(e) {
        this.addRings(e, t.ArtConsts.SmallRing, t.ArtConsts.BigRing),
        e.addChild(t.ShapeFactoryHelper.getShakeShape(this.game, 0, 0, t.ArtConsts.Items1, t.ArtConsts.BigHorseshoe))
    },
    e.prototype.addLightning = function(e) {
        e.addChild(t.ShapeFactoryHelper.getShakeShape(this.game, 0, 0, t.ArtConsts.Items1, t.ArtConsts.Lightning))
    },
    e.prototype.addMultiplier = function(e, i) {
        this.addRings(e, t.ArtConsts.SmallRing, t.ArtConsts.BigRing),
        e.addChild(new t.Multiplier(this.game, 0, -13, i))
    },
    e.prototype.addPoison = function(e) {
        this.addRings(e, t.ArtConsts.SmallRing, t.ArtConsts.BigRing),
        e.addChild(new t.Poison(this.game, 0, 0))
    },
    e.prototype.addSkull = function(e) {
        e.addChild(new t.SkullContainer(this.game, 0, 0))
    },
    e.prototype.addPowerUp = function(e) {
        var i = new t.CardPowerUpCircle(this.game, -t.Consts.CardWidth / 2 + 33, t.Consts.CardHeight / 2 - 33, 0);
        i.name = t.Consts.PowerUpCircle,
        e.addChild(i);
        var o = t.TextHelper.getText(this.game, i.x - 2, i.y + 1, "0", "#ffffff", t.Consts.numbersFontWeight);
        e.addChild(o),
        o.name = t.Consts.PowerUp
    },
    e.prototype.addShadow = function(e) {
        e.add(new t.Shadow(this.game, 0, 2 * t.Consts.CardHeight / 6 - 4))
    },
    e
} ();
t.CardShapeFactory = e