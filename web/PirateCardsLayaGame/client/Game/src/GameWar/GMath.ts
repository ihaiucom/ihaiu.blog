export default class GMath
{
    static PI2 = 2 * Math.PI;
    static HALF_PI = .5 * Math.PI;
    static DEG_TO_RAD = Math.PI / 180;
    static RAD_TO_DEG = 180 / Math.PI;

    static degToRad(deg) 
    {
        return deg * GMath.DEG_TO_RAD
    }

    static radToDeg(rad) 
    {
        return rad * GMath.RAD_TO_DEG
    }

    static getNextPowerOfTwo(v) 
    {
        if (v > 0 && 0 == (v & v - 1)) return v;
        for (var e = 1; e < v;) e <<= 1;
        return e
    }

    static isPowerOfTwo(t, e) {
        return t > 0 && 0 == (t & t - 1) && e > 0 && 0 == (e & e - 1)
    }

    static random(t, e) {
        if (void 0 === t && (t = 0), void 0 === e && (e = 1), t === e) return t;
        if (t > e) {
            var i = t;
            t = e,
            e = i
        }
        return Math.random() * (e - t) + t
    }

    static between(t, e) {
        if (void 0 === t && (t = 0), void 0 === e && (e = 1), t === e) return t;
        if (t > e) {
            var i = t;
            t = e,
            e = i
        }
        return t = Math.ceil(t),
        e = Math.floor(e),
        Math.floor(Math.random() * (e - t + 1)) + t
    }

    static fuzzyEqual(t, e, i) {
        return void 0 === i && (i = 1e-4),
        Math.abs(t - e) < i
    }

    static fuzzyLessThan(t, e, i) {
        return void 0 === i && (i = 1e-4),
        t < e + i
    }

    static fuzzyGreaterThan(t, e, i) {
        return void 0 === i && (i = 1e-4),
        t > e - i
    }

    static fuzzyCeil(t, e) {
        return void 0 === e && (e = 1e-4),
        Math.ceil(t - e)
    }

    static fuzzyFloor(t, e) {
        return void 0 === e && (e = 1e-4),
        Math.floor(t + e)
    }

    static average() {
        for (var t = 0,
        e = (<any>arguments).length,
        i = 0; i < e; i++) t += +arguments[i];
        return t / e
    }

    static shear(t) {
        return t % 1
    }

    static snapTo(t, e, i) {
        return void 0 === i && (i = 0),
        0 === e ? t: (t -= i, i + (t = e * Math.round(t / e)))
    }

    static snapToFloor(t, e, i) {
        return void 0 === i && (i = 0),
        0 === e ? t: (t -= i, i + (t = e * Math.floor(t / e)))
    }

    static snapToCeil(t, e, i) {
        return void 0 === i && (i = 0),
        0 === e ? t: (t -= i, i + (t = e * Math.ceil(t / e)))
    }

    static roundTo(t, e, i) {
        void 0 === e && (e = 0),
        void 0 === i && (i = 10);
        var s = Math.pow(i, -e);
        return Math.round(t * s) / s
    }

    static floorTo(t, e, i) {
        void 0 === e && (e = 0),
        void 0 === i && (i = 10);
        var s = Math.pow(i, -e);
        return Math.floor(t * s) / s
    }

    static ceilTo(t, e, i) {
        void 0 === e && (e = 0),
        void 0 === i && (i = 10);
        var s = Math.pow(i, -e);
        return Math.ceil(t * s) / s
    }

    static trunc(t) {
        return isFinite(t) ? t - t % 1 || (t < 0 ? -0 : 0 === t ? t: 0) : t
    }

    static rotateToAngle(e, i, s) {
        return void 0 === s && (s = .05),
        e === i ? e: (Math.abs(i - e) <= s || Math.abs(i - e) >= GMath.PI2 - s ? e = i: (Math.abs(i - e) > Math.PI && (i < e ? i += GMath.PI2: i -= GMath.PI2), i > e ? e += s: i < e && (e -= s)), e)
    }

    static getShortestAngle(t, e) {
        var i = e - t;
        return 0 === i ? 0 : i - 360 * Math.floor((i - -180) / 360)
    }

    static angleBetween(t, e, i, s) {
        return Math.atan2(s - e, i - t)
    }

    static angleBetweenY(t, e, i, s) {
        return Math.atan2(i - t, s - e)
    }

    static angleBetweenPoints(t, e) {
        return Math.atan2(e.y - t.y, e.x - t.x)
    }

    static angleBetweenPointsY(t, e) {
        return Math.atan2(e.x - t.x, e.y - t.y)
    }

    static reverseAngle(t) {
        return this.normalizeAngle(t + Math.PI)
    }

    static normalizeAngle(t) {
        return (t %= 2 * Math.PI) >= 0 ? t: t + 2 * Math.PI
    }

    static maxAdd(t, e, i) {
        return Math.min(t + e, i)
    }

    static minSub(t, e, i) {
        return Math.max(t - e, i)
    }

    static wrap(t, e, i) {
        var s = i - e;
        if (s <= 0) return 0;
        var n = (t - e) % s;
        return n < 0 && (n += s),
        n + e
    }

    static wrapValue(t, e, i) {
        return ((t = Math.abs(t)) + (e = Math.abs(e))) % (i = Math.abs(i))
    }

    static isOdd(t) {
        return !! (1 & t)
    }

    static isEven(t) {
        return ! (1 & t)
    }

    static min() {
        if (1 === (<any>arguments).length && "object" == typeof arguments[0]) t = arguments[0];
        else var t = arguments;
        for (var e = 1,
        i = 0,
        s = t.length; e < s; e++) t[e] < t[i] && (i = e);
        return t[i]
    }

    static max() {
        if (1 === (<any>arguments).length && "object" == typeof arguments[0]) t = arguments[0];
        else var t = arguments;
        for (var e = 1,
        i = 0,
        s = t.length; e < s; e++) t[e] > t[i] && (i = e);
        return t[i]
    }

    static minProperty(t) {
        if (2 === (<any>arguments).length && "object" == typeof arguments[1]) e = arguments[1];
        else var e = (<any>arguments).slice(1);
        for (var i = 1,
        s = 0,
        n = e.length; i < n; i++) e[i][t] < e[s][t] && (s = i);
        return e[s][t]
    }

    static maxProperty(t) {
        if (2 === (<any>arguments).length && "object" == typeof arguments[1]) e = arguments[1];
        else var e = (<any>arguments).slice(1);
        for (var i = 1,
        s = 0,
        n = e.length; i < n; i++) e[i][t] > e[s][t] && (s = i);
        return e[s][t]
    }

    static wrapAngle(t, e) {
        return e ? this.wrap(t, -Math.PI, Math.PI) : this.wrap(t, -180, 180)
    }

    static linearInterpolation(t, e) {
        var i = t.length - 1,
        s = i * e,
        n = Math.floor(s);
        return e < 0 ? this.linear(t[0], t[1], s) : e > 1 ? this.linear(t[i], t[i - 1], i - s) : this.linear(t[n], t[n + 1 > i ? i: n + 1], s - n)
    }

    static bezierInterpolation(t, e) {
        for (var i = 0,
        s = t.length - 1,
        n = 0; n <= s; n++) i += Math.pow(1 - e, s - n) * Math.pow(e, n) * t[n] * this.bernstein(s, n);
        return i
    }

    static catmullRomInterpolation(t, e) {
        var i = t.length - 1,
        s = i * e,
        n = Math.floor(s);
        return t[0] === t[i] ? (e < 0 && (n = Math.floor(s = i * (1 + e))), this.catmullRom(t[(n - 1 + i) % i], t[n], t[(n + 1) % i], t[(n + 2) % i], s - n)) : e < 0 ? t[0] - (this.catmullRom(t[0], t[0], t[1], t[1], -s) - t[0]) : e > 1 ? t[i] - (this.catmullRom(t[i], t[i], t[i - 1], t[i - 1], s - i) - t[i]) : this.catmullRom(t[n ? n - 1 : 0], t[n], t[i < n + 1 ? i: n + 1], t[i < n + 2 ? i: n + 2], s - n)
    }

    static linear(t, e, i) {
        return (e - t) * i + t
    }

    static bernstein(t, e) {
        return this.factorial(t) / this.factorial(e) / this.factorial(t - e)
    }

    static factorial(t) {
        if (0 === t) return 1;
        for (var e = t; --t;) e *= t;
        return e
    }

    static catmullRom(t, e, i, s, n) {
        var r = .5 * (i - t),
        o = .5 * (s - e),
        a = n * n;
        return (2 * e - 2 * i + r + o) * (n * a) + ( - 3 * e + 3 * i - 2 * r - o) * a + r * n + e
    }

    static difference(t, e) {
        return Math.abs(t - e)
    }

    static roundAwayFromZero(t) {
        return t > 0 ? Math.ceil(t) : Math.floor(t)
    }

    static sinCosGenerator(t, e, i, s) {
        void 0 === e && (e = 1),
        void 0 === i && (i = 1),
        void 0 === s && (s = 1);
        for (var n = e,
        r = i,
        o = s * Math.PI / t,
        a = [], h = [], l = 0; l < t; l++) n += (r -= n * o) * o,
        a[l] = r,
        h[l] = n;
        return {
            sin: h,
            cos: a,
            length: t
        }
    }

    static hypot(t, e) {
        return Math.sqrt(t * t + e * e)
    }

    static distance(t, e, i, s) {
        var n = t - i,
        r = e - s;
        return Math.sqrt(n * n + r * r)
    }

    static distanceSq(t, e, i, s) {
        var n = t - i,
        r = e - s;
        return n * n + r * r
    }

    static distancePow(t, e, i, s, n) {
        return void 0 === n && (n = 2),
        Math.sqrt(Math.pow(i - t, n) + Math.pow(s - e, n))
    }

    static clamp(t, e, i) {
        return t < e ? e: i < t ? i: t
    }

    static clampBottom(t, e) {
        return t < e ? e: t
    }

    static within(t, e, i) {
        return Math.abs(t - e) <= i
    }

    static mapLinear(t, e, i, s, n) {
        return s + (t - e) * (n - s) / (i - e)
    }

    static smoothstep(t, e, i) {
        return (t = Math.max(0, Math.min(1, (t - e) / (i - e)))) * t * (3 - 2 * t)
    }

    static smootherstep(t, e, i) {
        return (t = Math.max(0, Math.min(1, (t - e) / (i - e)))) * t * t * (t * (6 * t - 15) + 10)
    }

    static sign(t) {
        return t < 0 ? -1 : t > 0 ? 1 : 0
    }

    static percent(t, e, i) {
        return void 0 === i && (i = 0),
        t > e || i > e ? 1 : t < i || i > t ? 0 : (t - i) / e
    }
}