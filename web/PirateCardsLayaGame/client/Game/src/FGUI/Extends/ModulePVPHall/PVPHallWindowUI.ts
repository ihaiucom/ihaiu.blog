/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PVPHallWindowUIStruct from "../../Generates/ModulePVPHall/PVPHallWindowUIStruct";
import PVPHallListItem from './PVPHallListItem';
import Game from '../../../Game';
import PlayListConfig from "../../../Config/ConfigExtends/PlayListConfig";
import { MenuId } from '../../../GameModule/MenuId';

export default class PVPHallWindowUI extends PVPHallWindowUIStruct
{

   
    onWindowInited(): void
    {

    }
//#region "My Region"
    // 窗口显示
    onWindowShow(): void
    {
        this.m_head.SetWindow(MenuId.PVPHall);
        this.m_list.on(fgui.Events.CLICK_ITEM,this, this.listItemOnClick);
        this.m_list.setItemRenderer(this.renderListItem,this);
        this.m_list.numItems = this.dataList.length;
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        this.m_list.off(fgui.Events.CLICK_ITEM,this, this.listItemOnClick);
        this.m_list.itemRenderer.recover();
    }

    /** @pravate                      私有方法                           */
    private get dataList(): PlayListConfig[]
    {
        return Game.config.playList.pvpList;
    }

    /**
     * renderListItem
     */
    private renderListItem(index: number, item: PVPHallListItem) 
    {
        if(index >= this.dataList.length)
        {
            item.setNotOpenView();
            return;
        }
        let conf = this.dataList[index];
        item.renderItem(conf);
    }

    private listItemOnClick(item: PVPHallListItem)
    {
        let index = this.m_list.getChildIndex(item);
        if(index < this.dataList.length)
        {
            item.itemOnClick();
        }
    }

}