var e = function(e) {
    function i(i, o, n, s) {
        var a = e.call(this, i, o, n) || this;
        return a.container = new Phaser.Sprite(i, 0, 0),
        a.ring = t.ShapeFactoryHelper.getShape(i, 2, 2, t.ArtConsts.Items1, s),
        a.container.addChild(a.ring),
        a.addChild(a.container),
        a
    }
    return __extends(i, e),
    i.prototype.update = function() {
        this.canPlayAnimation && (this.container.angle += 2)
    },
    i
} (t.SpriteAnimationBase);
t.BigRing = e