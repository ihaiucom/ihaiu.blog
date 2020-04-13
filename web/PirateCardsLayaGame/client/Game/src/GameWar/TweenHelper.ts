var e = function() {
    function e() {}
    return e.turnAnimationStart = function(e, i) {
        return e.add.tween(i.scale).to({
            x: t.Consts.ScaleZoom,
            y: t.Consts.ScaleZoom
        },
        t.Consts.ScaleSpeed).to({
            x: .1,
            y: t.Consts.FlipZoom
        },
        t.Consts.FlipSpeed / 2)
    },
    e.turnAnimationEnd = function(e, i) {
        return e.add.tween(i.scale).to({
            x: t.Consts.ScaleZoom,
            y: t.Consts.ScaleZoom
        },
        t.Consts.FlipSpeed / 2).to({
            x: 1,
            y: 1
        },
        t.Consts.ScaleSpeed)
    },
    e.scaleIn = function(e, i, o) {
        void 0 === o && (o = !0);
        var n = e.add.tween(i.scale).to({
            x: 0,
            y: 0
        },
        .25 * t.Consts.ShowTime, null, o);
        return n.onStart.add(function() {
            i.inputEnabled = !1
        }),
        n.onComplete.add(function() {
            i.scale.set(1),
            i.visible = !1,
            i.inputEnabled = !0
        }),
        n
    },
    e.scaleOut = function(e, i, o) {
        return void 0 === o && (o = 1),
        i.scale.set(0),
        i.visible = !0,
        i.inputEnabled = !0,
        e.add.tween(i.scale).to({
            x: o,
            y: o
        },
        .25 * t.Consts.ShowTime)
    },
    e
} ();
t.TweenHelper = e