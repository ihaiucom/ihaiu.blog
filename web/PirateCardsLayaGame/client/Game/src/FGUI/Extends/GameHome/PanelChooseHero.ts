/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PanelChooseHeroStruct from "../../Generates/GameHome/PanelChooseHeroStruct";
import HomeWindow, { HomeTabType } from "../../../GameModule/ViewWindows/HomeWindow";
import Game from "../../../Game";
import { MenuId } from "../../../GameModule/MenuId";

export default class PanelChooseHero extends PanelChooseHeroStruct
{
    
    // 窗口
    moduleWindow: HomeWindow;

    // 窗口初始化完毕
    onWindowInited(): void
    {
        this.m_playBtn.onClick(this, this.OnClickPlayBtn);
        this.m_plusBtn.onClick(this, this.OnClickPlusBtn);
    }

    
    // 窗口显示
    onWindowShow(): void
    {
        this.SetBtnState();
    }

    
    // 该组件所在Tab 显示
    onTabShow(): void
    {
        console.log("PanelChooseHero onTabShow");
        this.SetBtnState();
    }

    // 该组件所在Tab 隐藏
    onTabHide(): void
    {
        console.log("PanelChooseHero onTabHide");

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
        Game.menu.openTab(MenuId.Home, HomeTabType.Shop);
    }

    OnClickPlusBtn()
    {
    }
    
}