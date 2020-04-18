/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FxShootSmokeStruct from "../../Generates/GameHome/FxShootSmokeStruct";

export default class FxShootSmoke extends FxShootSmokeStruct
{
    static PoolGet():FxShootSmoke
    {
        var item =  Pool.getItem(this.URL);
        if(!item)
        {
            item = FxShootSmoke.createInstance();
        }
        return item;
    }

    PoolRecover()
    {
        Laya.timer.clearAll(this);
        this.removeFromParent();
        this.m_smoke.playing = false;
        Pool.recover(FxShootSmoke.URL, this);
    }

    Play()
    {
        this.m_smoke.frame = 0;
        this.m_smoke.playing = true;
        var delay =Math.floor( 10 * 1000 / 24);
        Laya.timer.once(delay, this, this.PoolRecover);
    }
}