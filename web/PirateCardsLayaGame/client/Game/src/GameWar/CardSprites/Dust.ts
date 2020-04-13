var e = function(e) {
    function i(i, o, n) {
        var s = e.call(this, i, o, n, t.ArtConsts.Items1, t.ArtConsts.Dust + t.FrameHelper.getFrame(0)) || this;
        return s.anchor.set(.5, .5),
        s.alpha = 0,
        s.playAnimation(),
        s
    }
    return __extends(i, e),
    i.prototype.playAnimation = function() {
        var e = this.game.add.tween(this).to({
            alpha: .5
        },
        10, null, null, t.RandomHelper.getRandomIntInclusive(50, 500)),
        i = this.game.add.tween(this.scale).to({
            x: 2.5,
            y: 2.5
        },
        150).to({
            x: 0,
            y: 0
        },
        300, null, null, 50);
        i.onComplete.add(function() {
            this.destroy()
        },
        this),
        e.chain(i),
        e.start()
    },
    i
} (Phaser.Sprite);
t.Dust = e