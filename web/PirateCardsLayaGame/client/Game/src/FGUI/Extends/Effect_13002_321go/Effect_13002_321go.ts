/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Effect_13002_321goStruct from "../../Generates/Effect_13002_321go/Effect_13002_321goStruct";

export default class Effect_13002_321go extends Effect_13002_321goStruct
{
    public Play(args?:any[], onComplete?: Laya.Handler, times?: number, delay?: number)
    {
        if (!this.visible) 
        {
            this.visible = true;
        }

        if (times == -1) 
        {
            this.m_t0.setAutoPlay(true,   -1, delay);
        } 
        else 
        {
            this.m_t0.play(onComplete, times, delay);
        }
    }

    public Stop()
    {
        this.m_t0.setAutoPlay(false, 0, 0);
        this.m_t0.stop();
    }
}