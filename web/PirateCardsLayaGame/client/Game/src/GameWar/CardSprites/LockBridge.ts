var e = function(e) {
    function i(i, o, n) {
        var s = t.FrameHelper.getFrame(1);
        return e.call(this, i, o, n, t.ArtConsts.Items1, t.ArtConsts.LockBridge + s) || this
    }
    return __extends(i, e),
    i.prototype.open = function() {
        this.frameName = t.ArtConsts.LockBridge + t.FrameHelper.getFrame(0)
    },
    i
} (Phaser.Sprite);
t.LockBridge = e