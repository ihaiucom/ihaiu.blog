var e = function() {
    function e(t, e) {
        this.shape = t,
        this.game = e
    }
    return e.prototype.startTurnAnimation = function(e, i) {
        void 0 === i && (i = this.removeShapeFromStage);
        var o = t.TweenHelper.turnAnimationStart(this.game, this.shape);
        return o.onStart.add(this.playCardSoundInSeconds, this),
        o.onComplete.add(i, this),
        o.onComplete.add(e),
        o
    },
    e.prototype.playCardSoundInSeconds = function() {
        setTimeout(this.playCardSound.bind(this), 50)
    },
    e.prototype.playCardSound = function() {
        t.SoundController.instance.playSound(t.SoundConsts.Card)
    },
    e.prototype.endTurnAnimationStart = function() {
        this.shape.scale.set(0, t.Consts.FlipZoom)
    },
    e.prototype.endTurnAnimationEnd = function() {
        this.shape.getByName(t.Consts.CardManAnimation) instanceof t.Boss && t.SoundController.instance.playSound(t.SoundConsts.BossAppearance),
        this.shape.scale.x = .1,
        t.TweenHelper.turnAnimationEnd(this.game, this.shape).start()
    },
    e.prototype.removeChild = function() {
        var t = [],
        e = this.game.add.tween(this.shape.scale).to({
            x: 1.1,
            y: 1.1
        },
        50).to({
            x: 1,
            y: 1
        },
        50).to({
            x: 1.1,
            y: 1.1
        },
        50).to({
            x: 0,
            y: 0
        },
        80, null, null, 100);
        return e.onComplete.add(this.removeShapeFromStage.bind(this)),
        t.push(e),
        t
    },
    e.prototype.removeShapeFromStage = function() {
        this.shape.destroy()
    },
    e
} ();
t.CardSpriteBase = e;