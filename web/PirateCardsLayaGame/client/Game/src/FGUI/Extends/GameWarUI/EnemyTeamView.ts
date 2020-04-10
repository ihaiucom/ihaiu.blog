/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EnemyTeamViewStruct from "../../Generates/GameWarUI/EnemyTeamViewStruct";
import { ComponentPlayerInput } from "../../../GameWar/Logic/EcsComponents/ComponentPlayerInput";
import { ComponentProp } from "../../../GameWar/Logic/EcsComponents/ComponentProp";
import P2vP2HPProgressBar from "./P2vP2HPProgressBar";

export default class EnemyTeamView extends EnemyTeamViewStruct
{
    setInfo(gamers:proto.IGamerMatch[], playerInput: ComponentPlayerInput)
    {
        // 自己
        let own       = gamers[playerInput.pos];
        this.m_Player1HPProgress.setInfo(own);
        this.m_Player1HPProgress.heroPos = playerInput.pos;
        this.m_Player1HPProgress.m_player.selectedIndex = 0;

        // 队友
        let otherpos  = (playerInput.pos % 2) ? playerInput.pos - 1 : playerInput.pos + 1;
        let other     = gamers[otherpos]
        this.m_Player2HPProgress.setInfo(other);
        this.m_Player2HPProgress.heroPos = otherpos;
        this.m_Player2HPProgress.m_player.selectedIndex = 1;

        // 敌人1
        let enemy1pos = (playerInput.pos < 2) ? 2 : 0;
        let enemy1    = gamers[enemy1pos];
        this.m_Player3HPProgress.setInfo(enemy1);
        this.m_Player3HPProgress.heroPos = enemy1pos;
        this.m_Player3HPProgress.m_player.selectedIndex = 2;

        // 敌人2
        let enemy2pos = (playerInput.pos < 2) ? 3 : 1;
        let enemy2    = gamers[enemy2pos];
        this.m_Player4HPProgress.setInfo(enemy2);
        this.m_Player4HPProgress.heroPos = enemy2pos;
        this.m_Player4HPProgress.m_player.selectedIndex = 3;
    }

    update(ComponentProp:ComponentProp,  playerInput: ComponentPlayerInput)
    {
        if (playerInput.pos == this.m_Player1HPProgress.heroPos) 
        {
            this.m_Player1HPProgress.updateValue(ComponentProp);
        }
        else if (playerInput.pos == this.m_Player2HPProgress.heroPos) 
        {
            this.m_Player2HPProgress.updateValue(ComponentProp);
        }
        else if (playerInput.pos == this.m_Player3HPProgress.heroPos) 
        {
            this.m_Player3HPProgress.updateValue(ComponentProp);
        }
        else if (playerInput.pos == this.m_Player4HPProgress.heroPos) 
        {
            this.m_Player4HPProgress.updateValue(ComponentProp);
        }
    }
}