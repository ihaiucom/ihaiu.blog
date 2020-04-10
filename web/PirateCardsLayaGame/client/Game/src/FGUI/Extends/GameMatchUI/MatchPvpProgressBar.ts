/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MatchPvpProgressBarStruct from "../../Generates/GameMatchUI/MatchPvpProgressBarStruct";

export default class MatchPvpProgressBar extends MatchPvpProgressBarStruct
{
    ID: number;
    
    UpdatePer(per: number)
    {
        this.value = per;
        this.max = 100;
    }
}