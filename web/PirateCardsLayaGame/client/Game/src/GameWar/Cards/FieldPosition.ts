var e = function() {
    function e(t, e) {
        this.column = t,
        this.row = e
    }
    return e.prototype.getNewPosition = function(i) {
        var o = new e(this.column, this.row);
        switch (i) {
        case t.MoveType.Right:
            o.column++;
            break;
        case t.MoveType.Down:
            o.row++;
            break;
        case t.MoveType.Left:
            o.column--;
            break;
        case t.MoveType.Up:
            o.row--
        }
        return o
    },
    e.prototype.getPoint = function() {
        var e = this.column * t.Consts.CardWidth + t.Consts.CardWidth / 2 + this.column * t.Consts.CardSpaceBetweenWidth,
        i = this.row * t.Consts.CardHeight + t.Consts.CardHeight / 2 + this.row * t.Consts.CardSpaceBetweenHeight;
        return new t.Point(e, i)
    },
    e
} ();
t.FieldPosition = e