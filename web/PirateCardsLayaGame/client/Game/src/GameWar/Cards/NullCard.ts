var e = function(t) {
    function e(e) {
        return t.call(this, null, e) || this
    }
    return __extends(e, t),
    e.prototype.getScore = function() {
        return 0
    },
    e.prototype.reduceScoreInNSeconds = function(t, e) {},
    e.prototype.increaseScoreInNSeconds = function(t, e) {},
    e.prototype.stepUpdate = function() {},
    e.prototype.isNegative = function() {
        return ! 1
    },
    e.prototype.getGoldValue = function() {
        return 0
    },
    e
} (t.CardBase);
t.NullCard = e