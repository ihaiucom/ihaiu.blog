var e = function(e) {
    function i(i, o, n) {
        var s = this,
        a = t.FrameHelper.getFrame(0);
        return (s = e.call(this, i, o, n, t.ArtConsts.Items1, t.ArtConsts.Chest + a) || this).anchor.set(.5, .5),
        s
    }
    return __extends(i, e),
    i.prototype.open = function() {
        var t = [];
        t.push(this.game.add.tween(this).to({
            height: .7 * this.height,
            width: 1.1 * this.width
        },
        50));
        var e = this.game.add.tween(this).to({
            width: this.width,
            height: this.height
        },
        70);
        return e.onComplete.add(this.changeToOpen.bind(this)),
        t.push(e),
        t.push(this.game.add.tween(this).to({
            height: 1.3 * this.height,
            width: .9 * this.width
        },
        70)),
        t.push(this.game.add.tween(this).to({
            width: this.width,
            height: this.height
        },
        250)),
        t
    },
    i.prototype.changeToOpen = function() {
        this.frameName = t.ArtConsts.Chest + t.FrameHelper.getFrame(1)
    },
    i
} (t.SpriteShakeBase);
t.Chest = e