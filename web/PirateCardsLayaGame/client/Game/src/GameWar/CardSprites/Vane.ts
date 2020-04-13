var o = function(e) {
    function i(i, o, n) {
        var s = e.call(this, i, o, n, t.ArtConsts.Items2, t.ArtConsts.Enemy9Vane + t.FrameHelper.getFrame(0)) || this;
        return s.animations.add(t.AnimationConsts.Action, Phaser.Animation.generateFrameNames(t.ArtConsts.Enemy9Vane, 0, 17, "", 4), 30, !0, !1),
        s.animations.play(t.AnimationConsts.Action),
        s
    }
    return __extends(i, e),
    i
} (Phaser.Sprite);
t.Vane = o