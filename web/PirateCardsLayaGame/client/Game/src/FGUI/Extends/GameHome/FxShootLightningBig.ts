/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FxShootLightningBigStruct from "../../Generates/GameHome/FxShootLightningBigStruct";
import TweenContainer from "../../../War/Utils/TweenContainer";
import TweenUtil from "../../../War/Utils/TweenUtil";
import FxShootLightningSmall from "./FxShootLightningSmall";
import Consts from "../../../War/Enums/Consts";
import RandomHelper from "../../../War/Utils/RandomHelper";

export default class FxShootLightningBig extends FxShootLightningBigStruct
{
    static PoolGet():FxShootLightningBig
    {
        var item =  Pool.getItem(this.URL);
        if(!item)
        {
            item = FxShootLightningBig.createInstance();
        }
        return item;
    }

    PoolRecover()
    {
        Laya.timer.clearAll(this);
        Laya.Tween.clearAll(this.m_fx);
        this.removeFromParent();
        this.m_fx.playing = false;
        Pool.recover(FxShootLightningBig.URL, this);
    }

    Play()
    {
        this.m_fx.frame = 0;
        this.m_fx.playing = true;
        var delay = Math.floor(18 * 1000 / 24);
        
        this.m_fx.alpha = 0;
        this.m_fx.y = 20;


        var tweenContainer = TweenContainer.PoolGet();
        var tween = TweenUtil.to(this.m_fx, {alpha: 1}, 50);
        tweenContainer.tweens.push(tween);
        
        var tween = TweenUtil.to(this.m_fx, {y: -20}, 200, null, null, 50);
        tweenContainer.tweens.push(tween);

        var tween = TweenUtil.to(this.m_fx, {alpha: 0}, 50, null, null, 50 + 200);
        tweenContainer.tweens.push(tween);

        tweenContainer.onStart.addOnce(this.onStart, this);

        Laya.timer.once(50 + 200 + 50, this, this.PoolRecover);
        return tweenContainer;
    }

    onStart()
    {
        if(this.parent)
        {
            var fx = FxShootLightningSmall.PoolGet();
            var x = Consts.CardWidth / 2 - 20;
            var y = Consts.CardHeight / 2 - 20;
            RandomHelper.getRandomBool() && (x = -x);
            RandomHelper.getRandomBool() && (y = -y);
            this.parent.addChild(fx);
            fx.setXY(this.x, this.y);
            fx.m_fx.setXY(x, y);
            fx.Play();

        }
    }
}