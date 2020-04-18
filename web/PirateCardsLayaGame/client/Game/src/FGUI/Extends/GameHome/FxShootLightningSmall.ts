/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FxShootLightningSmallStruct from "../../Generates/GameHome/FxShootLightningSmallStruct";
import TweenContainer from "../../../War/Utils/TweenContainer";
import TweenUtil from "../../../War/Utils/TweenUtil";

export default class FxShootLightningSmall extends FxShootLightningSmallStruct
{
    static PoolGet():FxShootLightningSmall
    {
        var item =  Pool.getItem(this.URL);
        if(!item)
        {
            item = FxShootLightningSmall.createInstance();
        }
        return item;
    }

    PoolRecover()
    {
        Laya.timer.clearAll(this);
        Laya.Tween.clearAll(this.m_fx);
        this.removeFromParent();
        this.m_fx.playing = false;
        Pool.recover(FxShootLightningSmall.URL, this);
    }

    Play()
    {
        this.m_fx.frame = 0;
        this.m_fx.playing = true;
        
        this.alpha = 0;


        var tweenContainer = TweenContainer.PoolGet();
        var tween = TweenUtil.to(this.m_fx, {alpha: 1}, 1);
        tweenContainer.tweens.push(tween);
        

        var tween = TweenUtil.to(this, {alpha: 0}, 1, null, null, 102);
        tweenContainer.tweens.push(tween);


        Laya.timer.once(103, this, this.PoolRecover);
        tweenContainer.restart();
        return tweenContainer;
    }

}