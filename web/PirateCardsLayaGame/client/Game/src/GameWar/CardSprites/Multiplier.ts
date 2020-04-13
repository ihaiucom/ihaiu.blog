var e; !
    function(t) {
        t[t.X2 = 2] = "X2",
        t[t.X3 = 3] = "X3"
    } (e = t.MultiplierScore || (t.MultiplierScore = {}));
    var i = function(i) {
        function o(e, n, s, a) {
            var r = this,
            h = o.GetArtName(a),
            d = t.FrameHelper.getFrame(0);
            return (r = i.call(this, e, n, s, t.ArtConsts.Items1, h + d) || this).anchor.set(.5, .5),
            r
        }
        return __extends(o, i),
        o.GetArtName = function(i) {
            switch (i) {
            case e.X2:
                return t.ArtConsts.Multiplier2;
            case e.X3:
                return t.ArtConsts.Multiplier3
            }
        },
        o
    } (t.SpriteShakeBase);
    t.Multiplier = i