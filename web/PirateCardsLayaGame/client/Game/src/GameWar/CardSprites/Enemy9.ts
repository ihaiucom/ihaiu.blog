var i = function(e) {
    function i(i, o, n) {
        var s = e.call(this, i, o, n) || this;
        return s.name = t.Consts.CardManAnimation,
        s.scale.set(.9, .9),
        s.anchor.set(.5, .9),
        s.init(),
        s.animationTweens = s.generateTween(),
        s.animationTweens.forEach(function(t) {
            return t.loop(!0)
        }),
        s.animationTweens.forEach(function(t) {
            return t.start()
        }),
        s
    }
    return __extends(i, e),
    i.prototype.playAnimation = function() {
        this.animationTweens && this.animationTweens[0].isPaused && this.animationTweens.forEach(function(t) {
            return t.resume()
        })
    },
    i.prototype.init = function() {
        this.pipe = new Phaser.Sprite(this.game, -2, 10, t.ArtConsts.Items2, t.ArtConsts.Enemy9Pipe + t.FrameHelper.getFrame(0)),
        this.man = new Phaser.Sprite(this.game, -10, 30, t.ArtConsts.Items2, t.ArtConsts.Enemy + "_9" + t.FrameHelper.getFrame(0)),
        this.vane = new o(this.game, 0, -65),
        this.pipe.anchor.set(.5, 1),
        this.man.anchor.set(.5, .5),
        this.vane.anchor.set(.5, .5),
        this.addChild(this.pipe),
        this.addChild(this.man),
        this.addChild(this.vane)
    },
    i.prototype.stopAnimation = function() {
        this.animationTweens.forEach(function(t) {
            return t.pause()
        })
    },
    i.prototype.generateTween = function() {
        return [this.generateTweenUnitForMan(this.man), this.generateTweenUnit(this.pipe), this.generateTweenUnit(this.vane)]
    },
    i.prototype.generateTweenUnit = function(e, i) {
        return void 0 === i && (i = 15),
        this.game.add.tween(e).to({
            y: "+" + i
        },
        t.Consts.WarriorAnimationDuration).to({
            y: "-" + i
        },
        t.Consts.WarriorAnimationDuration)
    },
    i.prototype.generateTweenUnitForMan = function(e, i) {
        return void 0 === i && (i = 15),
        this.game.add.tween(e).to({
            y: "+" + i
        },
        t.Consts.WarriorAnimationDuration).to({
            y: "-" + i
        },
        t.Consts.WarriorAnimationDuration)
    },
    i
} (t.SpriteAnimationBase);
t.Enemy9 = i;