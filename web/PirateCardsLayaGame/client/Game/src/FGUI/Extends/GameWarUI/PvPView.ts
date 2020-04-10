/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PvPViewStruct from "../../Generates/GameWarUI/PvPViewStruct";
import { ComponentProp } from "../../../GameWar/Logic/EcsComponents/ComponentProp";
import { ComponentPlayerInput } from "../../../GameWar/Logic/EcsComponents/ComponentPlayerInput";

export default class PvPView extends PvPViewStruct
{
    setInfo(gamers:proto.IGamerMatch[], playerInput: ComponentPlayerInput)
    {
        if (playerInput.isSelf)
        {
            this.m_avatorView.setInfo(gamers[playerInput.pos]);
        } 
        else 
        {
            this.m_enemyView.setInfo(gamers[playerInput.pos])
        }
    }

    update(ComponentProp:ComponentProp, playerInput: ComponentPlayerInput)
    {
        if (playerInput.isSelf)
        {
            this.m_avatorView.update(ComponentProp);
        } 
        else 
        {
            this.m_enemyView.update(ComponentProp)
        }
    }
}