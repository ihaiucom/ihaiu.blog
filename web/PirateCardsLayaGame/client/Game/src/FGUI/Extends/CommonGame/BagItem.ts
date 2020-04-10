/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BagItemStruct from "../../Generates/CommonGame/BagItemStruct";
import ItemData from '../../../GameModule/DataStructs/ItemData';
import { EquipData } from '../../../GameModule/DataStructs/EquipData';

export default class BagItem extends BagItemStruct
{
    renderItem(data: ItemData|EquipData)
    {
        if(!data)
        {
            this.m_quality.setSelectedIndex(0);
            this.m_itemState.setSelectedPage("normal");
            return;
        }
        if(data instanceof ItemData)
        {
            let page = "normal";
            if(data.isExpired)
                page = "expired";
            else if(data.isLimit)
                page = "limit";
            this.m_quality.setSelectedIndex(data.quality);
            this.m_itemState.setSelectedPage(page);
            this.m_num.visible = data.count > 1;
            this.m_numBack.visible = data.count > 1;
            this.m_num.text = data.itemNumTxt2;
            this.m_itemName.text = data.itemName;
        }
        else if(data instanceof EquipData)
        {
            this.m_itemState.setSelectedPage('normal');
            this.m_num.visible = false;
            this.m_itemName.text = data.name;
        }
        this.m_icon.icon = data.iconUrl;

    }
}