/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DuelDanLevelStruct from "../../Generates/CommonGame/DuelDanLevelStruct";
import DanInfoData from '../../../GameModule/DataStructs/DanInfoData';

export default class DuelDanLevel extends DuelDanLevelStruct
{
    UpdateView(danInfo: DanInfoData)
    {
        this.m_DanIcon.icon = danInfo.iconUrl;
        this.m_danName.text = danInfo.name;
    }
}