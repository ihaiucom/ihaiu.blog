var e = function(e) {
    function i(i, o, n, s) {
        void 0 === s && (s = t.RandomHelper.getRandomIntInclusive(0, 200));
        var a = this,
        r = t.FrameHelper.getFrame(0);
        return (a = e.call(this, i, o, n, t.ArtConsts.Items1, t.ArtConsts.Poison + r, !1, s) || this).anchor.set(.5, .5),
        a
    }
    return __extends(i, e),
    i
} (t.SpriteShakeBase);
t.Poison = e