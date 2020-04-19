/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CPLockLampGroupStruct from "../../Generates/GameHome/CPLockLampGroupStruct";
import { ChestLockData, ChestLockItemData } from "../../../War/Logics/ChestLockData";
import CPLockLamp from "./CPLockLamp";

export default class CPLockLampGroup extends CPLockLampGroupStruct
{
    
    lockData:ChestLockData;
    Init(lockData: ChestLockData)
    {
        this.lockData =lockData;

        var itemDataList = lockData.loadItems;
        for(var i = 0, len = itemDataList.length; i < len; i ++)
        {
            var itemData = itemDataList[i];
            var itemView:CPLockLamp = this[`m_lamp_${(i + 1)}`];
            itemData.itemViewLighting = itemView;
            if(itemView)
            {
                itemView.m_state.setSelectedIndex(itemData.isOpen ? 1 : 0);
            }
        }
    }

    
    setItemState(itemData: ChestLockItemData)
    {
        if(itemData.itemViewLighting)
        {
            itemData.itemViewLighting.m_state.setSelectedIndex(itemData.isOpen ? 1 : 0);
        }
    }
}