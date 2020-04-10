/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GamePlayerHead2Struct from "../../Generates/GamePlayerInfoUI/GamePlayerHead2Struct";
import { HeroData } from "../../../GameModule/DataStructs/HeroData";

export default class GamePlayerHead2 extends GamePlayerHead2Struct
{
    updateView(heroData: HeroData)
    {
        this.m_icon.icon = heroData.HeroIcon;
        this.m_level.text = heroData.LevelString;
    }
}