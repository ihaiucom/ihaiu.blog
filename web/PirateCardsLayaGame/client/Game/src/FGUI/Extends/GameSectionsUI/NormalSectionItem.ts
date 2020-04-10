/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import NormalSectionItemStruct from "../../Generates/GameSectionsUI/NormalSectionItemStruct";
import MissionData from '../../../GameModule/DataStructs/MissionData';

export default class NormalSectionItem extends NormalSectionItemStruct
{
    renderItem(missionData: MissionData)
    {
        if(missionData.isBoss)
        {
            this.m_missionIndex.setSelectedIndex(0);
            this.m_bossIcon.icon = missionData.bossIconUrl;
        }
        else
        {
            this.m_missionIndex.setSelectedIndex(missionData.mapId);
            this.m_titleIcon.icon = missionData.nameIconUrl;
            this.m_headIcon.icon = missionData.headIconUrl;

        }
        if(!missionData.isActive)
        {
            this.grayed = true;
			this.m_isHideStar.setSelectedIndex(1);
			this.m_IsLock.setSelectedIndex(1);
			this.m_condition.text = missionData.unlockCondition;
        }
        else
        {
			this.m_IsLock.setSelectedIndex(0);
            this.grayed = false;
            this.m_isHideStar.setSelectedIndex(0);
            this.m_star.m_starNum.setSelectedIndex(missionData.star);
        }
        let isNew = missionData.hasFirstReward?1:0;
        this.m_isNew.setSelectedIndex(isNew);
    }
}