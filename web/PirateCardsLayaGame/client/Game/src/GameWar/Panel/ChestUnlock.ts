var e; !
    function(t) {
        t[t.NeutralSingle = 0] = "NeutralSingle",
        t[t.NeutralDouble = 1] = "NeutralDouble",
        t[t.Bomb = 2] = "Bomb",
        t[t.PositiveSingle = 3] = "PositiveSingle",
        t[t.PositiveDouble = 4] = "PositiveDouble"
    } (e = t.LockItemType || (t.LockItemType = {}));
    var i = function(i) {
        function o(e, o, n) {
            var s = i.call(this, e) || this;
            return s.lockArrowAngle = 20,
            s.lockArrowRotateStep = 3,
            s.radius = 95,
            s.arrowSpeed = 6,
            s.shortLength = 10,
            s.longLength = 40,
            s.clockwise = !0,
            s.items = [],
            s.isFly = !1,
            s.moveBack = !1,
            s.isLongWay = !1,
            s.isLatestMove = !1,
            s.isCompleted = !1,
            s.isFrontOfRoad = !1,
            s.tutorialStep = 0,
            s.isClickDisabled = !1,
            s.onChestOpened = o,
            s.onChestClosed = n,
            s.isTutorial = !t.GameStatus.isTutorialChestSeen,
            s
        }
        return __extends(o, i),
        o.prototype.initGroup = function() {
            this.lockBody = t.ShapeFactoryHelper.getShape(this.game, t.Consts.Width / 2, t.Consts.Height / 2, t.ArtConsts.Items1, t.ArtConsts.LockBody),
            this.lockBridge = new t.LockBridge(this.game, 0, -140),
            this.lockArrow = t.ShapeFactoryHelper.getShape(this.game, 0, 35, t.ArtConsts.Items1, t.ArtConsts.LockArrow),
            this.lockSwitch = t.ShapeFactoryHelper.getShape(this.game, 0, 40, t.ArtConsts.Items1, t.ArtConsts.LockSwitch),
            this.lockBody.anchor.set(.5, .5),
            this.lockBridge.anchor.set(.5, 1),
            this.lockBody.addChild(this.lockBridge),
            this.lockArrow.anchor.set(.5, .9),
            this.lockArrow.angle = 20,
            this.lockBody.addChild(this.lockArrow),
            this.lockSwitch.anchor.set(.5, .5),
            this.lockBody.addChild(this.lockSwitch),
            this.initElements(this.lockBody),
            this.add(this.lockBody)
        },
        o.prototype.initElements = function(t) {
            var e = [],
            i = this.generateArrayOfElements();
            this.sortArray(i);
            for (var o = 0,
            n = 0; n < i.length; n++) {
                var s = i[n],
                a = this.getItemWeight(s),
                r = a > 1 ? o + 1.5 : o + 1,
                h = this.addSpriteByType(r, s);
                e.push(h),
                o += a
            }
            e.forEach(function(e) {
                t.addChild(e)
            })
        },
        o.prototype.sortArray = function(t) {
            t = Phaser.ArrayUtils.shuffle(t);
            for (var i = 0,
            o = !1; i < 100 && !o;) {
                o = !0;
                for (var n = 0; n < t.length; n++) if (0 == n) {
                    if (! (t[n] != e.PositiveSingle && t[n] != e.PositiveDouble || t[n + 1] != e.PositiveSingle && t[n + 1] != e.PositiveDouble)) {
                        var s = t[n];
                        t[n] = t[t.length - 1],
                        t[t.length - 1] = s,
                        o = !1
                    }
                } else if (! (t[n] != e.PositiveSingle && t[n] != e.PositiveDouble || t[n + 1] != e.PositiveSingle && t[n + 1] != e.PositiveDouble)) {
                    s = t[n];
                    t[n] = t[n - 1],
                    t[n - 1] = s,
                    o = !1
                }
                i++
            }
        },
        o.prototype.generateArrayOfElements = function() {
            for (var t = this.isTutorial ? [e.PositiveSingle, e.NeutralDouble, e.PositiveSingle, e.PositiveSingle, e.PositiveDouble] : [e.NeutralSingle, e.NeutralSingle, e.Bomb, e.Bomb, e.Bomb, e.PositiveSingle, e.PositiveSingle], i = 7; i < 15;) {
                var o = this.getNewItemType();
                14 == i && this.getItemWeight(o) > 1 || this.canAddType(t, o) && (t.push(o), i += this.getItemWeight(o))
            }
            return t
        },
        o.prototype.getNewItemType = function() {
            var i = t.RandomHelper.getRandomIntInclusive(0, 100);
            return this.isTutorial ? e.NeutralSingle: i <= 20 ? e.NeutralSingle: i > 20 && i <= 30 ? e.NeutralDouble: i > 30 && i <= 60 ? e.Bomb: i > 60 && i <= 90 ? e.PositiveSingle: i > 90 ? e.PositiveDouble: void 0
        },
        o.prototype.canAddType = function(t, e) {
            if (this.isTutorial) return ! 0;
            var i = this.getMaxAmountOf(e);
            return t.filter(function(t) {
                return t == e
            }).length != i
        },
        o.prototype.getMaxAmountOf = function(e) {
            switch (e) {
            case t.LockItemType.Bomb:
                return 6;
            case t.LockItemType.NeutralDouble:
                return 2;
            case t.LockItemType.NeutralSingle:
                return 4;
            case t.LockItemType.PositiveDouble:
                return 2;
            case t.LockItemType.PositiveSingle:
                return 5
            }
        },
        o.prototype.getItemWeight = function(e) {
            switch (e) {
            case t.LockItemType.Bomb:
            case t.LockItemType.NeutralSingle:
            case t.LockItemType.PositiveSingle:
                return 1;
            case t.LockItemType.NeutralDouble:
            case t.LockItemType.PositiveDouble:
                return 2
            }
        },
        o.prototype.addSpriteByType = function(e, i) {
            switch (i) {
            case t.LockItemType.Bomb:
                return this.getItem(e, t.ArtConsts.LockBomb);
            case t.LockItemType.NeutralSingle:
                return this.getItem(e, t.ArtConsts.LockFixedRod);
            case t.LockItemType.NeutralDouble:
                return this.getItem(e, t.ArtConsts.LockDoubleFixedRod);
            case t.LockItemType.PositiveSingle:
                return this.getItem(e, t.ArtConsts.LockRod);
            case t.LockItemType.PositiveDouble:
                return this.getItem(e, t.ArtConsts.LockDoubleRod)
            }
        },
        o.prototype.getItem = function(e, i) {
            var o = this.radius;
            i == t.ArtConsts.LockFixedRod && (o += 16),
            i == t.ArtConsts.LockBomb && (o += 24),
            i == t.ArtConsts.LockDoubleRod && (o -= 5),
            i == t.ArtConsts.LockDoubleFixedRod && (o += 10);
            var n, s, a = 180 - 22.5 * e;
            n = o * Math.sin(Phaser.Math.degToRad(a)),
            s = o * Math.cos(Phaser.Math.degToRad(a));
            var r = t.ShapeFactoryHelper.getShape(this.game, n, 35 + s, t.ArtConsts.Items1, i);
            r.anchor.set(.5, .5);
            var h = a + 45 * e;
            if (i != t.ArtConsts.LockDoubleRod && i != t.ArtConsts.LockDoubleFixedRod || (h -= 10), r.angle = h, i == t.ArtConsts.LockBomb) {
                var d = new t.LockBombLamp(this.game, 2, 11);
                r.addChild(d)
            }
            return this.items.push(new t.LockItem(e, i, r)),
            r
        },
        o.prototype.update = function() {
            var e = this;
            if (this.isFly) this.lockSwitch.frameName = t.ArtConsts.LockSwitch + t.FrameHelper.getFrame(1),
            this.flyArrow();
            else {
                if (this.isFrontOfRoad) return;
                if (this.tutorialStep >= 2 && (this.tutorialShadow.destroy(), this.isTutorial = !1, t.GameStatus.isTutorialChestSeen = !0), this.lockSwitch.frameName = t.ArtConsts.LockSwitch + t.FrameHelper.getFrame(0), this.isLatestMove && !this.isCompleted) return t.AdManager.instance.isInterstitialAvailable() ? setTimeout(function() {
                    t.AdManager.instance.showAd(e.onChestOpened)
                },
                250) : this.onChestOpened(),
                this.lockSwitch.frameName = t.ArtConsts.LockSwitch + t.FrameHelper.getFrame(1),
                this.isCompleted = !0,
                void(this.isClickDisabled = !0);
                if (this.isTutorial) {
                    if (!this.tutorialShadow) {
                        var i = this.game.add.graphics(0, 0);
                        i.name = t.Consts.Shadow,
                        i.alpha = .5,
                        i.beginFill(0),
                        i.drawRect(2 * -this.game.width, 2 * -this.game.height, 4 * this.game.width, 4 * this.game.height),
                        this.lockBody.addChild(i),
                        this.tutorialShadow = i
                    }
                    this.lockArrow.bringToTop(),
                    this.lockSwitch.bringToTop();
                    var o = this.getItemToMove();
                    if (o.lockType == t.LockType.Road && !o.isMoved) {
                        this.isFrontOfRoad = !0,
                        o.shape.bringToTop();
                        var n = new t.Arm(this.game, this.centerX + 150, this.centerY + 150);
                        n.name = t.Consts.CardWithArm,
                        this.add(n),
                        this.tutorialStep++
                    }
                }
                this.rotateArrow()
            }
        },
        o.prototype.onClick = function() {
            if (!this.isClickDisabled) {
                if (this.isFrontOfRoad = !1, this.isTutorial) {
                    var e = this.getByName(t.Consts.CardWithArm);
                    e && this.remove(e)
                }
                if (!this.isFly) {
                    this.isFly = !0,
                    this.moveBack = !1,
                    this.arrowStartX = this.lockArrow.x,
                    this.arrowStartY = this.lockArrow.y,
                    this.arrowStepX = this.arrowSpeed * Math.sin(Phaser.Math.degToRad(this.lockArrow.angle)),
                    this.arrowStepY = this.arrowSpeed * -Math.cos(Phaser.Math.degToRad(this.lockArrow.angle)),
                    this.itemToMove = this.getItemToMove();
                    var i = this.itemToMove.shape.angle;
                    this.itemToMove.section % 1 != 0 ? i += 190 : i += 180,
                    this.itemToMoveStepX = this.arrowSpeed * Math.sin(Phaser.Math.degToRad(i)),
                    this.itemToMoveStepY = this.arrowSpeed * -Math.cos(Phaser.Math.degToRad(i)),
                    this.isLongWay = this.itemToMove.lockType === t.LockType.Road
                }
            }
        },
        o.prototype.getItemToMove = function() {
            var e = 16 * (this.lockArrow.angle < 0 ? 360 + this.lockArrow.angle: this.lockArrow.angle) / 360,
            i = this.items.map(function(t) {
                return t.section
            }),
            o = t.ArrayHelper.findNearestValue(e, i);
            return this.items.filter(function(t) {
                return t.section === o
            })[0]
        },
        o.prototype.flyArrow = function() {
            var e = this;
            this.moveBack ? (this.lockArrow.x -= this.arrowStepX, this.lockArrow.y -= this.arrowStepY) : (this.lockArrow.x += this.arrowStepX, this.lockArrow.y += this.arrowStepY);
            var i = Math.sqrt(Math.pow(this.lockArrow.x - this.arrowStartX, 2) + Math.pow(this.lockArrow.y - this.arrowStartY, 2));
            if (this.isLongWay) i > this.longLength && (t.SoundController.instance.playSound(t.SoundConsts.PickLockSuccess), this.moveBack = !0, this.itemToMove.isMoved = !0, this.checkIsWin() && (this.isLatestMove = !0, this.lockBridge.open())),
            i > this.shortLength && !this.moveBack && !this.itemToMove.isMoved && (this.itemToMove.shape.x += this.itemToMoveStepX, this.itemToMove.shape.y += this.itemToMoveStepY);
            else if (i > this.shortLength && (t.SoundController.instance.playSound(t.SoundConsts.PickLockNeutral), this.moveBack = !0, this.itemToMove.lockType == t.LockType.Bomb)) return t.AdManager.instance.isInterstitialAvailable() ? setTimeout(function() {
                t.AdManager.instance.showAd(function() {
                    e.onChestClosed && e.onChestClosed()
                })
            },
            500) : this.onChestClosed && this.onChestClosed(),
            void(this.isClickDisabled = !0);
            this.lockArrow.x <= this.arrowStartX + 1.1 && this.lockArrow.x >= this.arrowStartX - 1.1 && this.lockArrow.y <= this.arrowStartY + 1.1 && this.lockArrow.y >= this.arrowStartY - 1.1 && (this.lockArrow.x = this.arrowStartX, this.lockArrow.y = this.arrowStartY, this.isFly = !1)
        },
        o.prototype.rotateArrow = function() {
            this.clockwise ? this.lockArrow.angle += this.lockArrowRotateStep: this.lockArrow.angle -= this.lockArrowRotateStep,
            this.lockArrow.angle <= this.lockArrowAngle && this.lockArrow.angle > 0 && (this.clockwise = !0),
            this.lockArrow.angle >= -this.lockArrowAngle && this.lockArrow.angle < 0 && (this.clockwise = !1)
        },
        o.prototype.checkIsWin = function() {
            var e = !0;
            return this.items.forEach(function(i) {
                i.lockType !== t.LockType.Road || i.isMoved || (e = !1)
            }),
            e
        },
        o.prototype.destroy = function() {
            this.isTutorial && (t.GameStatus.isTutorialChestSeen = !0),
            i.prototype.destroy.call(this, !0)
        },
        o
    } (Phaser.Group);
    t.ChestUnlock = i