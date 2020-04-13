var e = function(e) {
    function i(i, o, n) {
        var s = this,
        a = t.FrameHelper.getFrame(0);
        return (s = e.call(this, i, o, n, t.ArtConsts.Items1, t.ArtConsts.Boom + a) || this).anchor.set(.5, .5),
        s.animations.add(t.AnimationConsts.Action, Phaser.Animation.generateFrameNames(t.ArtConsts.Boom, 0, 17, "", 4), 60, !1, !1),
        s
    }
    return __extends(i, e),
    i.prototype.changeFrame = function(e) {
        this.frameName = t.ArtConsts.Boom + t.FrameHelper.getFrame(e)
    },
    i
} (t.SpriteBase);
t.Boom = e