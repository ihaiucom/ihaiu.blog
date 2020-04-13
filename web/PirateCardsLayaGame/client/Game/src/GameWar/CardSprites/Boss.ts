var e = function(e) {
    function i(i, o, n, s) {
        var a = this,
        r = t.FrameHelper.getFrame(0),
        h = t.ArtConsts.Boss + "_" + s.toString(),
        d = t.ArtConsts.Items2;
        return (a = e.call(this, i, o, n, d, h + r) || this).setPosition(s),
        a.anchor.set(.5, .9),
        a.animationTween = a.generateTween(),
        a.animationTween.loop(!0),
        a.animationTween.start(),
        a
    }
    return __extends(i, e),
    i.prototype.playAnimation = function() {
        this.animationTween && this.animationTween.isPaused && this.animationTween.resume()
    },
    i.prototype.stopAnimation = function() {
        this.animationTween.pause()
    },
    i.prototype.setPosition = function(t) {
        switch (this.y = 5, t) {
        case 1:
            this.x = -18,
            this.y = 82;
            break;
        case 2:
            this.x = -20,
            this.y = 82;
            break;
        case 3:
            this.x = -25,
            this.y = 80;
            break;
        default:
            throw new Error("Invalid value")
        }
    },
    i.prototype.generateTween = function() {
        return this.game.add.tween(this).to({
            height: .95 * this.height
        },
        500).to({
            height: this.height
        },
        500)
    },
    i
} (t.SpriteAnimationBase);
t.Boss = e