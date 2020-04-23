/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GameFormatCardStruct from "../../Generates/GameHome/GameFormatCardStruct";
import HomeWindow from "../../../GameModule/ViewWindows/HomeWindow";
import Game from "../../../Game";
import { MenuId } from "../../../GameModule/MenuId";
import GameStatus from "../../../War/Datas/GameStatus";

export default class GameFormatCard extends GameFormatCardStruct
{
    isFourXFour: boolean = false;
    ColumnCount = 3;
    RowCount = 3;
    coin = 0;

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
    }

    
    // 该组件所在Tab 显示
    onTabShow(): void
    {
        this.SetData();
    }

    // 该组件所在Tab 隐藏
    onTabHide(): void
    {

    }

    SetData()
    {
        var isLock = false;

        if(this.isFourXFour)
        {
            isLock = !GameStatus.isFourXFour;
        }
        
        this.SetBtnState(!isLock);
        this.m_lock.visible = isLock;
        this.m_coinText.text = this.coin + "";
        this.m_coinGroup.visible = isLock;
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
            this.m_playBtn.visible = false;
            this.m_plusBtn.visible = this.coin <= GameStatus.gold;
        }
    }


    OnClickPlayBtn()
    {
        GameStatus.ColumnCount = this.ColumnCount;
        GameStatus.RowCount = this.RowCount;
        Game.menu.open(MenuId.War)
    }

    
    OnClickPlusBtn()
    {
        GameStatus.gold -= this.coin;
        GameStatus.isFourXFour = true;
        this.SetData();
    }

}