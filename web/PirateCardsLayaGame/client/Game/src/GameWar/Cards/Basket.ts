import KeyedCollection from "./KeyedCollection";
import GMath from "../GMath";
import GameStatus from "./GameStatus";
import { CardScoreType } from "../enums/CardScoreType";

export default class Basket
{
    status = new KeyedCollection();
    initialStatus = new KeyedCollection();

    updateVal: number = 0.2;
    step: number = 0.2;
    resetToZero: boolean = false;

    constructor(updateVal = 0.2, step = 0.2, resetToZero = false)
    {
        this.updateVal = updateVal,
        this.step = step,
        this.resetToZero = resetToZero
    }

    fillBasket(start, len) 
    {
        for (var i = start; i <= len; i++) 
        {
            var val = 3 - (i - 1) * this.step;
            if(  this.initialStatus.ContainsKey(i.toString()) )
            {
                this.initialStatus.Add(i.toString(), val);
                this.status.Add(i.toString(), val);
            }
            
        }
    }

    fillBasketWithStep(e, i, o, n) 
    {
        this.fillBasket(e, GMath.clamp(i + Math.floor(GameStatus.gameLevel / o), e, n))
    }

    getFromBasket() 
    {
        for (var t = this.status.Values().reduce(function(t, e) {
            return t + e
        }), e = Math.random() * t, i = 0, o = 0, n = this.status.Keys(); o < n.length; o++) {
            var s = n[o],
            a = this.status.Item(s);
            if (e > i && e < a + i) return this.removeFromBasket(s),
            s;
            i += a
        }
        throw new Error("Item not found in the basked")
    }
    removeFromBasket(t) {
        var e = this;
        this.status.Keys().forEach(function(i) {
            i === t ? e.resetToZero ? e.status.Add(t, 0) : e.status.Add(t, e.initialStatus.Item(t)) : e.status.Add(i, e.status.Item(i) + e.updateVal)
        })
    }

    static AfterChestBasket() {
        var i = new e(.5, .2, !0);
        return i.add(CardScoreType.Horseshoe.toString(), 1),
        i.add(CardScoreType.Bomb.toString(), 1),
        i.add(CardScoreType.Lightning.toString(), 1),
        i.add(CardScoreType.Skull.toString(), 1),
        i.add(CardScoreType.Multiplier.toString(), 1),
        i
    }
    add(t, e) {
        this.status.Add(t, e),
        this.initialStatus.Add(t, e)
    }
    print(t) {
        this.status.Values().reduce(function(t, e) {
            return t + e
        });
        for (var e = 0,
        i = this.status.Keys(); e < i.length; e++) {
            var o = i[e];
            this.status.Item(o),
            this.initialStatus.Item(o)
        }
        console.groupEnd()
    }
}
    
