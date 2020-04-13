var e = function() {
    function e(t, e) {
        this.items = Array(),
        this.columnCount = t,
        this.rowCount = e,
        this.initArray()
    }
    return e.prototype.initArray = function() {
        this.items = [];
        for (var e = 0; e < this.rowCount; e++) {
            for (var i = [], o = 0; o < this.columnCount; o++) i.push(new t.NullCard(null));
            this.items.push(i)
        }
    },
    e.prototype.getColumnCount = function() {
        return this.columnCount
    },
    e.prototype.getRowCount = function() {
        return this.rowCount
    },
    e.prototype.getAll = function() {
        for (var t = [], e = 0; e < this.rowCount; e++) for (var i = 0; i < this.columnCount; i++) t.push(this.items[i][e]);
        return t
    },
    e.prototype.getPosition = function(e) {
        for (var i = 0; i < this.rowCount; i++) for (var o = 0; o < this.columnCount; o++) {
            var n = new t.FieldPosition(o, i);
            if (e(this.get(n))) return n
        }
        return null
    },
    e.prototype.getPositions = function(e) {
        for (var i = [], o = 0; o < this.rowCount; o++) for (var n = 0; n < this.columnCount; n++) {
            var s = new t.FieldPosition(n, o);
            e(this.get(s)) && i.push(s)
        }
        return i
    },
    e.prototype.get = function(t) {
        return this.items[t.column][t.row]
    },
    e.prototype.set = function(t, e) {
        this.items[t.column][t.row] = e
    },
    e.prototype.any = function(e) {
        for (var i = 0; i < this.rowCount; i++) for (var o = 0; o < this.columnCount; o++) {
            var n = new t.FieldPosition(o, i);
            if (e(this.get(n))) return ! 0
        }
        return ! 1
    },
    e.prototype.isPositionValid = function(t) {
        return t.column >= 0 && t.column < this.columnCount && t.row >= 0 && t.row < this.rowCount
    },
    e
} ();
t.FieldItems = e