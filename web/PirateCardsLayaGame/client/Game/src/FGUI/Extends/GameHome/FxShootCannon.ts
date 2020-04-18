/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FxShootCannonStruct from "../../Generates/GameHome/FxShootCannonStruct";
import TweenContainer from "../../../War/Utils/TweenContainer";
import TweenUtil from "../../../War/Utils/TweenUtil";
import FxShootSmoke from "./FxShootSmoke";
import FxShootBoom from "./FxShootBoom";

export default class FxShootCannon extends FxShootCannonStruct
{
    static PoolGet():FxShootCannon
    {
        var item =  Pool.getItem(this.URL);
        if(!item)
        {
            item = FxShootCannon.createInstance();
        }
        return item;
    }

    PoolRecover()
    {
        Laya.timer.clearAll(this);
        Laya.Tween.clearAll(this);
        this.removeFromParent();
        Pool.recover(FxShootCannon.URL, this);
    }

    moveTo(fromX: number, fromY: number, toX: number, toY: number, duration: number)
    {
        this.setXY(fromX, fromY);
        this.tweenProgress = 0;
        var tweenContainer = TweenContainer.PoolGet();
        var tween = TweenUtil.to(this, {x: toX, y:toY, tweenProgress: 100}, duration, null, Laya.Handler.create(this, this.onMoveEnd));
        tweenContainer.tweens.push(tween);
        return tweenContainer;
    }

    private _tweenProgress = 0;
    get tweenProgress()
    {
        return this._tweenProgress;
    }

    set tweenProgress(val: number)
    {
        this._tweenProgress = val;

        if(Math.floor(val) % 10 && this.parent)
        {
            var fx = FxShootSmoke.PoolGet();
            this.parent.addChild(fx);
            fx.setXY(this.x, this.y);
            fx.Play();
        }

    }

    onMoveEnd()
    {
        if(this.parent)
        {
            var fx = FxShootBoom.PoolGet();
            this.parent.addChild(fx);
            fx.setXY(this.x, this.y);
            fx.Play();
        }

        Laya.timer.frameOnce(2, this, this.PoolRecover);

    }

}