var e = function(e) {
    function i(i, o, n) {
        var s = this,
        a = t.FrameHelper.getFrame(0);
        return (s = e.call(this, i, o, n, t.ArtConsts.Items1, t.ArtConsts.CoinPanel + a) || this).anchor.set(.5, .5),
        s.coin = new t.Coin(s.game, -s.width / 2 + 70, 0, t.StringFormatHelper.ThousandsSeparator(t.GameStatus.gold)),
        s.addChild(s.coin),
        s.prevCoinCount = t.GameStatus.gold,
        s.game.world.add(s),
        s
    }
    return __extends(i, e),
    i.prototype.update = function() {
        this.prevCoinCount != t.GameStatus.gold && (this.coin.play(t.AnimationConsts.Action, null, !1), this.prevCoinCount = t.GameStatus.gold, this.coin.setText(t.StringFormatHelper.ThousandsSeparator(t.GameStatus.gold)))
    },
    i
} (Phaser.Sprite);
t.CoinPanel = e