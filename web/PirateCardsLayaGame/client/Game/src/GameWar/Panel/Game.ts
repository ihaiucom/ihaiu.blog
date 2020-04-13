var e = function(e) {
    function i() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.isSwipe = !1,
        t
    }
    return __extends(i, e),
    i.prototype.create = function() {
        0 == t.Consts.IsAndroid && window.famobi_analytics.trackScreen(window.famobi_analytics.SCREEN_LEVEL),
        e.prototype.create.call(this),
        t.BackgroundHelper.setBackgroundToGroup(this.game, this.background, t.ArtConsts.Background),
        this.game.time.advancedTiming = !0,
        this.keyboardManager = new t.KeyboardManager(this.game),
        this.tableContainer = new Phaser.Group(this.game);
        var scaleRate, cardFactory = new t.CardFactory(this.game, this.tableContainer);
        this.field = new t.Field(this.game, cardFactory, this.keyboardManager),
        scaleRate = 3 == t.GameStatus.RowCount ? .9 : .7,
        this.tableContainer.scale.set(scaleRate, scaleRate),
        this.tableContainer.x = .5 * (t.Consts.Width - (t.Consts.CardWidth * t.GameStatus.RowCount + t.Consts.CardSpaceBetweenWidth * (t.GameStatus.RowCount - 1)) * scaleRate),
        this.tableContainer.y = .5 * (t.Consts.Height - (t.Consts.CardHeight * t.GameStatus.ColumnCount + t.Consts.CardSpaceBetweenHeight * (t.GameStatus.ColumnCount - 1)) * scaleRate) + 30,
        t.GameStatus.init(),
        this.addStatusPanel(),
        this.animationQueue = this.field.initField(),
        this.onAnimation = !1,
        this.field.onAnimation = this.onAnimation,
        this.isPause = !1,
        this.gameContainer.add(this.tableContainer),
        this.game.input.onUp.add(this.onMouseClick, this),
        this.clickAnimation = new t.MouseClickAnimation(this.game, 0, 0),
        this.game.world.addChild(this.clickAnimation)
    },
    i.prototype.onMouseClick = function() {
        this.isSwipe ? this.isSwipe = !1 : (this.clickAnimation.x = this.game.input.activePointer.x, this.clickAnimation.y = this.game.input.activePointer.y, this.clickAnimation.play(t.AnimationConsts.Action, 60, !1, !1))
    },
    i.prototype.scaleGameContainer = function() {
        if (e.prototype.scaleGameContainer.call(this), this.popup) {
            t.BackgroundHelper.setBackgroundToGroup(this.game, this.popup, t.ArtConsts.BackgroundPause);
            var i = this.popup.getByName(t.Consts.ContainerName);
            i && (this.popup.bringToTop(i), t.ScaleHelper.scaleContainer(i, this.gameWidth, this.gameHeight))
        }
        t.BackgroundHelper.setBackgroundToGroup(this.game, this.background, t.ArtConsts.Background)
    },
    i.prototype.render = function() {
        t.Consts.IsDev && (this.game.debug.text("FPS: " + (this.game.time.fps || "--"), 20, 40, "#00ff00", "40px Dosis-SemiBold"), this.game.debug.text("CB: " + t.GameStatus.cardCounter.toString(), 20, 80, "#00ff00", "40px Dosis-SemiBold"), this.game.debug.text("P: " + t.LogInfo.PositiveCardProbability.toFixed(2), 20, 120, "#00ff00", "40px Dosis-SemiBold"))
    },
    i.prototype.update = function() {
        this.isChest && this.keyboardManager.reset(),
        this.keyboardManager.update(),
        this.isSwipe = this.keyboardManager.isPressed(),
        this.isChest ? this.keyboardManager.isSpace && setTimeout(this.chestUnlock.onClick.bind(this.chestUnlock), 1) : this.isPause || (t.GameStatus.isGameEnd && (t.GameStatus.resetShop(), this.fadeOutState(t.WindowsConsts.Result)), this.onAnimation || (this.animationQueue.length > 0 ? this.runAnimationFromQueue() : this.fillQueue()))
    },
    i.prototype.runAnimationFromQueue = function() {
        var t = this,
        e = this.animationQueue.shift();
        this.onAnimation = !0,
        this.field.onAnimation = this.onAnimation;
        var i = e.tweens.shift(),
        o = i;
        if (e.tweens.length > 0) for (o = e.tweens.shift(), i.chain(o); e.tweens.length > 0;) {
            var n = e.tweens.shift();
            o.chain(n),
            o = n
        }
        0 === e.animationDuration ? o.onComplete.add(function() {
            t.onAnimation = !1,
            t.field.onAnimation = t.onAnimation,
            t.keyboardManager.reset()
        },
        this) : setTimeout(this.onAnimationComplete.bind(this), e.animationDuration),
        i.start()
    },
    i.prototype.fillQueue = function() {
        if (t.GameStatus.isHeroAlive) {
            var e, i, o, n, s, a = this.field.getHero();
            if (a.needShoot) return (e = this.animationQueue).push.apply(e, this.field.shootCannon()),
            void(a.needShoot = !1);
            if (a.needRunLightning) return (i = this.animationQueue).push.apply(i, this.field.shootLightning()),
            void(a.needRunLightning = !1);
            if (a.needShootMultiplier) return (o = this.animationQueue).push.apply(o, this.field.shootMultiplier()),
            void(a.needShootMultiplier = !1);
            if (a.needShootSkull) return (n = this.animationQueue).push.apply(n, this.field.shootSkull()),
            void(a.needShootSkull = !1); (s = this.animationQueue).push.apply(s, this.field.smashBomb()),
            this.checkKeyHandler()
        } else t.GameStatus.isGameEnd = !0
    },
    i.prototype.onAnimationComplete = function() {
        this.onAnimation = !1,
        this.field.onAnimation = this.onAnimation,
        this.keyboardManager.reset()
    },
    i.prototype.openChestPopUp = function() {
        if (!this.isPause && !this.isChest) {
            this.isChest = !0,
            this.field.stopAllAnimations();
            var e = new t.ChestUnlock(this.game, this.chestOpened.bind(this), this.chestClosed.bind(this));
            e.initGroup(),
            this.game.input.enabled = !0,
            this.game.input.onDown.add(e.onClick.bind(e)),
            this.popup = new Phaser.Group(this.game),
            t.BackgroundHelper.setBackgroundToGroup(this.game, this.popup, t.ArtConsts.BackgroundPause);
            var i = new Phaser.Group(this.game, this.world);
            t.ScaleHelper.scaleContainer(i, this.gameWidth, this.gameHeight),
            i.name = t.Consts.ContainerName,
            i.add(e),
            this.popup.add(i),
            this.chestUnlock = e,
            this.fadeIn(this.popup)
        }
    },
    i.prototype.chestOpened = function() {
        t.SoundController.instance.playSound(t.SoundConsts.ChestOpening),
        this.isChest = !1,
        this.field.playAllAnimations(),
        this.chestOpenedAction()
    },
    i.prototype.chestOpenedAction = function() {
        var e;
        this.destroyChestDelayed(),
        (e = this.animationQueue).push.apply(e, this.field.replaceCard(this.moveType, t.CardGenerationType.AfterChest)),
        t.GameStatus.stepUpdate(),
        this.isChangeTurnsToBoss() && t.GameStatus.decreaseTurnsToBoss()
    },
    i.prototype.destroyChestDelayed = function(t) {
        void 0 === t && (t = 1),
        setTimeout(this.destroyChest.bind(this), t)
    },
    i.prototype.destroyChest = function() {
        this.popup && this.fadeOut(this.popup,
        function() {
            this.chestUnlock && this.chestUnlock.destroy(),
            this.popup.removeAll(!0),
            this.popup.destroy(!0)
        }.bind(this))
    },
    i.prototype.chestClosed = function() {
        this.isChest = !1;
        var e = 4 == t.GameStatus.RowCount ? 1e3: 500;
        this.game.camera.shake(t.Consts.ShakeIntensity, e),
        this.smashChest();
        this.field.smashHero(600),
        this.field.playAllAnimations(),
        this.destroyChestDelayed(500);
        var i, o, n = this.field.getHero();
        t.GameStatus.currentHero != t.HeroType.Bomb && n.reduceScoreInNSeconds(1, 1),
        0 == n.getScore() ? ((i = this.animationQueue).push.apply(i, this.field.removeAllChild()), t.GameStatus.isHeroAlive = !1) : (o = this.animationQueue).push.apply(o, this.field.move(this.moveType)),
        t.GameStatus.stepUpdate(),
        this.isChangeTurnsToBoss() && t.GameStatus.decreaseTurnsToBoss()
    },
    i.prototype.smashChest = function() {
        var e = this.popup.getByName(t.Consts.ContainerName);
        this.addBombExplosionAnimation(e, t.RandomHelper.getRandomIntInclusive(100, 200), t.RandomHelper.getRandomIntInclusive(150, 250), 1),
        this.addBombExplosionAnimation(e, t.RandomHelper.getRandomIntInclusive(400, 500), t.RandomHelper.getRandomIntInclusive(450, 550), 100),
        this.addBombExplosionAnimation(e, t.RandomHelper.getRandomIntInclusive(100, 500), t.RandomHelper.getRandomIntInclusive(150, 550), 200)
    },
    i.prototype.addBombExplosionAnimation = function(e, i, o, n) {
        setTimeout(function() {
            var n = new t.Boom(this.game, i, o);
            n.play(t.AnimationConsts.Action, 60, !1, !0),
            e.add(n),
            setTimeout(function() {
                t.SoundController.instance.playSound(t.SoundConsts.PickLockFail)
            }.bind(this), t.RandomHelper.getRandomIntInclusive(1, 100))
        }.bind(this), n)
    },
    i.prototype.openPauseMenu = function() {
        if (!this.isChest && !this.isPause) {
            0 == t.Consts.IsAndroid && window.famobi_analytics.trackScreen(window.famobi_analytics.SCREEN_PAUSE),
            this.isPause = !0,
            this.field.stopAllAnimations(),
            this.popup = new Phaser.Group(this.game),
            t.BackgroundHelper.setBackgroundToGroup(this.game, this.popup, t.ArtConsts.BackgroundPause);
            var e = new Phaser.Group(this.game, this.world);
            t.ScaleHelper.scaleContainer(e, this.gameWidth, this.gameHeight),
            e.name = t.Consts.ContainerName;
            var i = new t.PauseLogo(this.game, this.centerX, this.centerY - 200);
            i.anchor.set(.5, .5);
            var o = this.centerY + 100,
            n = new t.Btn(this.game, this.centerX - 150, o, t.BtnType.Home, this.onHomeClick.bind(this), !0),
            s = new t.Btn(this.game, this.centerX, o, t.BtnType.Sound, null),
            a = new t.Btn(this.game, this.centerX + 150, o, t.BtnType.Resume, this.onResumeClick.bind(this));
            i.x = this.centerX,
            i.y = 2 * this.gameHeight / 6,
            n.x = this.centerX - n.width - 25,
            n.y = 4 * this.gameHeight / 6,
            s.x = this.centerX,
            s.y = 4 * this.gameHeight / 6,
            a.x = this.centerX + a.width + 25,
            a.y = 4 * this.gameHeight / 6,
            e.add(i),
            e.add(n),
            e.add(s),
            e.add(a),
            this.popup.add(e),
            this.fadeIn(this.popup)
        }
    },
    i.prototype.checkKeyHandler = function() {
        var t = this.keyboardManager.getMoveType();
        if (t) {
            var e, i = this.move(t);
            i.length > 0 ? (this.field.stepUpdate(), (e = this.animationQueue).push.apply(e, i)) : this.keyboardManager.reset()
        }
    },
    i.prototype.move = function(e) {
        var i = this.field.getCardToFight(e);
        if (null == i) return [];
        var o = this.field.getHero(),
        n = o.fight(i);
        if (!n.isHeroAlive) return t.GameStatus.isHeart ? (t.GameStatus.isHeart = !1, this.keyboardManager.reset(), o.useHeart(), this.field.move(e)) : (t.GameStatus.isHeroAlive = !1, this.field.removeAllChild());
        if (n.isChest) return this.moveType = e,
        t.GameStatus.currentHero == t.HeroType.Key ? this.chestOpened() : t.GameStatus.isKey ? (this.field.getHero().setShopItemsStatus(), this.chestOpened()) : this.openChestPopUp(),
        [];
        var s, a = []; (t.GameStatus.stepUpdate(), n.isNeedIncreaseLifeByOne) && ((s = new t.TweenContainer).tweens.push(this.field.getHero().increaseLifeByOneTween()), a.push(s)); (n.isMove ? a.push.apply(a, this.field.move(e)) : a.push.apply(a, this.field.replaceCard(e, t.CardGenerationType.AfterBarrel, i.getScore())), n.isNeedIncreaseLifeByOneAfterBoss) && ((s = new t.TweenContainer).tweens.push(this.field.getHero().increaseLifeByOneTween()), a.push(s));
        return this.isChangeTurnsToBoss() && t.GameStatus.decreaseTurnsToBoss(),
        a
    },
    i.prototype.isChangeTurnsToBoss = function() {
        return ! t.GameStatus.isNeedCreateBoss && !this.field.isBossInTheField()
    },
    i.prototype.addStatusPanel = function() {
        this.panelContainer = new Phaser.Group(this.game),
        this.gamePanel = new t.GameStatusPanel(this.game, 0, 0),
        this.menuBtn = new t.Btn(this.game, 0, this.gamePanel.height / 2, t.BtnType.Pause, this.openPauseMenu.bind(this)),
        this.menuBtn.x = this.gamePanel.width + this.menuBtn.width / 2 + 5,
        this.panelContainer.scale.set(.9, .9),
        this.panelContainer.x = 40,
        this.panelContainer.y = 60,
        this.panelContainer.addChild(this.menuBtn),
        this.panelContainer.addChild(this.gamePanel),
        this.gameContainer.add(this.panelContainer)
    },
    i.prototype.onHomeClick = function() {
        t.GameStatus.resetShop(),
        this.fadeOutState(t.WindowsConsts.MainMenu)
    },
    i.prototype.onResumeClick = function() {
        this.fadeOut(this.popup,
        function() {
            this.field.playAllAnimations(),
            this.isPause = !1,
            this.popup.destroy(!0)
        }.bind(this))
    },
    i
} (t.StateBase);
t.Game = e