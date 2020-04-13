var e = function(e) {
    function i(i, o, n) {
        var s = this,
        a = t.FrameHelper.getFrame(0),
        r = t.ArtConsts.LockBombLamp;
        return (s = e.call(this, i, o, n, t.ArtConsts.Items1, r + a) || this).anchor.set(.5, .5),
        s.animations.add(t.AnimationConsts.Action, Phaser.Animation.generateFrameNames(r, 0, 19, "", 4), 60, !0, !1),
        setTimeout(s.playAnimation.bind(s), t.RandomHelper.getRandomIntInclusive(30, 300)),
        s
    }
    return __extends(i, e),
    i.prototype.playAnimation = function() {
        this.animations.play(t.AnimationConsts.Action)
    },
    i
} (Phaser.Sprite);
t.LockBombLamp = e