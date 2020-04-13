var e = function(e) {
    function i(i, o, n, s, a) {
        void 0 === a && (a = !1);
        var r = this,
        h = t.FrameHelper.getFrame(0),
        d = t.ArtConsts.Coin;
        return (r = e.call(this, i, o, n, t.ArtConsts.Items1, d + h) || this).animations.add(t.AnimationConsts.Action, Phaser.Animation.generateFrameNames(d, 0, 9, "", 4), 30, !1, !1),
        r.coinTxt = t.TextHelper.getText(i, r.width / 2, 0, s, "#ffffff", t.Consts.numbersFontWeight),
        r.addChild(r.coinTxt),
        r.coinTxt.anchor.set(0, .5),
        r.anchor.setTo(.5, .5),
        r.game.world.add(r),
        r.needToShake = a,
        r
    }
    return __extends(i, e),
    i.prototype.setText = function(t) {
        this.coinTxt.setText(t)
    },
    i.prototype.update = function() {
        this.needToShake && e.prototype.update.call(this)
    },
    i
} (t.SpriteShakeBase);
t.Coin = e