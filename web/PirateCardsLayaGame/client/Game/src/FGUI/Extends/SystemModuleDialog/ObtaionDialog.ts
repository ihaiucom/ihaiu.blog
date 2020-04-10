/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ObtaionDialogStruct from "../../Generates/SystemModuleDialog/ObtaionDialogStruct";
import ItemData from '../../../GameModule/DataStructs/ItemData';
import { EquipData } from '../../../GameModule/DataStructs/EquipData';
import ObtainWayItem from './ObtainWayItem';

export default class ObtaionDialog extends ObtaionDialogStruct
{

    wayList: number[] = [];
    
    /** 窗口显示 */
    onWindowShow(): void
    {
        this.m_listWay.setItemRenderer(this.renderListItem, this);
        this.m_listWay.numItems = this.wayList.length;
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_listWay.itemRenderer.recover();
    }
    
    showItem(data: ItemData)
    {
        this.m_item.RenderItem(data);

        let config = data.itemConfig;
        this.wayList = config.getWay;
        this.m_listWay.numItems = config.getWay.length;
    }

    showEquip(equip: EquipData)
    {
        this.m_item.RenderItem(equip);

        let config = equip.config;
        this.wayList = config.getWay;
        this.m_listWay.numItems = config.getWay.length;
    }


    private renderListItem(index: number,item: ObtainWayItem)
    {
        item.RenderItem(this.wayList[index]);
    }
}