var e = function(e) {
    function i(i, o, n, s, a, r, h, d) {
        void 0 === r && (r = t.Consts.ScaleSize),
        void 0 === h && (h = .3),
        void 0 === d && (d = !1);
        var c = e.call(this, i, o, n, s, a) || this;
        return c.waveHeight = 0,
        c.isUp = d,
        c.scaleSize = r,
        c.speed = h,
        c
    }
    return __extends(i, e),
    i.prototype.update = function() {
        this.waveHeight += .3,
        this.isUp ? (this.width += this.speed, this.height += this.speed) : (this.width -= this.speed, this.height -= this.speed),
        this.waveHeight >= this.scaleSize && (this.isUp = !this.isUp, this.waveHeight = 0)
    },
    i
} (Phaser.Sprite);
t.SpriteScaleBase = e