/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Effect_13003_dijiangjipoStruct from "../../Generates/Effect_13003_dijiangjipo/Effect_13003_dijiangjipoStruct";

export default class Effect_13003_dijiangjipo extends Effect_13003_dijiangjipoStruct
{
    public Play(args?:any[], onComplete?: Laya.Handler, times?: number, delay?: number)
    {
        Laya.timer.once(delay, this, ()=>{
            if (!this.visible) 
            {
                this.visible = true;
            }

            if (times == -1) 
            {
                this.m_t0.setAutoPlay(true,   -1);
            } 
            else 
            {
                this.m_t0.play(onComplete, times);
            }
        }, null, true);
    }

    public Stop()
    {
        this.m_t0.setAutoPlay(false, 0, 0);
        this.m_t0.stop();
    }
}