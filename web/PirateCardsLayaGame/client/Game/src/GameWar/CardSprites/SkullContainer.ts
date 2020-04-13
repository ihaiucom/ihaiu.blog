var e = function(e) {
    function i(i, o, n) {
        var s = e.call(this, i, o, n) || this;
        return s.anchor.set(.5, .5),
        s.addChild(new t.SkullLight(s.game, o - 5, n - 5, !1)),
        s.addChild(new t.Skull(s.game, 0, 0)),
        s
    }
    return __extends(i, e),
    i
} (t.SpriteShakeBase);
t.SkullContainer = e