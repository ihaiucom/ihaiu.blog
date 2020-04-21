/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PanelPauseStruct from "../../Generates/GameHome/PanelPauseStruct";
import Game from "../../../Game";
import { MenuId } from "../../../GameModule/MenuId";
import SoundController from "../../../War/Logics/SoundController";
import War from "../../../War/War";

export default class PanelPause extends PanelPauseStruct
{
    // 窗口初始化完毕
    onWindowInited(): void
    {
        this.m_homeBtn.onClick(this, this.OnClickHomeBtn);
        this.m_soundBtn.onClick(this, this.OnClickSoundBtn);
        this.m_resumeBtn.onClick(this, this.OnClickResumeBtn);
    }


    Open()
    {
        this.visible = true;
        War.game.isPause = true;
        this.m_soundBtn.SetSoundBtnState();
    }

    Close()
    {
        this.visible = false;
        War.game.isPause = false;
    }


    OnClickHomeBtn()
    {
        War.setGameOver();
        this.Close();
    }
    
    OnClickSoundBtn()
    {
        SoundController.instance.changeSoundState();
        this.m_soundBtn.SetSoundBtnState();
    }

    OnClickResumeBtn()
    {
        this.Close();
    }


}