/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SectionSpecialItemStruct from "../../Generates/GameSectionsUI/SectionSpecialItemStruct";
import MissionData from '../../../GameModule/DataStructs/MissionData';

export default class SectionSpecialItem extends SectionSpecialItemStruct
{
    rendererItem(data: MissionData)
    {
        this.m_icon.icon = data.headIconUrl;
        if(data.isUnlock)
        {
            this.m_state.setSelectedPage('unlock');
            this.m_star.m_starNum.setSelectedIndex(data.star);
            this.grayed = false;
            this.focusable = false;
        }
        else
        {
            this.m_state.setSelectedPage('lock');
            this.m_condition.text = data.unlockCondition;
            this.grayed = true;
            this.focusable = true;
        }
    }
}