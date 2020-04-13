import GMath from "./GMath";

export default class ArrayUtils
{
    static getRandomItem(arr, e?, i?) {
        if (null === arr) return null;
        void 0 === e && (e = 0),
        void 0 === i && (i = arr.length);
        var s = e + Math.floor(Math.random() * i);
        return void 0 === arr[s] ? null: arr[s]
    }

    static removeRandomItem(t, e?, i?) {
        if (null == t) return null;
        void 0 === e && (e = 0),
        void 0 === i && (i = t.length);
        var s = e + Math.floor(Math.random() * i);
        if (s < t.length) {
            var n = t.splice(s, 1);
            return void 0 === n[0] ? null: n[0]
        }
        return null
    }

    static remove(t, e, i) {
        var s = t.length;
        if (! (e >= s || 0 === i)) {
            null == i && (i = 1);
            for (var n = s - i,
            r = e; r < n; ++r) t[r] = t[r + i];
            t.length = n
        }
    }

    static shuffle(t) {
        for (var e = t.length - 1; e > 0; e--) {
            var i = Math.floor(Math.random() * (e + 1)),
            s = t[e];
            t[e] = t[i],
            t[i] = s
        }
        return t
    }

    static transposeMatrix(t) {
        for (var e = t.length,
        i = t[0].length, s = new Array(i), n = 0; n < i; n++) {
            s[n] = new Array(e);
            for (var r = e - 1; r > -1; r--) s[n][r] = t[r][n]
        }
        return s
    }

    static rotateMatrix(e, i) {
        if ("string" != typeof i && (i = (i % 360 + 360) % 360), 90 === i || -270 === i || "rotateLeft" === i) e = (e = ArrayUtils.transposeMatrix(e)).reverse();
        else if ( - 90 === i || 270 === i || "rotateRight" === i) e = e.reverse(),
        e = ArrayUtils.transposeMatrix(e);
        else if (180 === Math.abs(i) || "rotate180" === i) {
            for (var s = 0; s < e.length; s++) e[s].reverse();
            e = e.reverse()
        }
        return e
    }

    static findClosest(t, e) {
        if (!e.length) return NaN;
        if (1 === e.length || t < e[0]) return e[0];
        for (var i = 1; e[i] < t;) i++;
        var s = e[i - 1],
        n = i < e.length ? e[i] : Number.POSITIVE_INFINITY;
        return n - t <= t - s ? n: s
    }

    static rotateRight(t) {
        var e = t.pop();
        return t.unshift(e),
        e
    }
    static rotateLeft(t) {
        var e = t.shift();
        return t.push(e),
        e
    }

    static numberArray(t, e) {
        null != e || (e = t, t = 0);
        for (var i = [], s = t; s <= e; s++) i.push(s);
        return i
    }

    static numberArrayStep(e, i, s) {
        null != e || (e = 0),
        null != i || (i = e, e = 0),
        void 0 === s && (s = 1);
        for (var n = [], r = Math.max(GMath.roundAwayFromZero((i - e) / (s || 1)), 0), o = 0; o < r; o++) n.push(e),
        e += s;
        return n
    }
}