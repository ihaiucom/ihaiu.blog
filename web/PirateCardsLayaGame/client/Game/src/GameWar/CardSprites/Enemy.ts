var e = function(e) {
    function i(i, o, n, s) {
        var a = this,
        r = t.FrameHelper.getFrame(0),
        h = t.ArtConsts.Enemy + "_" + s.toString(),
        d = t.ArtConsts.Items2;
        return (a = e.call(this, i, o, n, d, h + r) || this).setPosition(s),
        a.name = t.Consts.CardManAnimation,
        a.anchor.set(.5, .9),
        a.animationTween = a.generateTween(),
        a.animationTween.loop(!0),
        setTimeout(a.animationTween.start.bind(a.animationTween), t.RandomHelper.getRandomIntInclusive(0, 300)),
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
        switch (t) {
        case 1:
            this.x = -2,
            this.y = 80;
            break;
        case 2:
            this.x = -5,
            this.y = 82;
            break;
        case 3:
            this.x = -11,
            this.y = 81;
            break;
        case 4:
            this.x = -10,
            this.y = 80;
            break;
        case 5:
            this.x = -3,
            this.y = 77;
            break;
        case 6:
            this.x = -13,
            this.y = 80;
            break;
        case 7:
            this.x = -4,
            this.y = 79;
            break;
        case 8:
            this.x = -12,
            this.y = 80;
            break;
        default:
            throw new Error("Invalid value")
        }
    },
    i.prototype.generateTween = function() {
        return this.game.add.tween(this).to({
            width: 1.05 * this.width,
            height: .95 * this.height
        },
        t.Consts.WarriorAnimationDuration).to({
            width: this.width,
            height: this.height
        },
        t.Consts.WarriorAnimationDuration)
    },
    i
} (t.SpriteAnimationBase);
t.Enemy = e;