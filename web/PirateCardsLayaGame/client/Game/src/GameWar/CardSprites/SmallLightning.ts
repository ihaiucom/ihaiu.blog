var e = function(e) {
    function i(i, o, n) {
        var s = this,
        a = t.FrameHelper.getFrame(0),
        r = t.ArtConsts.SmallLightning;
        return (s = e.call(this, i, o, n, t.ArtConsts.Items1, r + a) || this).anchor.set(.5, .5),
        s.animations.add(t.AnimationConsts.Action, Phaser.Animation.generateFrameNames(r, 0, 5, "", 4), 60, !0, !1),
        s.play(t.AnimationConsts.Action),
        s
    }
    return __extends(i, e),
    i
} (Phaser.Sprite);
t.SmallLightning = e