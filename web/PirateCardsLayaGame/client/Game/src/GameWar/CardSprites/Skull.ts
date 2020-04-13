var e = function(e) {
    function i(i, o, n) {
        var s = this,
        a = t.ArtConsts.Skull,
        r = t.FrameHelper.getFrame(1); (s = e.call(this, i, o, n, t.ArtConsts.Items1, a + r) || this).anchor.set(.5, .5);
        var h = Phaser.Animation.generateFrameNames(a, 0, 4, "", 4);
        return h.push.apply(h, Phaser.Animation.generateFrameNames(a, 3, 1, "", 4)),
        s.animations.add(t.AnimationConsts.Action, h, 60, !0, !1),
        s
    }
    return __extends(i, e),
    i
} (Phaser.Sprite);
t.Skull = e