/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BossBornShowViewStruct from "../../Generates/GameWar3DUI/BossBornShowViewStruct";
import { EnumBattleState } from "../../../GameWar/Logic/Enum/EnumBattleState";
import { War } from "../../../GameWar/Logic/War";
import Game from "../../../Game";

export default class BossBornShowView extends BossBornShowViewStruct
{
    public PlayBossBorn(state : string, resUrl : string)
    {
        this.visible = true;
        this.m_bossShow.setSelectedPage("1");
        let config = Game.config.avatar.getConfig(resUrl);
        if(!config)
        {   
            return;
        }
        
        let imgUrl = "res/fspriteassets/" + config.drawing + ".png";
        let textUrl = "res/fspriteassets/" + config.monsterWords + ".png";
        let nameUrl = "res/fspriteassets/" + config.heroName + ".png";
        this.m_huaxiong.m_bossImg.url = imgUrl;
        this.m_huaxiong.m_bossMsg.url = textUrl;
        this.m_huaxiong.m_bossName.url = nameUrl;
        this.m_huaxiong.m_show.play(Laya.Handler.create(this, this.WarStart), 1, 0);
    }

    private WarStart()
    {
        if(War.battleState == EnumBattleState.Runing)
        {
            War.unpause();
        }
        this.m_bossShow.setSelectedPage("0");
        this.visible = false;
    }
}