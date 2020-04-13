var e = function(e) {
    function i() {
        var i = null !== e && e.apply(this, arguments) || this;
        return i.centerX = t.Consts.Width / 2,
        i.centerY = t.Consts.Height / 2,
        i.gameWidth = t.Consts.Width,
        i.gameHeight = t.Consts.Height,
        i
    }
    return __extends(i, e),
    i.prototype.create = function() {
        this.game.scale.onSizeChange.add(this.scaleGameContainer, this),
        this.background = new Phaser.Group(this.game),
        t.BackgroundHelper.setBackgroundToGroup(this.game, this.background, t.ArtConsts.BackgroundMenu),
        this.gameContainer = new Phaser.Group(this.game, this.world),
        t.ScaleHelper.scaleContainer(this.gameContainer, this.gameWidth, this.gameHeight)
    },
    i.prototype.scaleGameContainer = function() {
        t.ScaleHelper.scaleContainer(this.gameContainer, this.gameWidth, this.gameHeight),
        t.BackgroundHelper.setBackgroundToGroup(this.game, this.background, t.ArtConsts.BackgroundMenu)
    },
    i.prototype.addMenuTopPanel = function(e, i) {
        void 0 === e && (e = null),
        void 0 === i && (i = !0),
        this.coinPanel = new t.CoinPanel(this.game, 0, 0),
        this.coinPanel.x = this.centerX,
        this.coinPanel.y = this.coinPanel.height + 15,
        this.gameContainer.add(this.coinPanel),
        i && (this.settingBtn = new t.Btn(this.game, 0, 0, t.BtnType.HomeSmall, this.onSettingBtnClick.bind(this), !0), this.settingBtn.x = this.gameWidth - this.settingBtn.width, this.settingBtn.y = this.coinPanel.height + 15, this.gameContainer.add(this.settingBtn)),
        e && (this.prevBtn = new t.Btn(this.game, 0, this.coinPanel.height + 15, t.BtnType.PrevSmall, e, !0), this.prevBtn.x = this.prevBtn.width, this.gameContainer.add(this.prevBtn))
    },
    i.prototype.showTopPanel = function() {
        this.settingBtn && this.moveFromTop(this.settingBtn),
        this.moveFromTop(this.coinPanel, .25 * t.Consts.ShowTime),
        this.prevBtn && this.moveFromTop(this.prevBtn, .5 * t.Consts.ShowTime)
    },
    i.prototype.hideTopPanel = function() {
        this.settingBtn && this.moveToTop(this.settingBtn, .5 * t.Consts.ShowTime),
        this.moveToTop(this.coinPanel, .25 * t.Consts.ShowTime),
        this.prevBtn && this.moveToTop(this.prevBtn)
    },
    i.prototype.onSettingBtnClick = function() {},
    i.prototype.updateAllChildren = function(t) {
        for (var e = 0; e < t.children.length; e++) {
            var i = t.children[e];
            i && i.update()
        }
    },
    i.prototype.fadeIn = function(t) {
        t.alpha = 0,
        this.game.add.tween(t).to({
            alpha: 1
        },
        300).start()
    },
    i.prototype.fadeOut = function(t, e) {
        t.alpha = 1;
        var i = this.game.add.tween(t).to({
            alpha: 0
        },
        200).start();
        e && i.onComplete.add(e)
    },
    i.prototype.fadeInState = function() {
        this.fadeIn(this.gameContainer)
    },
    i.prototype.fadeOutState = function(t) {
        this.fadeOut(this.gameContainer, this.changeState.bind(this, t))
    },
    i.prototype.changeState = function(t) {
        this.game.state.start(t, !0, !1)
    },
    i.prototype.moveFromTop = function(e, i) {
        void 0 === i && (i = 0);
        var o = e.y;
        e.y = -1e3,
        e.alpha = 0,
        this.game.add.tween(e).to({
            y: o,
            alpha: 1
        },
        t.Consts.ShowTime, t.Consts.EasingFrom, !0, i)
    },
    i.prototype.moveToTop = function(e, i) {
        void 0 === i && (i = 0),
        this.game.add.tween(e).to({
            y: -1e3,
            alpha: 0
        },
        t.Consts.ShowTime, t.Consts.EasingTo, !0, i)
    },
    i.prototype.moveFromBottom = function(e, i) {
        void 0 === i && (i = 0);
        var o = e.y;
        e.y = 1e3,
        e.alpha = 0,
        this.game.add.tween(e).to({
            y: o,
            alpha: 1
        },
        t.Consts.ShowTime, t.Consts.EasingFrom, !0, i)
    },
    i.prototype.moveToBottom = function(e, i) {
        void 0 === i && (i = 0),
        this.game.add.tween(e).to({
            y: 1e3,
            alpha: 0
        },
        t.Consts.ShowTime, t.Consts.EasingTo, !0, i)
    },
    i.prototype.moveFromLeft = function(e, i, o) {
        void 0 === i && (i = 0),
        void 0 === o && (o = !0);
        var n = e.x;
        return e.x = -1e3,
        e.alpha = 0,
        this.game.add.tween(e).to({
            x: n,
            alpha: 1
        },
        t.Consts.ShowTime, t.Consts.EasingFrom, o, i)
    },
    i.prototype.moveToLeft = function(e, i, o) {
        void 0 === i && (i = 0),
        void 0 === o && (o = !0);
        var n = e.x,
        s = this.game.add.tween(e).to({
            x: -1e3,
            alpha: 0
        },
        t.Consts.ShowTime, t.Consts.EasingTo, o, i);
        return s.onComplete.add(function() {
            e.x = n,
            e.alpha = 1,
            e.visible = !1
        }),
        s
    },
    i.prototype.moveFromRight = function(e, i) {
        void 0 === i && (i = 0);
        var o = e.x;
        e.x = 1e3,
        e.alpha = 0,
        this.game.add.tween(e).to({
            x: o,
            alpha: 1
        },
        t.Consts.ShowTime, t.Consts.EasingFrom, !0, i)
    },
    i.prototype.moveToRight = function(e, i) {
        void 0 === i && (i = 0),
        this.game.add.tween(e).to({
            x: 1e3,
            alpha: 0
        },
        t.Consts.ShowTime, t.Consts.EasingTo, !0, i)
    },
    i
} (Phaser.State);
t.StateBase = e