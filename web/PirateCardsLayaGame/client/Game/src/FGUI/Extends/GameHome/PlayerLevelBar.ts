/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PlayerLevelBarStruct from "../../Generates/GameHome/PlayerLevelBarStruct";
import { Player } from "../../../War/Datas/Player";

export default class PlayerLevelBar extends PlayerLevelBarStruct
{
    get player()
    {
        return Player.current;
    }
    
    // 窗口显示
    onWindowShow(): void
    {

    }

    // 窗口隐藏
    onWindowHide(): void
    {

    }

    SetLevel()
    {
        this.m_level.m_title.text = this.player.level + "";
    }

    SetExp()
    {
        this.m_exp.max = this.player.levelExpMax;
        this.m_exp.value = this.player.levelExp;
    }

    
}