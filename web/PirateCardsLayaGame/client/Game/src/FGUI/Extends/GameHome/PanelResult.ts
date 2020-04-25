/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PanelResultStruct from "../../Generates/GameHome/PanelResultStruct";
import HomeWindow, { HomeTabType } from "../../../GameModule/ViewWindows/HomeWindow";
import Game from "../../../Game";
import { MenuId } from "../../../GameModule/MenuId";
import GameStatus from "../../../War/Datas/GameStatus";
import War from "../../../War/War";
import AntFrame from "../../../AntFrame/AntFrame";
import ReportMonitor from "../../../Libs/ReportMonitor";

declare var canvas;
declare var wx;


export default class PanelResult extends PanelResultStruct
{
    
    // 窗口
    moduleWindow: HomeWindow;

    // 窗口初始化完毕
    onWindowInited(): void
    {
        this.m_homeBtn.onClick(this, this.OnClickHome);
        this.m_playBtn.onClick(this, this.OnClickPlayBtn);
        this.m_shareBtn.onClick(this, this.OnClickShareBtn);
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
        this.m_coinCurrent.text = GameStatus.goldPerGame + "";
        this.m_coinMax.text = GameStatus.bestGoldPerGame + "";

    }

    OnClickPlayBtn()
    {
        Game.menu.openTab(MenuId.Home, HomeTabType.ChooseHero);
    }

    OnClickHome()
    {
        Game.menu.openTab(MenuId.Home, HomeTabType.MenuMenu);
    }

    shareCount = 0;
    OnClickShareBtn()
    {
        console.log("PanelResult OnClickShareBtn");
        if(!Engine.borwer.isWXGame)
        {
            return;
        }

        wx.setMessageToFriendQuery({shareMessageToFriendScene:2});
        var query = "nickName=" + AntFrame.platform.userInfo.nickName;

        var pos = this.m_resultGroup.localToGlobal(0, 0);
        pos.x = Math.floor(pos.x);
        pos.y = Math.floor(pos.y);
        var w = Math.floor(this.m_resultGroup.width);
        var h = Math.floor(this.m_resultGroup.height);
        // var endPos = this.m_resultGroup.localToGlobal(this.m_resultGroup.width, this.m_resultGroup.height);

        console.log("x=", pos.x, ", y=", pos.y, ", w=", w, ", h=,",h);
        let tempFilePath = canvas.toTempFilePathSync({
            x: pos.x,
            y: pos.y,
            width: w,
            height: h,
            destWidth: w,
            destHeight: h
          })

        ReportMonitor.OnShareResult(this.shareCount ++);
          
        wx.aldShareAppMessage({
            title: `${AntFrame.platform.userInfo.nickName} 战绩`,
            imageUrl: tempFilePath,
            query: query
        });
    }
}