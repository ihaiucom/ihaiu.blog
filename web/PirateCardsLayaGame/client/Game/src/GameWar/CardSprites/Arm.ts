var e = function(e) {
    function i(i, o, n) {
        var s = e.call(this, i, o, n, t.ArtConsts.Items1, t.ArtConsts.Arm + t.FrameHelper.getFrame(0)) || this;
        return s.angle = -30,
        s.animations.add(t.AnimationConsts.Action, Phaser.Animation.generateFrameNames(t.ArtConsts.Arm, 0, 1, "", 4), 2, !0, !1),
        s.animations.play(t.AnimationConsts.Action),
        s
    }
    return __extends(i, e),
    i.prototype.changeFrame = function(e) {
        this.frameName = t.ArtConsts.Arm + t.FrameHelper.getFrame(e)
    },
    i
} (t.SpriteBase);
t.Arm = e