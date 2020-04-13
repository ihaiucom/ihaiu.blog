var e = function(e) {
    function i(i, o, n) {
        var s = this,
        a = t.FrameHelper.getFrame(0);
        return (s = e.call(this, i, o - 5, n, t.ArtConsts.Items2, t.ArtConsts.Trap + a) || this).isOpen = !0,
        s.anchor.set(.5, .5),
        s.animations.add(t.AnimationConsts.Open, Phaser.Animation.generateFrameNames(t.ArtConsts.Trap, 0, 4, "", 4), 60, !1, !1),
        s.animations.add(t.AnimationConsts.Close, Phaser.Animation.generateFrameNames(t.ArtConsts.Trap, 4, 0, "", 4), 60, !1, !1),
        s
    }
    return __extends(i, e),
    i.prototype.changeStatus = function() {
        return this.isOpen = !this.isOpen,
        this.isOpen ? this.animations.play(t.AnimationConsts.Close) : this.animations.play(t.AnimationConsts.Open),
        this.isOpen
    },
    i
} (Phaser.Sprite);
t.Trap = e