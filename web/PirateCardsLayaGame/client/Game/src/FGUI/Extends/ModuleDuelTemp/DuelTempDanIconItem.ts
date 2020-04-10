/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DuelTempDanIconItemStruct from "../../Generates/ModuleDuelTemp/DuelTempDanIconItemStruct";
import Game from '../../../Game';

export default class DuelTempDanIconItem extends DuelTempDanIconItemStruct
{
    renderItem(danId: number)
    {
        let config = Game.config.duelDan.getConfig(danId);
        this.m_icon.icon = config.iconUrl;
        this.m_title.text = config.des;
    }
}