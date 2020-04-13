var e = function() {
    return function() {
        this.gold = 0,
        this.bestGoldPerGame = 0,
        this.isTutorialSeen = !1,
        this.isTutorialStep1Done = !1,
        this.isTutorialStep2Done = !1,
        this.isTutorialChestSeen = !1,
        this.isBombHero = !1,
        this.isKeyHero = !1,
        this.isGunHero = !1,
        this.isFourXFour = !1,
        this.isHorseshoe = !1,
        this.isHeart = !1,
        this.isLuck = !1,
        this.isKey = !1,
        this.lastAdvCoolDown = null,
        this.lastItemWithAdv = 0,
        this.lastResultAdvCoolDown = 0
    }
} ();
t.LocalStorageData = e;