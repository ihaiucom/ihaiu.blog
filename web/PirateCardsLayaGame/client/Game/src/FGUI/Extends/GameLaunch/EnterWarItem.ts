/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EnterWarItemStruct from "../../Generates/GameLaunch/EnterWarItemStruct";
import IGamerMatch = proto.IGamerMatch;
import Game from "../../../Game";

export default class EnterWarItem extends EnterWarItemStruct
{
    ID:number

    RenderItem(gamer:IGamerMatch)
    {
        this.ID = gamer.mini.id;

        this.m_labName.text    = gamer.mini.name;
        this.m_labLevel.text   = `${gamer.mini.level}级`;
        this.m_labProgess.text = "0%"

        let heroconfig   = Game.config.hero.getConfig(gamer.heroList[0].id);

        let avatarconfig = Game.config.avatar.getConfig(heroconfig.icon);
        this.m_imgHero.icon    = avatarconfig.heroTeamImgUrl;

        let portraitCfg  = Game.config.avatar.getConfig(gamer.mini.avatar);
        if (!portraitCfg) portraitCfg = Game.config.avatar.getConfig(1001);
        this.m_playerIcon.icon = portraitCfg.iconUrl;
    }

    UpdatePer(per:number)
    {
        this.m_labProgess.text = `${per}%`;
    }
}