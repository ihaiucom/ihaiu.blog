var e = function(e) {
    function i(i, o, n, s) {
        var a = this,
        r = t.FrameHelper.getFrame(s);
        return (a = e.call(this, i, o, n, t.ArtConsts.Items1, t.ArtConsts.Shield + r) || this).anchor.add(.5, .5),
        a
    }
    return __extends(i, e),
    i
} (t.SpriteShakeBase);
t.Shield = e