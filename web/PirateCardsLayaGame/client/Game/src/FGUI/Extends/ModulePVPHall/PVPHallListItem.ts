/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PVPHallListItemStruct from "../../Generates/ModulePVPHall/PVPHallListItemStruct";
import PlayListConfig from '../../../Config/ConfigExtends/PlayListConfig';
import Game from '../../../Game';

export default class PVPHallListItem extends PVPHallListItemStruct
{
    config: PlayListConfig;
    
    renderItem(config: PlayListConfig)
    {
        this.config = config;
        let page = config.isUnlock ? "unlocked": "locked";
        this.m_viewType.setSelectedPage(page);
        config.mode < 3 && (this.m_mode.setSelectedIndex(config.mode));
        this.m_bg.icon = config.iconUrl;
        // this.m_des.text = config.des;
        let menuConfig = Game.config.menu.getConfig(config.menuId)
        if(menuConfig)
        {
            if(!menuConfig.isUnlock)
            {
                this.m_viewType.setSelectedPage('locked');
                this.m_condition.text = menuConfig.lockText;
            }
            else
                this.m_viewType.setSelectedPage('unlocked');
        }
        if(config.openTime1 && config.openTime1.length ==2)
        {
            this.m_isLimit.setSelectedIndex(1);
            this.m_limitLb.text = config.openTime1Txt;
        }
        else
            this.m_isLimit.setSelectedIndex(0);        
    }



    setNotOpenView()
    {
        this.m_viewType.setSelectedPage('notopen');
    }

    itemOnClick()
    {
        if(this.config.IsOpen())
        {
            let menuID = this.config.menuId;
            Game.menu.openTab(menuID,0);
        }
    }
}