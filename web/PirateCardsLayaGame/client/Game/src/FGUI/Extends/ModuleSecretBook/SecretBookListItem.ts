/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretBookListItemStruct from "../../Generates/ModuleSecretBook/SecretBookListItemStruct";
import MissionData from "../../../GameModule/DataStructs/MissionData";

export default class SecretBookListItem extends SecretBookListItemStruct
{
    rendererItem(data: MissionData)
    {
        let index = data.isUnlock ? 0 : 1;
        this.m_timesRemain.text =  data.timesRemainTxt;
        this.m_icon.icon = data.headIconUrl;
        this.m_state.setSelectedIndex(index);
        this.grayed = !data.isUnlock;
        this.m_star.m_starNum.setSelectedIndex(data.star);
        this.m_condition.text = data.unlockCondition;
		this.m_name.text = data.name;
		
        this.m_mapId.setSelectedIndex(data.config.mapID);
    }
}