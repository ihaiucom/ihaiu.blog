/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DuelTempDanView2Struct from "../../Generates/ModuleDuelTemp/DuelTempDanView2Struct";
import DuelTempDanListItem2 from './DuelTempDanListItem2';
import Game from '../../../Game';

export default class DuelTempDanView2 extends DuelTempDanView2Struct
{
    get configList()
    {
        return Game.config.duelRanking.configList;
    }
     // 窗口显示
    onWindowWillShow(): void
    {
        this.m_list.setItemRenderer(this.renderLevelListItem, this);
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        this.m_list.itemRenderer.recover();
    }
    
    updateView()
    {
        this.m_list.numItems = this.configList.length;
    }

    renderLevelListItem(index: number, item: DuelTempDanListItem2)
    {
        let config = this.configList[index];
        item.renderItem(config);
    }
}