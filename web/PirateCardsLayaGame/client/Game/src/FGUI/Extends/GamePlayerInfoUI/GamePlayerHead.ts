/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GamePlayerHeadStruct from "../../Generates/GamePlayerInfoUI/GamePlayerHeadStruct";
import { HeroData } from '../../../GameModule/DataStructs/HeroData';

export default class GamePlayerHead extends GamePlayerHeadStruct
{
    updateView(data:HeroData)
    {
        this.m_icon.icon = data.HeroIcon;
        this.m_title.text = data.name?data.name:data.Name;
    }
}