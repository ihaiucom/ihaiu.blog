var e = function(e) {
    function i(t, i) {
        var o = e.call(this, t, i) || this;
        return o.isOnClickInitiated = !1,
        o.powerUpAmount = 0,
        o.lifeAmount = 0,
        o
    }
    return __extends(i, e),
    i.GetDefault = function(t, e) {
        return new i(t, e)
    },
    i.GetNew = function(e, o, n, s) {
        var a = new i(e, o);
        return a.type = n,
        a.setScore(s),
        t.GameStatus.updateCardCounter(n),
        t.GameStatus.updateMovesAfterSpecialCard(n),
        a
    },
    i.prototype.stepUpdate = function() {
        var e = this.shape.getByName(t.Consts.CardManAnimation);
        if (e instanceof t.Trap) {
            var i = e.changeStatus(),
            o = t.GameStatus.currentHero == t.HeroType.Gun;
            this.lifeAmount = o ? 0 : i ? this.powerUpAmount: 0,
            this.setHealthText()
        }
        this.type == t.CardScoreType.Poison && this.setPowerUp(this.powerUpAmount + 1),
        this.type == t.CardScoreType.Bomb && this.setPowerUp(this.powerUpAmount - 1),
        this.type == t.CardScoreType.Barrel && this.powerUpAmount > 2 && this.setPowerUp(this.powerUpAmount - 1)
    },
    i.prototype.getScore = function() {
        return this.type == t.CardScoreType.Trap ? this.lifeAmount: this.lifeAmount + this.powerUpAmount
    },
    i.prototype.getLife = function() {
        return this.lifeAmount
    },
    i.prototype.getPowerUp = function() {
        return this.powerUpAmount
    },
    i.prototype.multiplyScore = function(t) {
        return this.lifeAmount > 0 ? this.getScaleTween(this.getCardLifeText(), this.increaseLife, t) : this.powerUpAmount > 0 ? this.getScaleTween(this.getPowerUpText(), this.increasePowerUp, t) : null
    },
    i.prototype.increaseLife = function(e, i, o) {
        this.setLife(this.lifeAmount * o),
        this.type === t.CardScoreType.Trap && this.setPowerUp(this.powerUpAmount * o)
    },
    i.prototype.increasePowerUp = function(t, e, i) {
        this.setPowerUp(this.powerUpAmount * i)
    },
    i.prototype.reduceScoreInNSeconds = function(t, e) {
        this.powerUpAmount > 0 && (this.powerUpAmount = this.powerUpAmount - t, setTimeout(this.setPowerUpText.bind(this), e)),
        this.lifeAmount > 0 && (this.lifeAmount = this.lifeAmount - t, setTimeout(this.setHealthText.bind(this), e))
    },
    i.prototype.increaseScoreInNSeconds = function(t, e) {
        this.powerUpAmount > 0 && (this.powerUpAmount = this.powerUpAmount + t, setTimeout(this.increasePowerUpTween.bind(this), e)),
        this.lifeAmount > 0 && (this.lifeAmount = this.lifeAmount + t, setTimeout(this.increaseLifeTween.bind(this), e))
    },
    i.prototype.increasePowerUpTween = function() {
        this.getScaleTween(this.getPowerUpText(), this.setPowerUpText, this.powerUpAmount).start()
    },
    i.prototype.increaseLifeTween = function() {
        this.getScaleTween(this.getCardLifeText(), this.setHealthText, this.lifeAmount).start()
    },
    i.prototype.setScore = function(e) {
        switch (this.type) {
        case t.CardScoreType.Warrior:
            this.initialLife = e,
            this.setLife(e);
            break;
        case t.CardScoreType.Gold:
        case t.CardScoreType.Health:
        case t.CardScoreType.Armor:
        case t.CardScoreType.Poison:
        case t.CardScoreType.Cannon:
        case t.CardScoreType.Lightning:
        case t.CardScoreType.Multiplier:
        case t.CardScoreType.Skull:
        case t.CardScoreType.Barrel:
            this.setPowerUp(e);
            break;
        case t.CardScoreType.Bomb:
            this.setLife(e),
            this.setPowerUp(10);
            break;
        case t.CardScoreType.Trap:
            this.setPowerUp(e),
            this.setLife(e);
            break;
        case t.CardScoreType.Chest:
            break;
        case t.CardScoreType.Horseshoe:
            this.setPowerUp(1)
        }
    },
    i.prototype.setPowerUp = function(t) {
        this.powerUpAmount = t,
        this.setPowerUpText()
    },
    i.prototype.setLife = function(t) {
        this.lifeAmount = t,
        this.setHealthText()
    },
    i.prototype.setHealthText = function() {
        var t = this.getCardLifeText();
        t && t && t.setText(this.lifeAmount.toString())
    },
    i.prototype.setPowerUpText = function() {
        var t = this.getPowerUpText();
        t && t && t.setText(this.powerUpAmount.toString())
    },
    i.prototype.getPowerUpText = function() {
        return this.shape.getByName(t.Consts.PowerUp)
    },
    i.prototype.setOnClickEvent = function(e, i, o) {
        if (!this.isOnClickInitiated) for (var n = 0; n < this.shape.children.length; n++) {
            var s = this.shape.children[n];
            s.name == t.Consts.BackgroundName && (s.inputEnabled = !0, s.events.onInputDown.add(e, o, 1, this), s.events.onInputUp.add(i, o, 1, this), this.isOnClickInitiated = !0)
        }
    },
    i.prototype.isNegative = function() {
        switch (this.type) {
        case t.CardScoreType.Trap:
        case t.CardScoreType.Warrior:
        case t.CardScoreType.Bomb:
        case t.CardScoreType.Poison:
            return ! 0;
        case t.CardScoreType.Health:
        case t.CardScoreType.Gold:
        case t.CardScoreType.Armor:
        case t.CardScoreType.Cannon:
        case t.CardScoreType.Chest:
        case t.CardScoreType.Barrel:
        case t.CardScoreType.Horseshoe:
        case t.CardScoreType.Lightning:
        case t.CardScoreType.Multiplier:
        case t.CardScoreType.Skull:
            return ! 1
        }
    },
    i.prototype.isBoss = function() {
        return this.type == t.CardScoreType.Warrior && this.shape.getByName(t.Consts.CardManAnimation) instanceof t.Boss
    },
    i.prototype.getGoldValue = function() {
        return this.initialLife
    },
    i
} (t.CardBase);
t.Card = e