var e = function(e) {
    function o(i, o, n) {
        var s = e.call(this, i, o, n) || this;
        return s.sprites = [],
        s.animationTime = 500,
        s.anchor.set(.5, .5),
        s.sprite = new Phaser.Sprite(i, 0, 28, t.ArtConsts.Items1, t.ArtConsts.Barrel + t.FrameHelper.getFrame(0)),
        s.sprite.anchor.set(.5, .5),
        s.addChild(s.sprite),
        s
    }
    return __extends(o, e),
    o.prototype.open = function() {
        var t = [],
        e = this.game.add.tween(this).to({},
        this.animationTime);
        return e.onStart.add(this.playOpen, this),
        t.push(e),
        t
    },
    o.prototype.generateBarrel = function() {
        this.generateBackItems(),
        this.generateCircles(),
        this.generateCenterItems(),
        this.generateRightItems(),
        this.generateLeftItems(),
        this.generateIronItems()
    },
    o.prototype.generateIronItems = function() {
        this.generateSprite(t.ArtConsts.BarrelIronDot, -5, 20),
        this.generateSprite(t.ArtConsts.BarrelIronDot, -5, 58)
    },
    o.prototype.generateCenterItems = function() {
        this.generateSprite(t.ArtConsts.BarrelBoardStraight1, -15, 45)
    },
    o.prototype.generateLeftItems = function() {
        this.generateSprite(t.ArtConsts.BarrelBoard9, -35, 70, -.3),
        this.generateSprite(t.ArtConsts.BarrelBoard8, -40, 35),
        this.generateSprite(t.ArtConsts.BarrelBoard7, -38, 7),
        this.generateSprite(t.ArtConsts.BarrelBoard3, -28, 60, -.2),
        this.generateSprite(t.ArtConsts.BarrelBoard5, -28, 26)
    },
    o.prototype.generateRightItems = function() {
        this.generateSprite(t.ArtConsts.BarrelBoard6, 20, 12, -.2),
        this.generateSprite(t.ArtConsts.BarrelBoardRight2, 15, 35),
        this.generateSprite(t.ArtConsts.BarrelBoard4, 0, 69)
    },
    o.prototype.generateCircles = function() {
        this.generateSprite(t.ArtConsts.BarrelCircleLight, -5, 0),
        this.generateSprite(t.ArtConsts.BarrelCircleDark, -5, 60)
    },
    o.prototype.generateBackItems = function() {
        this.generateSprite(t.ArtConsts.BarrelBoardRight1, 15, 26),
        this.generateSprite(t.ArtConsts.BarrelBoardStraight2, -10, 26),
        this.generateSprite(t.ArtConsts.BarrelBoard2, -28, 6),
        this.generateSprite(t.ArtConsts.BarrelBoard10, -38, 8, .3)
    },
    o.prototype.playOpen = function() {
        this.sprite.destroy(),
        this.generateBarrel(),
        this.runTween()
    },
    o.prototype.generateSprite = function(e, i, o, n) {
        void 0 === n && (n = 0);
        var s = new Phaser.Sprite(this.game, i, o, t.ArtConsts.Items1, e + t.FrameHelper.getFrame(0));
        s.anchor.set(.5, .5),
        s.rotation = n,
        this.addChild(s),
        this.sprites.push(s)
    },
    o.prototype.runTween = function() {
        this.sprites.forEach(this.runFlySprite.bind(this))
    },
    o.prototype.runFlySprite = function(t) {
        this.addDust();
        var e = new i(t);
        this.game.add.tween(e).to({
            angel: 180
        },
        this.animationTime, "Linear", !0).onComplete.add(function() {
            this.destroy()
        },
        t)
    },
    o.prototype.addDust = function() {
        for (var e = -60; e <= 90; e += 30) for (var i = -51; i <= 90; i += 30) if (( - 60 !== e && 90 !== e || -51 != i) && ( - 60 !== e && 90 !== e || 90 != i)) {
            var o = t.RandomHelper.getRandomIntInclusive(1, 3);
            if (2 !== o && 3 !== o) {
                var n = new t.Dust(this.game, e, i);
                n.x += t.RandomHelper.getRandomIntInclusive( - 15, 15),
                n.y += t.RandomHelper.getRandomIntInclusive( - 15, 15),
                this.addChild(n)
            }
        }
    },
    o
} (t.SpriteShakeBase);
t.Barrel = e;