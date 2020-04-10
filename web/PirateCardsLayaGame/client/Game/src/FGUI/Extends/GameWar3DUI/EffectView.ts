/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EffectViewStruct from "../../Generates/GameWar3DUI/EffectViewStruct";

export default class EffectView extends EffectViewStruct
{
    private effectDict:Dictionary<string, any> = new Dictionary<string, any>();


    Play(name:string, type:number, args?:any[], onComplete?: Laya.Handler, times?: number, delay?: number)
    {
        let effect;
        if(type == 0)
        {
            effect = this[`m_${name}`];
            effect.Play(args, onComplete, times, delay)
        }
        else
        {
            // Spine动画
        }
        
        this.effectDict.add(name, effect);
    }

    Stop(name:string)
    {
        let effect = this.effectDict.getValue(name);
        if (effect) 
        {
            effect.Stop();    
        }
    }
}