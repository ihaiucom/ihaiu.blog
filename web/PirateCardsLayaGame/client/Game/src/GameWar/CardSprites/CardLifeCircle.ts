var e = function(e) {
    function i(i, o, n, s) {
        var a = t.FrameHelper.getFrame(s);
        return e.call(this, i, o, n, t.ArtConsts.Items1, t.ArtConsts.CardLifeCircle + a) || this
    }
    return __extends(i, e),
    i
} (Phaser.Sprite);
t.CardLifeCircle = e