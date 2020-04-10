/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FuryEffectStruct from "../../Generates/GameWar3DUI/FuryEffectStruct";

export default class FuryEffect extends FuryEffectStruct
{
    setValue(value:number)
    {
        this.m_effWave.y = 135 - 95 * value;
        
    }
}