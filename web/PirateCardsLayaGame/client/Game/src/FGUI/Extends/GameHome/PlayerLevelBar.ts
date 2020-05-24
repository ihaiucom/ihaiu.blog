/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PlayerLevelBarStruct from "../../Generates/GameHome/PlayerLevelBarStruct";
import { Player } from "../../../War/Datas/Player";
import TweenHelper from "../../../War/Utils/TweenHelper";

export default class PlayerLevelBar extends PlayerLevelBarStruct
{
    get player()
    {
        return Player.current;
    }
    
    // 窗口显示
    onWindowShow(): void
    {
        this.SetLevel();
        this.SetExp();
        this.SetEquip();
        this.player.sLevelChange.add(this.SetLevel, this);
        this.player.sExpChange.add(this.SetExp, this);
        this.player.sEquipChange.add(this.SetEquip, this);
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        this.player.sLevelChange.remove(this.SetLevel, this);
        this.player.sExpChange.remove(this.SetExp, this);
        this.player.sEquipChange.remove(this.SetEquip, this);
    }

    SetLevel()
    {
        this.m_level.m_title.text = this.player.level + "";
        if(this.player.level > 1)
        {
            TweenHelper.spriteShow(this.m_level);
        }
        else
        {
            this.m_level.scaleX = 1;
            this.m_level.scaleY = 1;
            this.m_level.alpha = 1;
        }
    }

    SetExp()
    {
        this.m_exp.max = this.player.levelExpMax;
        this.m_exp.value = this.player.levelExp;
    }

    SetEquip()
    {
        this.m_equipDecorate.SetData(this.player.equipDecorateData);
        this.m_equipWeapon.SetData(this.player.equipWeaponData);

    }

    
}