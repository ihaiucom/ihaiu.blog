var e = function(e) {
    function i(i, o, n, s) {
        void 0 === s && (s = !0);
        var a = this,
        r = t.FrameHelper.getFrame(0); ((a = e.call(this, i, o, n, t.ArtConsts.Items1, t.ArtConsts.SkullLight + r) || this).anchor.set(.5, .5), a.bringToTop(), s) && a.game.add.tween(a.scale).to({
            x: 1.2,
            y: 1.2
        },
        100).to({
            x: 0,
            y: 0
        },
        200).start().onComplete.add(a.onSkullLightComplete, a);
        return a
    }
    return __extends(i, e),
    i.prototype.onSkullLightComplete = function() {
        this.destroy()
    },
    i
} (Phaser.Sprite);
t.SkullLight = e