var e = function(e) {
    function i(t, i) {
        return e.call(this, t, i) || this
    }
    return __extends(i, e),
    i.prototype.fight = function(e) {
        var i = new t.FightResult(!0, !1, !0);
        switch (e.type) {
        case t.CardScoreType.Trap:
            e.getLife() > 0 && t.GameStatus.currentHero != t.HeroType.Gun && (t.SoundController.instance.playSound(t.SoundConsts.Trap), this.currentLife > e.getScore() ? (this.currentLife -= e.getScore(), t.GameStatus.addGold(e.getScore()), i.isHeroAlive = !0) : i.isHeroAlive = !1);
            break;
        case t.CardScoreType.Warrior:
            t.SoundController.instance.playSound(Phaser.ArrayUtils.getRandomItem([t.SoundConsts.Hit1, t.SoundConsts.Hit2])),
            i.isHeroAlive = this.fightWithEnemy(e),
            i.isHeroAlive && e.isBoss() && (i.isNeedIncreaseLifeByOneAfterBoss = !0);
            break;
        case t.CardScoreType.Armor:
            e.getScore(),
            t.SoundController.instance.playSound(t.SoundConsts.ShieldWood),
            t.GameStatus.currentHero == t.HeroType.Gun ? this.needSmashLightning(e.getScore()) : this.armor < e.getScore() ? (this.armor = e.getScore(), this.setArmorFrame(e)) : t.GameStatus.currentHero == t.HeroType.Base && this.armor++;
            break;
        case t.CardScoreType.Gold:
            e.shape.getByName(t.Consts.CardManAnimation) instanceof t.Coin ? t.SoundController.instance.playSound(t.SoundConsts.Coin) : t.SoundController.instance.playSound(t.SoundConsts.CoinsBag),
            t.GameStatus.addGold(e.getScore());
            break;
        case t.CardScoreType.Health:
            t.SoundController.instance.playSound(Phaser.ArrayUtils.getRandomItem([t.SoundConsts.Health1, t.SoundConsts.Health2])),
            this.currentLife += e.getScore(),
            this.currentLife > this.totalLife && (this.currentLife = this.totalLife);
            break;
        case t.CardScoreType.Cannon:
            this.needShoot = !0,
            this.shootScore = e.getScore();
            break;
        case t.CardScoreType.Chest:
            i.isChest = !0;
            break;
        case t.CardScoreType.Poison:
            if (t.SoundController.instance.playSound(t.SoundConsts.Poison), t.GameStatus.isLuck) return i.isHeroAlive = !0,
            this.useLuck(),
            i;
            if (e.getScore() >= this.currentLife) return i.isHeroAlive = !1,
            i;
            this.currentLife -= e.getScore();
            break;
        case t.CardScoreType.Horseshoe:
            i.isNeedIncreaseLifeByOne = !0;
            break;
        case t.CardScoreType.Bomb:
            break;
        case t.CardScoreType.Lightning:
            this.needSmashLightning(e.getScore());
            break;
        case t.CardScoreType.Multiplier:
            this.needShootMultiplier = !0,
            this.multiplierScore = e.getScore();
            break;
        case t.CardScoreType.Skull:
            this.needShootSkull = !0;
            break;
        case t.CardScoreType.Barrel:
            t.SoundController.instance.playSound(Phaser.ArrayUtils.getRandomItem([t.SoundConsts.Barrel1, t.SoundConsts.Barrel2])),
            i.isMove = !1
        }
        return this.setStatus(),
        i
    },
    i.prototype.needSmashLightning = function(t) {
        this.needRunLightning = !0,
        this.lightningScore = t
    },
    i.prototype.setStatus = function() {
        this.setLife(),
        this.setArmor()
    },
    i.prototype.stepUpdate = function() {},
    i.prototype.getScore = function() {
        return this.currentLife + this.armor
    },
    i.prototype.reduceScoreInNSeconds = function(t, e) {
        if (t <= this.armor) this.armor -= t;
        else {
            var i = t - this.armor;
            this.armor = 0,
            this.currentLife -= i
        }
        setTimeout(this.setStatus.bind(this), e)
    },
    i.prototype.increaseScoreInNSeconds = function(t, e) {
        this.totalLife - this.currentLife > t ? this.currentLife = this.totalLife: this.currentLife += t,
        setTimeout(this.setStatus.bind(this), e)
    },
    i.prototype.setShopItemsStatus = function() {
        var e = 1;
        this.destroySpriteByName(t.ArtConsts.SmallHeart),
        this.destroySpriteByName(t.ArtConsts.SmallHorseshoe),
        this.destroySpriteByName(t.ArtConsts.SmallLuck),
        this.destroySpriteByName(t.ArtConsts.SmallKey),
        t.GameStatus.isHeart && this.addSpriteByName(t.ArtConsts.SmallHeart, e++, 0, 1),
        t.GameStatus.isHorseshoe,
        t.GameStatus.isLuck && this.addSpriteByName(t.ArtConsts.SmallLuck, e++, 30),
        t.GameStatus.isKey && this.addSpriteByName(t.ArtConsts.SmallKey, e, 30)
    },
    i.prototype.addSpriteByName = function(e, i, o, n) {
        void 0 === o && (o = 0),
        void 0 === n && (n = 1);
        var s = 38 * i - .5 * t.Consts.CardWidth,
        a = t.ShapeFactoryHelper.getShape(this.game, s, 80, t.ArtConsts.Items1, e, 0);
        a.name = e,
        a.angle = o,
        a.scale.set(n),
        this.shape.add(a)
    },
    i.prototype.destroySpriteByName = function(t) {
        var e = this.shape.getByName(t);
        e && e.destroy()
    },
    i.prototype.setLife = function() {
        this.getCardLifeText().setText(this.currentLife + "/" + this.totalLife)
    },
    i.prototype.setArmor = function() {
        var e = this.shape.getByName(t.Consts.PowerUpCircle);
        e.visible && 0 == this.armor ? this.hideSprite(e) : e.visible = !0;
        var i = this.shape.getByName(t.Consts.PowerUp);
        i.setText(this.armor.toString()),
        0 == this.armor && i.setText("")
    },
    i.prototype.hideSprite = function(t) {
        this.game.add.tween(t).to({
            width: 0,
            height: 0,
            angle: 360,
            alpha: 0
        },
        700, null, !0).onComplete.add(function() {
            t.visible = !1,
            t.rotation = 0,
            t.alpha = 1
        })
    },
    i.prototype.setArmorFrame = function(e) {
        var i = e.shape.getByName(t.Consts.CardManAnimation),
        o = this.shape.getByName(t.Consts.PowerUpCircle);
        o.frameName = i.frameName;
        var n = this.game.add.tween(o.scale).to({
            x: 0,
            y: 0
        },
        100).to({
            x: 1.5,
            y: 1.5
        },
        250).to({
            x: 1,
            y: 1
        },
        100),
        s = this.shape.getByName(t.Consts.PowerUp);
        s.scale.set(0);
        var a = this.game.add.tween(s.scale).to({
            x: 1,
            y: 1
        },
        100);
        n.chain(a),
        n.start()
    },
    i.prototype.fightWithEnemy = function(e) {
        if (e.getScore() >= this.armor + this.currentLife) return ! 1;
        if (e.getScore() <= this.armor) e.getScore() < this.armor && t.GameStatus.currentHero == t.HeroType.Base ? this.armor -= 1 : this.armor -= e.getScore();
        else if (this.armor > 0) {
            var i = e.getScore() - this.armor;
            this.armor = 0,
            this.currentLife -= i
        } else this.currentLife -= e.getScore();
        return t.GameStatus.addGold(e.getScore()),
        !0
    },
    i.prototype.useHeart = function() {
        var e = this.shape.getByName(t.ArtConsts.SmallHeart);
        this.shape.bringToTop(e);
        t.SoundController.instance.playSound(t.SoundConsts.Revive),
        e.animations.add("explode", Phaser.Animation.generateFrameNames(t.ArtConsts.SmallHeart, 0, 16, "", 4), 30, !1, !1),
        this.game.add.tween(e.scale).to({
            x: 1,
            y: 1
        },
        100, null, !0).onComplete.add(function() {
            var t = e.animations.play("explode", 60, !1, !1);
            t.onComplete.add(this.setStatus, this),
            t.onComplete.add(this.setShopItemsStatus, this)
        },
        this),
        this.currentLife = this.totalLife
    },
    i.prototype.isNegative = function() {
        return ! 1
    },
    i.prototype.increaseLifeByOneTween = function() {
        var t = this.getScaleTween(this.getCardLifeText(), this.increaseLifeByOne);
        return t.onStart.add(this.playHorseshoe, this),
        t
    },
    i.prototype.playHorseshoe = function() {
        t.SoundController.instance.playSound(t.SoundConsts.Horseshoe)
    },
    i.prototype.increaseLifeByOne = function() {
        this.currentLife++,
        this.totalLife++,
        this.setLife()
    },
    i.prototype.useLuck = function() {
        t.GameStatus.isLuck = !1;
        var e = this.shape.getByName(t.ArtConsts.SmallLuck),
        i = this.game.add.tween(e).to({
            width: 1.5 * e.width,
            height: 1.5 * e.height
        },
        250).to({
            width: 0,
            height: 0,
            alpha: 0
        },
        150);
        i.onComplete.add(this.setShopItemsStatus, this),
        i.start()
    },
    i.prototype.getGoldValue = function() {
        return 0
    },
    i
} (t.CardBase);
t.Hero = e