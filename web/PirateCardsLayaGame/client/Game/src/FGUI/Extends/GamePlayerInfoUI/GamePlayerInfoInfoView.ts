/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GamePlayerInfoInfoViewStruct from "../../Generates/GamePlayerInfoUI/GamePlayerInfoInfoViewStruct";
import Game from '../../../Game';
import TEXT from "../../../Config/Keys/TEXT";
import MenuValidateRed from "../../../GameModule/MenuValidateRed";
import { MenuId } from "../../../GameModule/MenuId";

export default class GamePlayerInfoInfoView extends GamePlayerInfoInfoViewStruct
{
    
    Init()
    {
        let user = Game.user;
        this.m_headIcon.m_icon.icon = user.headIconUrl;
        this.m_nameLb.text = user.name;
        this.m_juntuanLb.text = "无";//军团暂未开发
        this.m_level.text = TEXT.Lv.format(user.level);
        let exp = user.exp;
        let config = Game.config.playerLevel.getConfig(user.level);
        this.m_expBar.value = 0;
        this.m_expBar.max = config.playerNeedExp;
        this.m_expBar.value = exp;
        this.m_expLb.text = TEXT.Progress.format(exp,config.playerNeedExp);
        if(user.level >= Game.config.playerLevel.maxLevel)
        {
            config = Game.config.playerLevel.getConfig(user.level);
            this.m_expBar.max = config.playerNeedExp;
            this.m_expBar.value = config.playerNeedExp;
            this.m_expLb.text = "最大等级";
        }

        let danLevel = "无";// Game.moduleModel.pvp.danInfo.name
        this.m_duanweiLb.text = TEXT.DuelTempLevel.format(danLevel);
        this.m_highestDuanweiLb.text = TEXT.DuelTempMaxLevel.format(danLevel);
        this.m_rankLb.text = TEXT.DuelTempCurrentPvpLevel.format(danLevel);
        this.m_highestRankLb.text = TEXT.DuelTempMaxPvpLevel.format(danLevel);
    }

    changeHeadIcon()
    {
        this.m_headIcon.m_icon.icon = Game.user.headIconUrl;
    }
}