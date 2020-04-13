var i = function() {
    function i() {}
    return Object.defineProperty(i, "gold", {
        get: function() {
            return i.data.gold
        },
        set: function(t) {
            i.data.gold = t,
            i.save()
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(i, "bestGoldPerGame", {
        get: function() {
            return i.data.bestGoldPerGame
        },
        set: function(t) {
            i.data.bestGoldPerGame = t,
            i.save()
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(i, "isTutorialSeen", {
        get: function() {
            return i.data.isTutorialSeen
        },
        set: function(e) {
            i.data.isTutorialSeen = e,
            i.save(),
            0 == t.Consts.IsAndroid && window.famobi_analytics.trackEvent(window.famobi_analytics.EVENT_TUTORIALCOMPLETED)
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(i, "isTutorialStep1Done", {
        get: function() {
            return i.data.isTutorialStep1Done
        },
        set: function(t) {
            i.data.isTutorialStep1Done = t,
            i.save()
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(i, "isTutorialStep2Done", {
        get: function() {
            return i.data.isTutorialStep2Done
        },
        set: function(t) {
            i.data.isTutorialStep2Done = t,
            i.save()
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(i, "isTutorialChestSeen", {
        get: function() {
            return i.data.isTutorialChestSeen
        },
        set: function(t) {
            i.data.isTutorialChestSeen = t,
            i.save()
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(i, "isBombHero", {
        get: function() {
            return i.data.isBombHero
        },
        set: function(t) {
            i.data.isBombHero = t,
            i.save()
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(i, "isKeyHero", {
        get: function() {
            return i.data.isKeyHero
        },
        set: function(t) {
            i.data.isKeyHero = t,
            i.save()
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(i, "isGunHero", {
        get: function() {
            return i.data.isGunHero
        },
        set: function(t) {
            i.data.isGunHero = t,
            i.save()
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(i, "isFourXFour", {
        get: function() {
            return i.data.isFourXFour
        },
        set: function(t) {
            i.data.isFourXFour = t,
            i.save()
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(i, "isHorseshoe", {
        get: function() {
            return i.data.isHorseshoe
        },
        set: function(t) {
            i.data.isHorseshoe = t,
            i.save()
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(i, "isHeart", {
        get: function() {
            return i.data.isHeart
        },
        set: function(t) {
            i.data.isHeart = t,
            i.save()
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(i, "isLuck", {
        get: function() {
            return i.data.isLuck
        },
        set: function(t) {
            i.data.isLuck = t,
            i.save()
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(i, "isKey", {
        get: function() {
            return i.data.isKey
        },
        set: function(t) {
            i.data.isKey = t,
            i.save()
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(i, "lastAdvCoolDown", {
        get: function() {
            return i.data.lastAdvCoolDown
        },
        set: function(t) {
            i.data.lastAdvCoolDown = t,
            i.save()
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(i, "lastResultAdvCoolDown", {
        get: function() {
            return i.data.lastResultAdvCoolDown
        },
        set: function(t) {
            i.data.lastResultAdvCoolDown = t,
            i.save()
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(i, "lastItemWithAdv", {
        get: function() {
            return i.data.lastItemWithAdv
        },
        set: function(t) {
            i.data.lastItemWithAdv = t,
            i.save()
        },
        enumerable: !0,
        configurable: !0
    }),
    i.addGold = function(t) {
        i.goldPerGame += t,
        i.bestGoldPerGame < i.goldPerGame && (i.bestGoldPerGame = i.goldPerGame)
    },
    i.init = function() {
        i.gameLevel = 1,
        i.levelStep = 10,
        i.turnsToBoss = i.levelStep,
        i.goldPerGame = 0,
        i.movesAfterLastSpecialCard = 0,
        i.cardCounter = 0,
        i.isNeedCreateBoss = !1,
        i.currentHero == t.HeroType.Key && (i.isKey = !0)
    },
    i.resetShop = function() {
        i.isHeart = !1,
        i.isHorseshoe = !1,
        i.isLuck = !1,
        i.isKey = !1
    },
    i.updateMovesAfterSpecialCard = function(e) {
        e == t.CardScoreType.Health || e == t.CardScoreType.Armor ? i.movesAfterLastSpecialCard = 0 : i.movesAfterLastSpecialCard++
    },
    i.updateCardCounter = function(e) {
        t.CardScoreTypeHelper.isCardScoreTypeNegative(e) && i.cardCounter--,
        t.CardScoreTypeHelper.isCardScoreTypePositive(e) && i.cardCounter++
    },
    i.stepUpdate = function() {
        i.isBossShouldBeCreated() && (i.isNeedCreateBoss = !0, i.levelStep++, i.turnsToBoss = i.levelStep + 1),
        i.isNeedCreateChestOnNextStep && (i.isNeedCreateChestOnNextStep = !1, i.isNeedCreateChest = !0)
    },
    i.isBossShouldBeCreated = function() {
        return ! i.isNeedCreateBoss && 1 == i.turnsToBoss
    },
    i.decreaseTurnsToBoss = function() {
        i.turnsToBoss > 0 && i.turnsToBoss--
    },
    i.save = function() {
        t.Consts.IsAndroid ? localStorage.setItem(t.Consts.StorageName, JSON.stringify(i.data)) : window.famobi.localStorage.setItem(t.Consts.StorageName, JSON.stringify(i.data))
    },
    i.load = function() {
        return t.Consts.IsAndroid ? JSON.parse(localStorage.getItem(t.Consts.StorageName)) || new e: (window.famobi = window.famobi || {},
        window.famobi.localStorage = window.famobi.localStorage || window.localStorage, JSON.parse(window.famobi.localStorage.getItem(t.Consts.StorageName)) || new e)
    },
    i.data = i.load(),
    i.levelStep = 10,
    i.RowCount = 3,
    i.ColumnCount = 3,
    i
} ();
t.GameStatus = i