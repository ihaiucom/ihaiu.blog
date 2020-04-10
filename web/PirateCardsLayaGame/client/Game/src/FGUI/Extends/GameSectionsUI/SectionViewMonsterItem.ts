/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SectionViewMonsterItemStruct from "../../Generates/GameSectionsUI/SectionViewMonsterItemStruct";
import MissionData from '../../../GameModule/DataStructs/MissionData';

export default class SectionViewMonsterItem extends SectionViewMonsterItemStruct
{

    rendererItem(data: MissionData)
    {
        let index = data.isUnlock? 0: 1;
        this.m_icon.icon = data.headIconUrl;
        this.m_state.setSelectedIndex(index);
        this.m_star.m_starNum.setSelectedIndex(data.star);
        this.m_condition.text = data.unlockCondition;
        
    }
}