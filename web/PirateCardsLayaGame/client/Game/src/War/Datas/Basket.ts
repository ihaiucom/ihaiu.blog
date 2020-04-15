import KeyedCollection from "../../GameWar/Cards/KeyedCollection";
import GMath from "../Utils/GMath";
import GameStatus from "./GameStatus";
import { CardScoreType } from "../Enums/CardScoreType";

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

    fillBasketWithStep(start, val, level, max) 
    {
        this.fillBasket(start, GMath.clamp(val + Math.floor(GameStatus.gameLevel / level), start, max))
    }

    // 随机获取集合里的值
    getFromBasket() 
    {
        var statusValTotal = this.status.Values().reduce(function(t, e) {
            return t + e
        });

        var randomVal = Math.random() * statusValTotal;
        var total = 0;

        for (var o = 0, keys = this.status.Keys(); o < keys.length; o++) 
        {
            var key = keys[o],
            val = this.status.Item(key);
            if (randomVal > total && randomVal < val + total)
            {
                // 将该key值概率减少
                this.removeFromBasket(key);
                return key;
            }
            total += val
        }
        throw new Error("Item not found in the basked")
    }

    // 将该值概率减少
    removeFromBasket(key) 
    {
        this.status.Keys().forEach((itemKey) =>
        {
            if(itemKey === key )
            {
                if(this.resetToZero)
                {
                    this.status.Add(key, 0) 
                }
                else
                {
                    this.status.Add(key, this.initialStatus.Item(key)) 
                }
            }
            else
            {
                this.status.Add(itemKey, this.status.Item(itemKey) + this.updateVal)
            }
        })
    }

    // 替换宝箱的卡牌类型
    static AfterChestBasket() {
        var basket = new Basket(.5, .2, !0);
        // 马蹄铁
        basket.add(CardScoreType.Horseshoe.toString(), 1),
        // 炸弹
        basket.add(CardScoreType.Bomb.toString(), 1),
        // 闪电
        basket.add(CardScoreType.Lightning.toString(), 1),
        // 骷髅
        basket.add(CardScoreType.Skull.toString(), 1),
        // 倍数
        basket.add(CardScoreType.Multiplier.toString(), 1);
        return basket;
    }
    add(key, val) {
        this.status.Add(key, val),
        this.initialStatus.Add(key, val)
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
    
