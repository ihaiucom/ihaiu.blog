/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PanelMainMenuStruct from "../../Generates/GameHome/PanelMainMenuStruct";
import { MenuId } from "../../../GameModule/MenuId";
import Game from "../../../Game";
import HomeWindow, { HomeTabType } from "../../../GameModule/ViewWindows/HomeWindow";
import SoundController from "../../../War/Logics/SoundController";
import AntPlatformBase from "../../../AntFrame/Platform/AntPlatformBase";
import AntFrame from "../../../AntFrame/AntFrame";
import { AntPlatformWX } from "../../../AntFrame/Platform/AntWX";

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
        this.onTabShow();
    }

    // 窗口显示
    onWindowShow(): void
    {
        this.m_btnBar.m_soundBtn.SetSoundBtnState();
    }

    
    // 该组件所在Tab 显示
    onTabShow(): void
    {
        AntPlatformBase.sGetUserInfoBtnVisiable.add(this.OnGetUserInfoBtnVisiable, this);
        
        if(!AntFrame.platform.userInfo.isAuthed)
        {
            this.getAuth();
        }
        
    }

    // 该组件所在Tab 隐藏
    onTabHide(): void
    {
        AntPlatformBase.sGetUserInfoBtnVisiable.remove(this.OnGetUserInfoBtnVisiable, this);
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

    
    
    async getAuth()
    {
        if(AntFrame.platform instanceof AntPlatformWX)
        {
            let antWx:AntPlatformWX = AntFrame.platform;
            let userInfo = await antWx.WXAuth();
            if(userInfo)
            {
                console.log("userInfo:", userInfo);
                this.OnGetUserInfoBtnVisiable(false);
            }

            // let result = await antWx.WXGetSdkAuthSetting();
            // if(!result)
            // {
            //     this.OnGetUserInfoBtnVisiable(true);
            //     let userInfo = await antWx.WXAuth();
            //     if(userInfo)
            //     {
            //         this.OnGetUserInfoBtnVisiable(false);
            //     }
            // }
            // else
            // {
            //     this.OnGetUserInfoBtnVisiable(false);
            // }
        }
    }

    OnGetUserInfoBtnVisiable(visiable: boolean)
    {
        this.m_state.setSelectedIndex(visiable ? 1 : 0);
    }
    
}