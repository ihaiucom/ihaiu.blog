/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Effect_13001_fadeStruct from "../../Generates/Effect_13001_fade/Effect_13001_fadeStruct";

export default class Effect_13001_fade extends Effect_13001_fadeStruct
{
    public Play(args?:any[], onComplete?: Laya.Handler, times?: number, delay?: number)
    {
        if (!this.visible) 
        {
            this.visible = true;
        }

        if (times == -1) 
        {
            this.m_fadeOut.setAutoPlay(true,   -1, delay);
        } 
        else 
        {
            this.m_fadeOut.play(onComplete, times, delay);
        }
    }

    public Stop()
    {
        this.m_fadeOut.setAutoPlay(false, 0, 0);
        this.m_fadeOut.stop();
    }
}