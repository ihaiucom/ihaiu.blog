import ReportMonitorKeyIndex, { ReportMonitorKeyName } from "./ReportMonitorKey";
import Game from "../Game";
import { MenuId } from "../GameModule/MenuId";
import AntFrame from "../AntFrame/AntFrame";
import GameStatus from "../War/Datas/GameStatus";

declare var wx;
export default class ReportMonitor
{
    
    static Send(name: string, value: number)
    {
        return;
        if(!Engine.borwer.isWXGame)
        {
            return;
        }
        wx.reportMonitor(name, value);
    }

    static SendAnalytics(name: string, value: number)
    {
        return;
        if(!Engine.borwer.isWXGame)
        {
            return;
        }
        wx.reportAnalytics(name, {
            value: 1,
            color: 'red'
        })
    }

    static SendEvent(name: string, arg: object)
    {
        if(!Engine.borwer.isWXGame)
        {
            return;
        }
        wx.aldSendEvent(name, arg);

    }

    static OnOpen()
    {
        var date = new Date().getDate();
        var lastOpenDate = Game.localStorage.getInt("ReportManitor_Open_Date", true);
        var lastOpenNum = Game.localStorage.getInt("ReportManitor_Open", true);
        if(lastOpenDate != date)
        {
            Game.localStorage.setInt("ReportManitor_Open_Date", date, true);
            this.SystemPlatform();
            lastOpenNum = 0;
        }

        lastOpenNum ++;
        Game.localStorage.setInt("ReportManitor_Open", lastOpenNum, true);

        
        this.Send(ReportMonitorKeyIndex.Open, 1);
        this.SendAnalytics(ReportMonitorKeyName.Open, lastOpenNum);
        
        this.SendEvent("打开游戏", {"openNum": lastOpenNum});
    }

    static OnMenu(menuId: number, tabIndex: number)
    {
        this.SendEvent("打开菜单", {"menuId": menuId, "tabIndex": tabIndex});
        if(menuId != MenuId.Home)
        {
            return;
        }

        if(tabIndex === undefined || tabIndex === null)
        {
            tabIndex = 0;
        }
        else if(typeof tabIndex == "string")
        {
            tabIndex = parseInt(tabIndex);
        }
        
        var val =  menuId *  1000 + tabIndex;
        this.Send(ReportMonitorKeyIndex.GetBuyMenuHomeTab(tabIndex).toString(), 1);
        this.SendAnalytics(ReportMonitorKeyName.GetBuyMenuHomeTab(tabIndex), 1);
    }

    static war4x4 = 0;
    static war3x3 = 0;
    static OnWar(isF: boolean)
    {
        if(isF)
        {
            this.SendEvent("进入关卡", {"type": 3});
            this.war4x4 ++;
            this.Send(ReportMonitorKeyIndex.War4x4, 1);
            this.SendAnalytics(ReportMonitorKeyName.War4x4, this.war4x4);
            
            ReportMonitor.OnStageStart(4, "关卡4x4")
        }
        else
        {
            this.SendEvent("进入关卡", {"type": 4});
            this.war3x3 ++;
            this.Send(ReportMonitorKeyIndex.War3x3, 1);
            this.SendAnalytics(ReportMonitorKeyName.War3x3, this.war3x3);
            ReportMonitor.OnStageStart(3, "关卡3x3")
        }
    }
    
    static warOver = 0;
    static OnWarOver()
    {
        this.warOver ++;
        this.SendEvent("战斗结束", {"结束次数": this.warOver});
        this.Send(ReportMonitorKeyIndex.ShareResult, 1);
        this.SendAnalytics(ReportMonitorKeyName.ShareResult, this.warOver);
        this.OnStageEnd(GameStatus.gameLevel, GameStatus.gold);
    }

    static SystemPlatform()
    {
        var val = 0;
        var name = "";
        if(Laya.Browser.onAndroid)
        {
            name = "Android";
            val = 1;
        }
        else if(Laya.Browser.onIPhone)
        {
            name = "IPhone";
            val = 2;
        }
        else if(Laya.Browser.onIPad)
        {
            name = "IPad";
            val = 3;
        }
        else if(Laya.Browser.onIOS)
        {
            name = "IOS";
            val = 4;
        }
        this.SendEvent("系统平台", {platform: name});
        this.Send(ReportMonitorKeyIndex.SystemPlatform, val);
        this.SendAnalytics(ReportMonitorKeyName.SystemPlatform, val);
    }

    static OnShare(i: number)
    {
        this.Send(ReportMonitorKeyIndex.Share, 1);
        this.SendAnalytics(ReportMonitorKeyName.Share, 1);
    }

    static OnShareBtn(i: number)
    {
        this.Send(ReportMonitorKeyIndex.ShareBtn, 1);
        this.SendAnalytics(ReportMonitorKeyName.ShareBtn, 1);
    }

    static _shareResult = 0;
    static OnShareResult(i: number)
    {
        i = this._shareResult ++;
        this.Send(ReportMonitorKeyIndex.ShareResult, 1);
        this.SendAnalytics(ReportMonitorKeyName.ShareResult, 1);
    }
    
    static _shareWar = 0;
    static OnShareWar(i: number)
    {
        i = this._shareWar ++;
        this.Send(ReportMonitorKeyIndex.ShareWar, 1);
        this.SendAnalytics(ReportMonitorKeyName.ShareWar, 1);
    }

    

    static OnGload(i: number)
    {
        // this.Send(ReportMonitorKeyIndex.Gold, i);
        this.SendAnalytics(ReportMonitorKeyName.Gold, i);
        this.SendEvent("一次关卡活得金币数量", {value: i});
    }

    
    static OnGloadBest(i: number)
    {
        var lastGoldBest = Game.localStorage.getInt("ReportManitor_GoldBest", false);
        if(lastGoldBest != i)
        {
            Game.localStorage.setInt("ReportManitor_GoldBest", i, false);
            // this.Send(ReportMonitorKeyIndex.GoldBest, i);
            this.SendAnalytics(ReportMonitorKeyName.GoldBest, i);
            this.SendEvent("一次关卡活得最多金币数量", {value: lastGoldBest});
        }
    }

    
    static OnBuyHero(i: number)
    {
        this.Send(ReportMonitorKeyIndex.GetBuyHero(i).toString(), 1);
        this.SendAnalytics(ReportMonitorKeyName.GetBuyHero(i), 1);
        this.SendEvent(ReportMonitorKeyName.GetBuyHero(i), {value: 1});
    }

    static OnBuyShop(i: number)
    {
        this.SendEvent(ReportMonitorKeyName.GetBuyShop(i), {value: 1});
        this.Send(ReportMonitorKeyIndex.GetBuyShop(i).toString(), 1);
        this.SendAnalytics(ReportMonitorKeyName.GetBuyShop(i), 1);
    }

    static stageId = "";
    static stageName = ""
    static OnStageStart(stageId: any, stageName: string)
    {
        this.stageId = stageId;
        this.stageName = stageName;
        if(!Engine.borwer.isWXGame)
        {
            return;
        }
        wx.aldStage.onStart({
            stageId   : stageId, //关卡ID， 必须是1 || 2 || 1.1 || 12.2 格式  该字段必传
            stageName : stageName,//关卡名称，该字段必传
            userId    : AntFrame.platform.userInfo.nickName //用户ID
          })
    }

    
    static OnStageRuningTools(itemType: number)
    {
        if(!Engine.borwer.isWXGame)
        {
            return;
        }

        var itemData = Game.moduleModel.item.getItemToolByType(itemType);
        var itemName = "不知名道具";
        var itemDesc = "不知名道具";
        if(itemData && itemData.itemConfig)
        {
            itemName = itemData.itemConfig.name;
            itemDesc = itemData.itemConfig.itemDes;
        }

        // 在关卡中等级
        wx.aldStage.onRunning({
            stageId   :  this.stageId,
            stageName :  this.name,
            userId    :  AntFrame.platform.userInfo.nickName,
            event     :  "tools",
            params    : 
            {
                itemName : itemName,
                itemCount: 1,
                desc: itemDesc,
            }
        })
    }

    static OnStageEnd(level: number, gold: number)
    {
        if(!Engine.borwer.isWXGame)
        {
            return;
        }
        wx.aldStage.onEnd({
            stageId   :  this.stageId,
            stageName :  this.name,
            userId    :  AntFrame.platform.userInfo.nickName,
            event     : "complete",   //关卡完成  关卡进行中，用户触发的操作    该字段必传
            params    : {
              desc    : "关卡完成",   //描述
              gold    : gold,
              level   : level
            }
          })
    }
}