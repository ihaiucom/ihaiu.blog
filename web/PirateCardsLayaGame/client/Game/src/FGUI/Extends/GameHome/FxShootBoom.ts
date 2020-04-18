/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FxShootBoomStruct from "../../Generates/GameHome/FxShootBoomStruct";

export default class FxShootBoom extends FxShootBoomStruct
{
    static PoolGet():FxShootBoom
    {
        var item =  Pool.getItem(this.URL);
        if(!item)
        {
            item = FxShootBoom.createInstance();
        }
        return item;
    }

    PoolRecover()
    {
        Laya.timer.clearAll(this);
        this.removeFromParent();
        this.m_boom.playing = false;
        Pool.recover(FxShootBoom.URL, this);
    }

    Play()
    {
        this.m_boom.frame = 0;
        this.m_boom.playing = true;
        var delay = Math.floor(18 * 1000 / 24);
        Laya.timer.once(delay, this, this.PoolRecover);
    }
}