/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SeasonRewardPanelStruct from "../../Generates/ModuleDuelTemp/SeasonRewardPanelStruct";
import DuelTempWindow from '../../../GameModule/ViewWindows/DuelTempWindow';
import Game from '../../../Game';
import {MenuId} from "../../../GameModule/MenuId";

export default class SeasonRewardPanel extends SeasonRewardPanelStruct
{
    moduleWindow: DuelTempWindow;
    // 窗口显示
    onWindowShow(): void
    {
        this.m_btnClose.onClick(this, this.onClose);
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        this.m_btnClose.offClick(this,this.onClose);
    }

    updateView()
    {
        this.m_dan.updateView();
        this.m_server.updateView();
    }
    /**@private                   私有方法                  */

    onClose()
    {
        // this.moduleWindow.menuBack();
        Game.menu.openTab(MenuId.DuelTemp, 0);
    }
}