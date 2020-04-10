/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Effect_1001_Dianguanglongqi_Skin1__Skill4_13Struct from "../../Generates/Effect_1001_Dianguanglongqi_Skin1__Skill4_13/Effect_1001_Dianguanglongqi_Skin1__Skill4_13Struct";

export default class Effect_1001_Dianguanglongqi_Skin1__Skill4_13 extends Effect_1001_Dianguanglongqi_Skin1__Skill4_13Struct
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