var e = function(e) {
    function i(i, o, n, s) {
        var a = this,
        r = t.FrameHelper.getFrame(s);
        return (a = e.call(this, i, o, n, t.ArtConsts.Items1, t.ArtConsts.CardBackground + r) || this).anchor.set(.5, .5),
        a
    }
    return __extends(i, e),
    i
} (Phaser.Sprite);
t.CardBackground = e