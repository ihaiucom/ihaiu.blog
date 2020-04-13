var e = function(e) {
    function i(i, o, n) {
        var s = this,
        a = t.FrameHelper.getFrame(0);
        return (s = e.call(this, i, o, n, t.ArtConsts.Items1, t.ArtConsts.CoinBag + a) || this).anchor.set(.5, .5),
        s
    }
    return __extends(i, e),
    i
} (t.SpriteShakeBase);
t.CoinBag = e