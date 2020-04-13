var e = function() {
    return function(e, i, o) {
        this.isMoved = !1,
        this.section = e,
        i == t.ArtConsts.LockBomb ? this.lockType = t.LockType.Bomb: i == t.ArtConsts.LockRod || i == t.ArtConsts.LockDoubleRod ? this.lockType = t.LockType.Road: i != t.ArtConsts.LockFixedRod && i != t.ArtConsts.LockDoubleFixedRod || (this.lockType = t.LockType.Fix),
        this.shape = o
    }
} ();
t.LockItem = e