var e = function(e) {
    function i(i, o, n, s) {
        var a = this,
        r = t.FrameHelper.getFrame(0),
        h = t.ArtConsts.Health + "_" + s.toString();
        return (a = e.call(this, i, o, n, t.ArtConsts.Items1, h + r) || this).anchor.setTo(.5, .5),
        a
    }
    return __extends(i, e),
    i
} (t.SpriteShakeBase);
t.Health = e