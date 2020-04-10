/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RankWindowUIStruct from "../../Generates/ModuleRank/RankWindowUIStruct";
import {MenuId} from "../../../GameModule/MenuId";
import { EnumRankTab } from '../../../GameModule/ViewWindows/RankWindow';
import Game from '../../../Game';

export default class RankWindowUI extends RankWindowUIStruct
{
    // 窗口显示
    onWindowShow(): void
    {
        this.m_head.SetWindow(MenuId.Rank);
        this.m_tab.on(fgui.Events.STATE_CHANGED, this, this.tabOnClick);
    }


    // 窗口隐藏
    onWindowHide(): void
    {
    }

    openTab(index: EnumRankTab = -1)
    {
        if(index == -1)
            index = this.m_tab.selectedIndex;
        this.m_tab.setSelectedIndex(index);
        switch (index) {
            case EnumRankTab.LadderCurrent:
            case EnumRankTab.LadderAll:
                this.m_ladder.updateView(index)
                break;
                case EnumRankTab.FameHall:
            {
                this.m_fame.updateView(index);
            }
                break;
                case EnumRankTab.FameHistory:
            {
                this.m_history.updateView(index);
            }
                break;
            default:
                break;
        }
    }

    tabOnClick()
    {
        this.openTab();
    }
}