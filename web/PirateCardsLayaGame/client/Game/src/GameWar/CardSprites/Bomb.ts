var e = function(e) {
    function i(i, o, n) {
        var s = this,
        a = t.FrameHelper.getFrame(0);
        return (s = e.call(this, i, o, n, t.ArtConsts.Items1, t.ArtConsts.Bomb + a) || this).anchor.set(.5, .5),
        s.flame = t.ShapeFactoryHelper.getShape(s.game, s.width / 2, -s.height / 3 + 3, t.ArtConsts.Items1, t.ArtConsts.BombFlame, 0),
        s.addChild(s.flame),
        s.flame.animations.add(t.AnimationConsts.Action, Phaser.Animation.generateFrameNames(t.ArtConsts.BombFlame, 0, 2, "", 4), 60, !0, !1),
        s.playAnimation(),
        s
    }
    return __extends(i, e),
    i.prototype.playAnimation = function() {
        e.prototype.playAnimation.call(this),
        this.flame && this.flame.animations.play(t.AnimationConsts.Action)
    },
    i.prototype.stopAnimation = function() {
        e.prototype.stopAnimation.call(this),
        this.flame && this.flame.animations.stop(t.AnimationConsts.Action)
    },
    i
} (t.SpriteShakeBase);
t.Bomb = e