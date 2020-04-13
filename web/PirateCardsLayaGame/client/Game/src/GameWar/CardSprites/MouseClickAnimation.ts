var e = function(e) {
    function i(i, o, n) {
        var s = this,
        a = t.FrameHelper.getFrame(0);
        return (s = e.call(this, i, o, n, t.ArtConsts.Items1, t.ArtConsts.MouseClick + a) || this).anchor.set(.5, .5),
        s.animations.add(t.AnimationConsts.Action, Phaser.Animation.generateFrameNames(t.ArtConsts.MouseClick, 0, 5, "", 4), 60, !1, !1),
        s.visible = !1,
        s.animations.getAnimation(t.AnimationConsts.Action).onStart.add(s.onAnimationStart, s),
        s.animations.getAnimation(t.AnimationConsts.Action).onComplete.add(s.onAnimationComplete, s),
        s
    }
    return __extends(i, e),
    i.prototype.onAnimationStart = function() {
        this.visible = !0
    },
    i.prototype.onAnimationComplete = function() {
        this.visible = !1
    },
    i
} (Phaser.Sprite);
t.MouseClickAnimation = e