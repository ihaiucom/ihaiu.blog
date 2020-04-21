/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import WindowWarUIStruct from "../../Generates/GameHome/WindowWarUIStruct";
import WarWindow from "../../../GameModule/ViewWindows/WarWindow";
import War from "../../../War/War";
import GameStatus from "../../../War/Datas/GameStatus";

export default class WindowWarUI extends WindowWarUIStruct
{
    // 窗口
    moduleWindow: WarWindow;

    // 窗口初始化完毕
    onWindowInited(): void
    {
        War.init(this);
        this.m_menuTopPanel.m_puaseBtn.onClick(this, this.OnClickPauseBtn);
    }

    // 窗口销毁
    onWindowDestory(): boolean
    {
        return false;
    }

    // 窗口即将打开，可以在这里做缓动
    onWindowWillShow()
    {
        this.m_pausePanel.Close();

    }

    // 窗口即将关闭，可以在这里做缓动
    onWindowWillHide(): void
    {

    }

    // 窗口显示
    onWindowShow(): void
    {
        this.preGold = 0;
        this.m_menuTopPanel.SetCoinIconState();
        War.launch();
        Laya.timer.frameLoop(1, this, this.OnUpdate);
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        Laya.timer.clearAll(this);
    }

    OnClickPauseBtn()
    {
        this.m_pausePanel.Open();
    }

    private preGold: number = 0;
    OnUpdate()
    {
        this.m_menuTopPanel.m_coinText.text = GameStatus.goldPerGame + "";
        this.m_menuTopPanel.m_countText.text =  GameStatus.turnsToBoss + "";
        this.m_menuTopPanel.m_levelTex.text =  GameStatus.gameLevel + "";

        if(this.preGold != GameStatus.goldPerGame)
        {
            this.preGold = GameStatus.goldPerGame;
            this.m_menuTopPanel.PlayFxCoin();
        }
    }

}