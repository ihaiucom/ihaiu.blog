/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PauseViewStruct from "../../Generates/GameWarUI/PauseViewStruct";
import { War } from "../../../GameWar/Logic/War";

export default class PauseView extends PauseViewStruct
{
    // 窗口即将打开，可以在这里做缓动
    onWindowWillShow()
    {
       this.m_btnContinu.onClick(this, this.OnClickContinueBtn);
       this.m_btnExite.onClick(this, this.OnClickExitBtn);
    }

    // 窗口即将关闭，可以在这里做缓动
    onWindowWillHide(): void
    {
       this.m_btnContinu.offClick(this, this.OnClickContinueBtn);
       this.m_btnExite.offClick(this, this.OnClickExitBtn);
    }

    OnClickContinueBtn()
    {
        if(War.isPause)
        {
           War.unpause();
        }
        else
        {
           War.pause();
        }
        this.visible = false;
    }

    OnClickExitBtn()
    {
        War.quit();
    }

    
}