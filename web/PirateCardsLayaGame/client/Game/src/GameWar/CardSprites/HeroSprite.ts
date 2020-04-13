var e = function(e) {
    function i(o, n, s, a, r) {
        void 0 === r && (r = t.RandomHelper.getRandomIntInclusive(0, 300));
        var h = this,
        d = i.getArtConst(a);
        return (h = e.call(this, o, n, s + 70, t.ArtConsts.Items2, d + t.FrameHelper.getFrame(0)) || this).anchor.set(.5, .9),
        h.startAnimation(r),
        h
    }
    return __extends(i, e),
    i.prototype.startAnimation = function(t) {
        this.animationTween && this.animationTween.stop(),
        this.animationTween = this.generateTween(),
        this.animationTween.loop(!0),
        setTimeout(this.animationTween.start.bind(this.animationTween), t)
    },
    i.getArtConst = function(e) {
        switch (e) {
        case t.HeroType.Base:
            return t.ArtConsts.Hero;
        case t.HeroType.Bomb:
            return t.ArtConsts.HeroBomb;
        case t.HeroType.Gun:
            return t.ArtConsts.HeroGun;
        case t.HeroType.Key:
            return t.ArtConsts.HeroKey;
        default:
            throw new Error("Not implemented")
        }
    },
    i.prototype.playAnimation = function() {
        this.animationTween && this.animationTween.isPaused && this.animationTween.resume()
    },
    i.prototype.stopAnimation = function() {
        this.animationTween.pause()
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
t.HeroSprite = e