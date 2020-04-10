/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import P2vP2ViewStruct from "../../Generates/GameWarUI/P2vP2ViewStruct";
import { ComponentPlayerInput } from "../../../GameWar/Logic/EcsComponents/ComponentPlayerInput";
import { ComponentProp } from "../../../GameWar/Logic/EcsComponents/ComponentProp";

export default class P2vP2View extends P2vP2ViewStruct
{
    setInfo(gamers:proto.IGamerMatch[], playerInput: ComponentPlayerInput)
    {
        if (playerInput.isSelf)
        {
            this.m_avatorView.setInfo(gamers[playerInput.pos]);
            this.m_enemyView.setInfo(gamers, playerInput);
        } 
    }

    update(ComponentProp:ComponentProp, playerInput: ComponentPlayerInput)
    {
        if (playerInput.isSelf)
        {
            this.m_avatorView.update(ComponentProp);
        } 

        this.m_enemyView.update(ComponentProp, playerInput);
    }
}