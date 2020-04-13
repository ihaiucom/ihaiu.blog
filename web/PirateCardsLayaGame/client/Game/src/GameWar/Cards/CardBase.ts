var i = function(e) {
    function i(t, i) {
        var o = e.call(this, t, i) || this;
        return o.canLightningStrike = !1,
        o
    }
    return __extends(i, e),
    i.prototype.playNoAccess = function() {
        t.SoundController.instance.playSound(t.SoundConsts.IncorrectClick);
        var e = new t.NoAccess(this.shape.game, 0, -.5);
        this.shape.addChild(e),
        e.play(t.AnimationConsts.Action, 60, !1, !0)
    },
    i.prototype.setCoordinate = function(t) {
        this.shape.x = t.x,
        this.shape.y = t.y
    },
    i.prototype.moveTo = function(t, e) {
        return this.game.add.tween(this.shape).to({
            x: t.x,
            y: t.y
        },
        e)
    },
    i.prototype.getCenterX = function() {
        return this.shape.x
    },
    i.prototype.getCenterY = function() {
        return this.shape.y
    },
    i.prototype.runLightning = function() {
        this.bigLightningSprite || (this.bigLightningSprite = new t.BigLightning(this.game, 0, 0), this.bigLightningSprite.alpha = 0, this.shape.add(this.bigLightningSprite)),
        this.bigLightningSprite.y = 20;
        var e = [],
        i = this.game.add.tween(this.bigLightningSprite).to({
            alpha: 1
        },
        50).to({
            y: -20
        },
        200).to({
            alpha: 0
        },
        50);
        return i.onStart.add(this.onBigLightingStart, this),
        e.push(i),
        e
    },
    i.prototype.onBigLightingStart = function() {
        this.smallLightningSprite || (this.smallLightningSprite = new t.SmallLightning(this.game, 0, 0), this.smallLightningSprite.alpha = 0, this.shape.add(this.smallLightningSprite));
        var e = t.Consts.CardWidth / 2 - 20,
        i = t.Consts.CardHeight / 2 - 20;
        t.RandomHelper.getRandomBool() && (e = -e),
        t.RandomHelper.getRandomBool() && (i = -i),
        this.smallLightningSprite.x = e,
        this.smallLightningSprite.y = i,
        this.game.add.tween(this.smallLightningSprite).to({
            alpha: 1
        },
        1).to({
            alpha: 0
        },
        1, null, !0, 100)
    },
    i.prototype.getScaleTween = function(t, e) {
        for (var i = [], o = 2; o < arguments.length; o++) i[o - 2] = arguments[o];
        var n, s = this.game.add.tween(t.scale).to({
            x: 2.5,
            y: 2.5
        },
        200),
        a = this.game.add.tween(t.scale).to({
            x: 1,
            y: 1
        },
        200);
        return (n = s.onComplete).add.apply(n, [e, this, null].concat(i)),
        s.chain(a),
        s
    },
    i.prototype.getCardLifeText = function() {
        return this.shape.getByName(t.Consts.CardLife)
    },
    i
} (e);
t.CardBase = i