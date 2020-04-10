/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PVEHallWindowUIStruct from "../../Generates/ModulePVEHall/PVEHallWindowUIStruct";
import {MenuId} from "../../../GameModule/MenuId";
import PVEHallListItem from "./PVEHallListItem";
import PlayListConfig from "../../../Config/ConfigExtends/PlayListConfig";
import Game from "../../../Game";

export default class PVEHallWindowUI extends PVEHallWindowUIStruct
{
    private get dataList(): PlayListConfig[]
    {
        return Game.config.playList.pveList;
    }
    
    onWindowShow(): void
    {
        this.m_head.SetWindow(MenuId.PVEHall);
        this.m_list.on(fgui.Events.CLICK_ITEM,this,this.listItemOnClick);
        this.m_list.setItemRenderer(this.renderListItem,this);
        this.m_list.numItems = this.dataList.length;
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        this.m_list.off(fgui.Events.CLICK_ITEM,this,this.listItemOnClick);
        this.m_list.itemRenderer.recover();
    }

    private renderListItem(index: number,item: PVEHallListItem) 
    {
        
        let conf = this.dataList[index];
        item.updateView(conf);
    }

    private listItemOnClick(item: PVEHallListItem)
    {
        let index = this.m_list.getChildIndex(item);
        if(index < this.dataList.length)
        {
            item.itemOnClick();
        }
    }
}