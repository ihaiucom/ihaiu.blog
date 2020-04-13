var e = function(e) {
    function i(i, o, n) {
        var s = this,
        a = t.FrameHelper.getFrame(0);
        return (s = e.call(this, i, o, n, t.ArtConsts.Items1, t.ArtConsts.ChoiceBackground + a) || this).anchor.set(.5, .5),
        s.game.world.add(s),
        s
    }
    return __extends(i, e),
    i.prototype.changeFrame = function(e) {
        this.frameName = t.ArtConsts.ChoiceBackground + t.FrameHelper.getFrame(e)
    },
    i
} (t.SpriteBase);
t.ChoiceBackground = e