/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipIconButtonSmallStruct from "../../Generates/ModuleEquip/EquipIconButtonSmallStruct";
import { EquipData } from "../../../GameModule/DataStructs/EquipData";
import Game from "../../../Game";

export default class EquipIconButtonSmall extends EquipIconButtonSmallStruct
{
    itemData: EquipData;
    RenderItem(data: EquipData)
    {
        if(data)
        {
            this.itemData = data;
            this.m_qualityState.selectedIndex = data.quality;
            this.m_icon.url = Game.moduleModel.equip.Icon(data.uid);
            this.m_star.m_starNum.selectedIndex = data.star;
            this.m_star.m_starPos.selectedIndex = data.star;
            this.m_labelLevel.text = data.level.toString();
            this.touchable = true;
            this.m_icon.visible = true;
            this.m_star.visible = true;
        }
        else
        {
            this.itemData = null;
            this.m_qualityState.selectedIndex = 0;
            this.m_icon.visible = false;
            this.m_star.visible = false;
            this.m_labelLevel.text = "";
            this.touchable = false;
            this.m_heroIcon.visible = false;
            this.m_heroIconBg.visible = false;
            this.m_maskState.selectedIndex = 0;
        }
    }

    // 显示所属英雄头像
    SetOnWho()
    {
        let data = this.itemData;
        if(data && data.onWho > 0)
        {
            this.m_heroIcon.visible = true;
            this.m_heroIconBg.visible = true;
            this.m_heroIcon.url = Game.moduleModel.hero.Icon(data.onWho);
            this.m_maskState.selectedIndex = 1;
        }
        else
        {
            this.m_heroIcon.visible = false;
            this.m_heroIconBg.visible = false;
            this.m_maskState.selectedIndex = 0;
        }
    }
}