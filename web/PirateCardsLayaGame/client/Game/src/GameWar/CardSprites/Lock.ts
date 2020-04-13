var e = function(e) {
    function i(i, o, n) {
        var s = this,
        a = t.FrameHelper.getFrame(0);
        return (s = e.call(this, i, o, n, t.ArtConsts.Items1, t.ArtConsts.Lock + a) || this).anchor.setTo(.5, .5),
        s.isRoll = !1,
        s.onAnimation = !1,
        s
    }
    return __extends(i, e),
    i.prototype.changeFrame = function(e) {
        this.frameName = t.ArtConsts.Lock + t.FrameHelper.getFrame(e)
    },
    i.prototype.update = function() {
        this.isRoll && (this.angle += 30),
        this.onAnimation && (this.x += 12, this.y = .01 * Math.pow(this.x - this.beforeX - 50, 2) + this.beforeY - 20, this.y > this.game.height && (this.isRunning = !1, this.onAnimation = !1, this.kill(), this.onComplete()))
    },
    i.prototype.unlock = function(t) {
        this.isRunning = !0,
        this.onComplete = t,
        this.beforeX = this.x,
        this.beforeY = this.y;
        var e = this.game.add.tween(this).to({
            y: this.y - 30
        },
        100, Phaser.Easing.Bounce.In);
        e.onComplete.add(this.changeFrameToOpened, this);
        var i = this.game.add.tween(this).to({
            y: this.y
        },
        50, Phaser.Easing.Bounce.In, null, 30).to({
            y: this.y + 30
        },
        50, null, null, 50);
        i.onComplete.add(this.startRoll.bind(this)),
        i.onComplete.add(this.startAnimation.bind(this)),
        e.chain(i),
        e.start()
    },
    i.prototype.isTweenRunning = function() {
        return this.isRunning || this.isRoll || this.onAnimation
    },
    i.prototype.changeFrameToOpened = function() {
        this.changeFrame(1)
    },
    i.prototype.startAnimation = function() {
        this.onAnimation = !0
    },
    i.prototype.startRoll = function() {
        this.isRoll = !0
    },
    i
} (t.SpriteBase);
t.Lock = e