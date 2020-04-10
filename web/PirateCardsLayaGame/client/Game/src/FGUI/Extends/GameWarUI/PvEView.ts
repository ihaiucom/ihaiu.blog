/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PvEViewStruct from "../../Generates/GameWarUI/PvEViewStruct";
import { ComponentPlayerInput } from "../../../GameWar/Logic/EcsComponents/ComponentPlayerInput";
import { ComponentProp } from "../../../GameWar/Logic/EcsComponents/ComponentProp";

export default class PvEView extends PvEViewStruct
{
    setInfo(gamers:proto.IGamerMatch[], playerInput: ComponentPlayerInput)
    {
        if (playerInput.isSelf)
        {
            this.m_avatorView.setInfo(gamers[playerInput.pos]);
        } 
        // PvE需要显示的是怪物HP，暂不处理
        // else 
        // {
        //     this.m_enemyView.setInfo(gamers[playerInput.pos])
        // }
    }

    update(ComponentProp:ComponentProp,  playerInput: ComponentPlayerInput)
    {
        if (playerInput.isSelf)
        {
            this.m_avatorView.update(ComponentProp);
        } 
        // PvE需要显示的是怪物HP，暂不处理
        // else 
        // {
        //     this.m_enemyView.update(ComponentProp);
        // }
    }
}