/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GameFormatCardStruct from "../../Generates/GameHome/GameFormatCardStruct";
import HomeWindow from "../../../GameModule/ViewWindows/HomeWindow";
import Game from "../../../Game";
import { MenuId } from "../../../GameModule/MenuId";

export default class GameFormatCard extends GameFormatCardStruct
{
    // 窗口
    moduleWindow: HomeWindow;

    // 窗口初始化完毕
    onWindowInited(): void
    {
        this.m_playBtn.onClick(this, this.OnClickPlayBtn);
        this.m_plusBtn.onClick(this, this.OnClickPlusBtn);
        this.SetBtnState(true);
    }

    
    // 窗口显示
    onWindowShow(): void
    {
    }

    
    // 该组件所在Tab 显示
    onTabShow(): void
    {
        console.log("PanelMainMenu onTabShow");
    }

    // 该组件所在Tab 隐藏
    onTabHide(): void
    {
        console.log("PanelMainMenu onTabHide");

    }

    
    SetBtnState(isPlay: boolean = true)
    {
        if(isPlay)
        {
            this.m_plusBtn.visible = false;
            this.m_playBtn.visible = true;
        }
        else
        {
            this.m_plusBtn.visible = true;
            this.m_playBtn.visible = false;
        }
    }


    OnClickPlayBtn()
    {
        Game.menu.open(MenuId.War)
    }

    
    OnClickPlusBtn()
    {
    }

}