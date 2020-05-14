export default class RandomDataGenerator
{
    c = 1;
    s0 = 0;
    s1 = 0;
    s2 = 0;
    constructor(t:any = [])
    {
        if(typeof t == "string")
        {
            this.state(t);
        }
        else
        {
            this.sow(t);
        }
    }

    reset(t:any = [])
    {
        this.c = 1;
        this.s0 = 0;
        this.s1 = 0;
        this.s2 = 0;

        
        if(typeof t == "string")
        {
            this.state(t);
        }
        else
        {
            this.sow(t);
        }
    }

    rnd() 
    {
        var t = 2091639 * this.s0 + 2.3283064365386963e-10 * this.c;
        this.c = 0 | t,
        this.s0 = this.s1,
        this.s1 = this.s2,
        this.s2 = t - this.c;
        return this.s2;
    }

    sow(t) 
    {
        if (this.s0 = this.hash(" "), this.s1 = this.hash(this.s0), this.s2 = this.hash(this.s1), this.c = 1, t) for (var e = 0; e < t.length && null != t[e]; e++) {
            var i = t[e];
            this.s0 -= this.hash(i),
            this.s0 += ~~ (this.s0 < 0),
            this.s1 -= this.hash(i),
            this.s1 += ~~ (this.s1 < 0),
            this.s2 -= this.hash(i),
            this.s2 += ~~ (this.s2 < 0)
        }
    }

    hash(t) {
        var e, i, s;
        for (s = 4022871197, t = t.toString(), i = 0; i < t.length; i++) e = .02519603282416938 * (s += t.charCodeAt(i)),
        e -= s = e >>> 0,
        s = (e *= s) >>> 0,
        s += 4294967296 * (e -= s);
        return 2.3283064365386963e-10 * (s >>> 0)
    }
    integer() {
        return 4294967296 * this.rnd.apply(this)
    }
    frac() {
        return this.rnd.apply(this) + 1.1102230246251565e-16 * (2097152 * this.rnd.apply(this) | 0)
    }
    real() {
        return this.integer() + this.frac()
    }
    integerInRange(t, e) {
        return Math.floor(this.realInRange(0, e - t + 1) + t)
    }
    between(t, e) {
        return this.integerInRange(t, e)
    }
    realInRange(t, e) {
        return this.frac() * (e - t) + t
    }
    normal() {
        return 1 - 2 * this.frac()
    }
    uuid() {
        var t = 0,
        e = "";
        for ( ;
            t++<36; 
            e += 
                ~t % 5 | 3 * t & 4 
                    ? (15 ^ t 
                            ? 8 ^ this.frac() * (20 ^ t 
                                    ? 16 : 4) 
                            : 4).toString(16) 
                    : "-"
            );
        return e
    }
    pick(t) {
        return t[this.integerInRange(0, t.length - 1)]
    }
    sign() {
        return this.pick([ - 1, 1])
    }
    weightedPick(t) {
        return t[~~ (Math.pow(this.frac(), 2) * (t.length - 1) + .5)]
    }
    timestamp(t, e) {
        return this.realInRange(t || 9466848e5, e || 1577862e6)
    }
    angle() {
        return this.integerInRange( - 180, 180)
    }
    state(t) {
        return "string" == typeof t && t.match(/^!rnd/) && (t = t.split(","), this.c = parseFloat(t[1]), this.s0 = parseFloat(t[2]), this.s1 = parseFloat(t[3]), this.s2 = parseFloat(t[4])),
        ["!rnd", this.c, this.s0, this.s1, this.s2].join(",")
    }
}