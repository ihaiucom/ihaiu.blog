/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CPLockDialStruct from "../../Generates/GameHome/CPLockDialStruct";
import { ChestLockData, ChestLockItemData, ChestLockItemType } from "../../../War/Logics/ChestLockData";
import CPLockDialLoadBig from "./CPLockDialLoadBig";

export default class CPLockDial extends CPLockDialStruct
{
    lockData:ChestLockData;
    Init(lockData: ChestLockData)
    {
        this.lockData =lockData;

        var itemDataList = lockData.items;
        for(var itemData of itemDataList)
        {
            var itemView = this.getItemView(itemData);
            if(itemView)
            {
                itemView.rotation = itemData.angle;
                itemView['itemData'] = itemData;
                itemData.itemView = <any> itemView;
                
                switch(itemData.config.type)
                {
                    case ChestLockItemType.LoadBig:
                    case ChestLockItemType.LoadSmall:
                        var itemViewLoad = <CPLockDialLoadBig>itemView;
                        if(itemViewLoad.m_state)
                        {
                            itemViewLoad.m_state.setSelectedIndex(itemData.isOpen ? 1 : 0);
                        }
                        else
                        {
                            console.error(itemData.config.type, itemViewLoad);
                        }
                        break;

                }
            }
            else
            {
                console.error("CPLockDial Init itemView = null", itemData);
            }
        }
    }

    getItemView(itemData: ChestLockItemData):fgui.GComponent
    {
        switch(itemData.config.type)
        {
            case ChestLockItemType.LoadBig:
                return this[`m_loadBig${itemData.groundIndex}`];
            case ChestLockItemType.LoadSmall:
                return this[`m_loadSmall${itemData.groundIndex}`];
            case ChestLockItemType.FixedBig:
                return this[`m_fixedBig${itemData.groundIndex}`];
            case ChestLockItemType.FiexedSmall:
                return this[`m_fixedSmall${itemData.groundIndex}`];
        }
    }

    setItemState(itemData: ChestLockItemData)
    {
        if(itemData.itemView)
        {
            switch(itemData.config.type)
            {
                case ChestLockItemType.LoadBig:
                case ChestLockItemType.LoadSmall:
                    itemData.itemView.m_state.setSelectedIndex(itemData.isOpen ? 1 : 0);
                    break;
            }
        }
    }

}