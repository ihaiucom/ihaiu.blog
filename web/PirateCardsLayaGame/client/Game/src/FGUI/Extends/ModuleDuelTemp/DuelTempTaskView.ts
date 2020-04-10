/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DuelTempTaskViewStruct from "../../Generates/ModuleDuelTemp/DuelTempTaskViewStruct";
import Game from "../../../Game";
import DuelTempWindow from "../../../GameModule/ViewWindows/DuelTempWindow";
import QuestData from "../../../GameModule/DataStructs/QuestData";
import DuelTempTaskListItem from "./DuelTempTaskListItem";
import { MenuId } from "../../../GameModule/MenuId";

export default class DuelTempTaskView extends DuelTempTaskViewStruct
{
    get datalist(): QuestData[]
    {
        let type = proto.QuestType.RankDailyQuest;
        if(this.m_taskType.selectedPage == 'week')
            type = proto.QuestType.RankWeekQuest
        let list = Game.moduleModel.quest.GetQuestListByType(type);
        return Game.moduleModel.quest.SortQuest(list);
    }
    moduleWindow: DuelTempWindow;
     // 窗口显示
     onWindowShow(): void
     {
         this.m_closeBtn.delayOnClick(this, this.menuBack);
        this.m_list.setItemRenderer(this.renderListItem, this);
        Game.net.getQuestRewardS2C.on(this.updateView, this)
        this.updateView();
     }
 
     // 窗口隐藏
    onWindowHide(): void  {
        Game.net.getQuestRewardS2C.off(this.updateView, this)
        this.m_closeBtn.delayOffClick(this, this.menuBack);
        if(this.m_list.itemRenderer)
            this.m_list.itemRenderer.recover();
    }
    
    updateView()
    {
        this.m_list.numItems = this.datalist.length;
    }

    renderListItem(index: number, item: DuelTempTaskListItem)
    {
        let data = this.datalist[index];
        item.updateView(data);
    }

    private menuBack()
    {
        Game.menu.openTab(MenuId.DuelTemp, 0);
    }
}