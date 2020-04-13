var i = function() {
    function e(e) {
        this.sprite = e,
        this.startX = this.sprite.x,
        this.startY = this.sprite.y,
        this.radius = t.RandomHelper.getRandomIntInclusive(10, 70),
        this.rotationStep = -.1,
        t.RandomHelper.getRandomBool() || (this.radius *= -1, this.rotationStep *= -1)
    }
    return Object.defineProperty(e.prototype, "angel", {
        get: function() {
            return 0
        },
        set: function(t) {
            var e, i;
            this.radius > 0 ? (t += 180, e = this.radius * Math.cos(Phaser.Math.degToRad(t)) + this.startX, i = this.radius * Math.sin(Phaser.Math.degToRad(t)) + this.startY) : (t -= 90, e = this.radius * Math.sin(Phaser.Math.degToRad(t)) + this.startX, i = this.radius * Math.cos(Phaser.Math.degToRad(t)) + this.startY),
            e += this.radius,
            this.sprite.position.set(e, i),
            this.sprite.rotation += this.rotationStep
        },
        enumerable: !0,
        configurable: !0
    }),
    e
} ();
t.GraphObject = i