var e = function() {
    function e(t) {
        this.upKey = t.input.keyboard.addKey(Phaser.Keyboard.UP),
        this.downKey = t.input.keyboard.addKey(Phaser.Keyboard.DOWN),
        this.leftKey = t.input.keyboard.addKey(Phaser.Keyboard.LEFT),
        this.rightKey = t.input.keyboard.addKey(Phaser.Keyboard.RIGHT),
        this.spaceKey = t.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR),
        this.swipe = new Swipe(t),
        this.reset()
    }
    return e.prototype.reset = function() {
        this.isUp = !1,
        this.isDown = !1,
        this.isLeft = !1,
        this.isRight = !1,
        this.isSpace = !1
    },
    e.prototype.update = function() {
        if (!this.isPressed()) {
            if (t.GameStatus.isTutorialSeen) this.checkSwipe();
            else if (t.GameStatus.isTutorialStep2Done) this.checkSwipe();
            else if (t.GameStatus.isTutorialStep1Done) {
                if ((e = this.swipe.check()) && e.direction === this.swipe.DIRECTION_DOWN) return void(this.isDown = !0)
            } else {
                var e;
                if ((e = this.swipe.check()) && e.direction === this.swipe.DIRECTION_RIGHT) return void(this.isRight = !0)
            }
            this.spaceKey.isDown && (this.isSpace = !0)
        }
    },
    e.prototype.getMoveType = function() {
        return this.isDown ? t.MoveType.Down: this.isLeft ? t.MoveType.Left: this.isRight ? t.MoveType.Right: this.isUp ? t.MoveType.Up: null
    },
    e.prototype.isPressed = function() {
        return this.isUp || this.isDown || this.isLeft || this.isRight || this.isSpace
    },
    e.prototype.checkSwipe = function() {
        var t = this.swipe.check();
        if (null != t) switch (t.direction) {
        case this.swipe.DIRECTION_LEFT:
            return void(this.isLeft = !0);
        case this.swipe.DIRECTION_RIGHT:
            return void(this.isRight = !0);
        case this.swipe.DIRECTION_UP:
            return void(this.isUp = !0);
        case this.swipe.DIRECTION_DOWN:
            return void(this.isDown = !0);
        default:
            return
        }
    },
    e
} ();
t.KeyboardManager = e