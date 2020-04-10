/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PVEHallListItemStruct from "../../Generates/ModulePVEHall/PVEHallListItemStruct";
import PlayListConfig from '../../../Config/ConfigExtends/PlayListConfig';
import Game from "../../../Game";

export default class PVEHallListItem extends PVEHallListItemStruct
{
    config: PlayListConfig;
    
    updateView(conf: PlayListConfig)
    {
        this.config = conf;
        this.m_icon.icon = conf.iconUrl;
    }

    itemOnClick()
    {
        if(this.config.isUnlock)
        {
            let menuID = this.config.menuId;
            Game.menu.openTab(menuID,0);
        }
    }
}