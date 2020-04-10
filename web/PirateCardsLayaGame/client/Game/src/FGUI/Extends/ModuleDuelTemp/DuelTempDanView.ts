/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DuelTempDanViewStruct from "../../Generates/ModuleDuelTemp/DuelTempDanViewStruct";
import Game from '../../../Game';
import DuelTempDanIconItem from './DuelTempDanIconItem';
import DuelTempDanListItem from './DuelTempDanListItem';

export default class DuelTempDanView extends DuelTempDanViewStruct
{

     // 窗口显示
     onWindowWillShow(): void
     {
        this.m_danList.setItemRenderer(this.renderDanListItem,this);
        this.m_list.setItemRenderer(this.renderLevelListItem, this);
        this.m_danList.on(fgui.Events.CLICK_ITEM, this, this.danIconItemOnClick);
     }
 
     // 窗口隐藏
     onWindowHide(): void
     {
         this.m_danList.itemRenderer.recover();
         this.m_list.itemRenderer.recover();
         this.m_danList.off(fgui.Events.CLICK_ITEM, this, this.danIconItemOnClick);
        }
    
    get danIdList(): number[]
    {
        return Game.config.duelDan.danIds;
    }

    get danLevelList()
    {
        let list = [];
        let index = this.m_danList.selectedIndex;
        if(index >= 0)
        {
            let dan = Game.config.duelDan.getConfig(this.danIdList[index]).dan;
            list = Game.config.duelDan.getDanLevelsByDan(dan);
        }
        return list;
    }
    
    updateView()
    {
        this.m_danList.numItems = this.danIdList.length;
        if(this.danIdList.length > 0)
        {
            this.m_danList.addSelection(0);
            this.updateLevelsView();
        }
    }

    updateLevelsView()
    {
        this.m_list.numItems = this.danLevelList.length;
    }

    renderDanListItem(index: number, item: DuelTempDanIconItem)
    {
        let id = this.danIdList[index];
        item.renderItem(id);
    }

    renderLevelListItem(index: number, item: DuelTempDanListItem)
    {
        let config = this.danLevelList[index];
        item.renderItem(config);
    }

    danIconItemOnClick()
    {
        this.updateLevelsView();
    }
}