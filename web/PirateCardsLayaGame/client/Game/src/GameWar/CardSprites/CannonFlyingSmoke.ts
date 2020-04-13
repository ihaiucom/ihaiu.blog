var e = function(e) {
    function i(i, o, n) {
        var s = e.call(this, i, o, n) || this;
        s.anchor.set(.5, .5);
        var a = t.FrameHelper.getFrame(0);
        s.smoke1 = s.createSmoke(t.ArtConsts.Smoke1 + a),
        s.smoke2 = s.createSmoke(t.ArtConsts.Smoke2 + a),
        s.smoke3 = s.createSmoke(t.ArtConsts.Smoke3 + a),
        s.smoke4 = s.createSmoke(t.ArtConsts.Smoke4 + a),
        s.smoke5 = s.createSmoke(t.ArtConsts.Smoke5 + a),
        s.anchor.set(.5, .5);
        var r = s.generateTween(s.smoke1, 1),
        h = s.generateTween(s.smoke2, 200 / 9),
        d = s.generateTween(s.smoke3, 50),
        c = s.generateTween(s.smoke4, 50),
        u = s.generateTween(s.smoke5, 50);
        return r.chain(h),
        h.chain(d),
        d.chain(c),
        c.chain(u),
        u.onComplete.add(function() {
            this.destroy()
        },
        s),
        r.start(),
        s
    }
    return __extends(i, e),
    i.prototype.createSmoke = function(e) {
        var i = new Phaser.Sprite(this.game, 0, 0, t.ArtConsts.Items1, e);
        return i.anchor.set(.5, .5),
        i.alpha = 0,
        this.addChild(i),
        i
    },
    i.prototype.generateTween = function(t, e) {
        var i = t.width,
        o = t.height;
        t.width = .6 * i,
        t.height = .6 * o;
        var n = this.game.add.tween(t).to({
            alpha: 1,
            width: i,
            height: o
        },
        e),
        s = this.game.add.tween(t).to({
            alpha: 0,
            width: 0,
            height: 0
        },
        e);
        return s.onComplete.add(function() {
            this.destroy()
        },
        t),
        n.onComplete.add(function() {
            s.start()
        },
        this),
        n
    },
    i
} (Phaser.Sprite);
t.CannonFlyingSmoke = e