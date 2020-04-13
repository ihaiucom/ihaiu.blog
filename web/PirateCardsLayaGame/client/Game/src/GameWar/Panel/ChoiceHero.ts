var e = function(e) {
    function i(i, o, n) {
        var s = e.call(this, i, o, n) || this;
        return s.coin = new t.Coin(s.game, -30, -s.height / 3, "0"),
        s.addChild(s.coin),
        s.addLock(),
        s.heroType = t.HeroType.Base,
        s.addHero(s.heroType),
        s.iGroup = s.game.add.group(),
        s.addChild(s.iGroup),
        s.showHero(),
        s
    }
    return __extends(i, e),
    i.prototype.addLock = function() {
        this.lock = new t.Lock(this.game, 0, 0),
        this.lock.x = .5 * this.width - .5 * this.lock.width,
        this.lock.y = .5 * this.height - .5 * this.lock.height,
        this.addChild(this.lock)
    },
    i.prototype.hideCoin = function() {
        this.coin.visible = !1
    },
    i.prototype.showCoin = function(t) {
        this.coin.visible = !0,
        this.coin.setText(t.toString())
    },
    i.prototype.hideLock = function() {
        this.lock.isTweenRunning() || (this.lock.visible = !1)
    },
    i.prototype.showLock = function() {
        this.lock.isTweenRunning() || (this.lock.visible = !0)
    },
    i.prototype.startLockAnimation = function() {
        this.lock.isTweenRunning() || this.lock.unlock(this.endLockAnimation.bind(this))
    },
    i.prototype.endLockAnimation = function() {
        this.lock.destroy(),
        this.addLock(),
        this.hideLock()
    },
    i.prototype.setHeroType = function(t) {
        this.showHero(),
        this.heroType != t && (this.heroType = t, this.hero.destroy(), this.addHero(t))
    },
    i.prototype.setHeroTypeCallback = function(t, e, i) {
        this.setHeroType(i)
    },
    i.prototype.setITypeCallback = function(t, e, i) {
        this.setIType(i)
    },
    i.prototype.setIType = function(e) {
        if (this.showIGroup(), this.iHeroType != e) switch (this.iHeroType = e, this.iGroup.removeAll(), e) {
        case t.HeroType.Base:
            this.setIForBase();
            break;
        case t.HeroType.Bomb:
            this.setIForBomb();
            break;
        case t.HeroType.Key:
            this.setIForKey();
            break;
        case t.HeroType.Gun:
            this.setIForGun()
        }
    },
    i.prototype.setIForBase = function() {
        var e = new t.Shield(this.game, -80, 0, 3);
        e.stopAnimation();
        var i = t.TextHelper.getText(this.game, 30, -30, "↑", "#ffffff", 45);
        e.addChild(i);
        var o = t.TextHelper.getText(this.game, -30, 0, "+", "#ffffff", 45),
        n = new t.Shield(this.game, 25, 0, 0);
        n.stopAnimation();
        var s = t.TextHelper.getText(this.game, 30, -30, "↓", "#ffffff", 45);
        n.addChild(s);
        var a = t.TextHelper.getText(this.game, 100, 0, "= +1", "#ffffff", 45);
        this.iGroup.add(e),
        this.iGroup.add(o),
        this.iGroup.add(n),
        this.iGroup.add(a)
    },
    i.prototype.setIForBomb = function() {
        var e = new t.Cannon(this.game, -30, -70);
        e.stopAnimation(),
        e.scale.set(.8);
        var i = t.TextHelper.getText(this.game, 30, e.y, "+2", "#ffffff", 45);
        this.iGroup.add(e),
        this.iGroup.add(i);
        var o = new t.Boom(this.game, -90, 50);
        o.changeFrame(2),
        o.scale.set(.4);
        var n = t.TextHelper.getText(this.game, -50, 50, "+", "#ffffff", 45),
        s = new t.HeroSprite(this.game, 0, 30, t.HeroType.Bomb, 0);
        s.stopAnimation(),
        s.scale.set(.6);
        var a = t.TextHelper.getText(this.game, 50, 50, "=", "#ffffff", 45),
        r = t.ShapeFactoryHelper.getShape(this.game, 100, 50, t.ArtConsts.Items1, t.ArtConsts.Smile);
        this.iGroup.add(o),
        this.iGroup.add(n),
        this.iGroup.add(s),
        this.iGroup.add(a),
        this.iGroup.add(r)
    },
    i.prototype.setIForKey = function() {
        var e = new t.Barrel(this.game, -60, -90);
        e.stopAnimation(),
        e.scale.set(.8);
        var i = t.TextHelper.getText(this.game, 10, -70, "→", "#ffffff", 45),
        o = t.ShapeFactoryHelper.getShape(this.game, 70, -70, t.ArtConsts.Items1, t.ArtConsts.Smile);
        this.iGroup.add(e),
        this.iGroup.add(i),
        this.iGroup.add(o);
        var n = new t.Chest(this.game, -90, 70);
        n.stopAnimation(),
        n.scale.set(.6);
        var s = t.TextHelper.getText(this.game, -35, 70, "+", "#ffffff", 45),
        a = t.ShapeFactoryHelper.getShape(this.game, 0, 70, t.ArtConsts.Items1, t.ArtConsts.Key4);
        a.scale.set(.8);
        var r = t.TextHelper.getText(this.game, 35, 70, "=", "#ffffff", 45),
        h = new t.Chest(this.game, 90, 70);
        h.stopAnimation(),
        h.changeToOpen(),
        h.scale.set(.6),
        this.iGroup.add(n),
        this.iGroup.add(s),
        this.iGroup.add(a),
        this.iGroup.add(r),
        this.iGroup.add(h)
    },
    i.prototype.setIForGun = function() {
        var e = new t.Shield(this.game, -60, -70, 2);
        e.stopAnimation();
        var i = t.TextHelper.getText(this.game, 10, -70, "→", "#ffffff", 45),
        o = t.ShapeFactoryHelper.getShape(this.game, 80, -70, t.ArtConsts.Items1, t.ArtConsts.Lightning);
        this.iGroup.add(e),
        this.iGroup.add(i),
        this.iGroup.add(o);
        var n = new t.Trap(this.game, -90, 70);
        n.scale.set(.5);
        var s = t.TextHelper.getText(this.game, -40, 100, "+", "#ffffff", 45),
        a = new t.HeroSprite(this.game, 15, 40, t.HeroType.Gun, 0);
        a.stopAnimation(),
        a.scale.set(.7);
        var r = t.TextHelper.getText(this.game, 60, 100, "=", "#ffffff", 45),
        h = t.ShapeFactoryHelper.getShape(this.game, 105, 90, t.ArtConsts.Items1, t.ArtConsts.Smile);
        this.iGroup.add(n),
        this.iGroup.add(s),
        this.iGroup.add(a),
        this.iGroup.add(r),
        this.iGroup.add(h)
    },
    i.prototype.addHero = function(e) {
        this.hero = new t.HeroSprite(this.game, 0, this.height / 15, e, 0),
        this.addChild(this.hero)
    },
    i.prototype.showHero = function() {
        this.changeFrame(0),
        this.iGroup.visible = !1,
        this.hero.visible = !0,
        this.coin.visible = !0,
        this.lock.visible = !0
    },
    i.prototype.showIGroup = function() {
        this.changeFrame(1),
        this.iGroup.visible = !0,
        this.hero.visible = !1,
        this.coin.visible = !1,
        this.lock.visible = !1
    },
    i
} (t.ChoiceBackground);
t.ChoiceHero = e