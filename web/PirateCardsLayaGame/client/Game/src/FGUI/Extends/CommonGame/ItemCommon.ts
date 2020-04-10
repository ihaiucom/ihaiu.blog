/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com 
/////////////////////////////////////

import ItemCommonStruct from "../../Generates/CommonGame/ItemCommonStruct";
import ItemData from "../../../GameModule/DataStructs/ItemData";
import { EquipData } from "../../../GameModule/DataStructs/EquipData";
import Res from "../../../Config/Keys/Res";

export default class ItemCommon extends ItemCommonStruct
{
    renderItem(data: ItemData|EquipData)
    {
        if(data instanceof ItemData)
        {
            this.m_labNum.text  = String(data.count);
            this.m_Count.selectedIndex = data.count > 1 ? 2 : data.count;
            this.m_labName.text = data.itemName; 
        }
        else if(data instanceof EquipData)
        {
            this.m_Count.selectedIndex = 1;
            this.m_labName.text = data.name; 
        }

        // 质量
        this.m_Quality.selectedIndex = data.quality -1;
        
        this.m_imgItem.icon = data.iconUrl;
    }

    /** 体力购买item，需要特殊处理 */
    renderPowerItem(quality:number, itemName:string, avatarid:number)
    {
        this.m_Count.selectedIndex = 1;
        this.m_Quality.selectedIndex = quality;

        this.m_labName.text = itemName;
        this.m_imgItem.icon = Res.GetAvatarSource(avatarid);
    }
}