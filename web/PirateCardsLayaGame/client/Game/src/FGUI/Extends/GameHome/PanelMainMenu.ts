/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PanelMainMenuStruct from "../../Generates/GameHome/PanelMainMenuStruct";
import { MenuId } from "../../../GameModule/MenuId";
import Game from "../../../Game";
import HomeWindow, { HomeTabType } from "../../../GameModule/ViewWindows/HomeWindow";
import SoundController from "../../../War/Logics/SoundController";

export default class PanelMainMenu extends PanelMainMenuStruct
{
    // 窗口
    moduleWindow: HomeWindow;

    // 窗口初始化完毕
    onWindowInited(): void
    {
        this.m_btnBar.m_bigPlayBtn.onClick(this, this.OnClickPlayBtn);
        this.m_btnBar.m_soundBtn.onClick(this, this.OnClickSoundBtn);
        this.m_btnBar.m_groupBtn.onClick(this, this.OnClickGroupBtn);
    }

    
    // 窗口显示
    onWindowShow(): void
    {
        this.m_btnBar.m_soundBtn.SetSoundBtnState();
    }

    
    // 该组件所在Tab 显示
    onTabShow(): void
    {
    }

    // 该组件所在Tab 隐藏
    onTabHide(): void
    {

    }
    


    OnClickPlayBtn()
    {
        Game.menu.openTab(MenuId.Home, HomeTabType.ChooseHero);
    }

    OnClickSoundBtn()
    {
        SoundController.instance.changeSoundState();
        this.m_btnBar.m_soundBtn.SetSoundBtnState();
    }
    
    OnClickGroupBtn()
    {
    }
}