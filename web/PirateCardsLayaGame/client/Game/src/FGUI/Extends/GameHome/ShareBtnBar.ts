/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ShareBtnBarStruct from "../../Generates/GameHome/ShareBtnBarStruct";
import AntFrame from "../../../AntFrame/AntFrame";
import Game from "../../../Game";
import GameStatus from "../../../War/Datas/GameStatus";
import { MenuId } from "../../../GameModule/MenuId";
import War from "../../../War/War";
import ReportMonitor from "../../../Libs/ReportMonitor";

declare var canvas;
declare var wx;
export default class ShareBtnBar extends ShareBtnBarStruct
{
    

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
        
        this.m_wxBtn.onClick(this, this.OnClickWxBtn);
        this.InitWXShare();
    }

    async OnClickWxBtn()
    {
        console.log("ShareBtnBar OnClickWxBtn");
        this.getShareImage();
        if(!Engine.borwer.isWXGame)
        {
            return;
        }
        
          
       
        ReportMonitor.OnShareBtn(this.ShareCount);
        wx.aldShareAppMessage(this.getShareObj());
        this.DelayShareGet();
        
    }

    getShareObj()
    {
        return {
            title:VersionConfig.Title,
            query: this.getShareQuery(),
            imageUrl:this.getShareImage()
        }
    }

    getShareQuery()
    {
        var menuId =Game.menu.getLastOpenMenuId();
        var menuCtrl = Game.menu.getMenuCtl(menuId);
        var query = "nickName=" + AntFrame.platform.userInfo.nickName +
            "&menuId=" + menuId +
            "&tabIndex=" + (menuCtrl &&  menuCtrl.openParametar ? menuCtrl.openParametar.openIndex : 0);
        return query;
    }

    getShareImage()
    {
        if(Engine.borwer.isWXGame)
        {
            if(Game.menu.isOpened(MenuId.War))
            {
                if(War.game && War.game.container)
                {
                    
                    ReportMonitor.OnShareWar(this.ShareCount);
                    var container = War.game.container;
                    
                    var pos = container.localToGlobal(container.width * -0.5, container.height * -0.5);
                    pos.x = Math.floor(pos.x);
                    pos.y = Math.floor(pos.y);
                    var w = Math.floor(container.width * 0.5);
                    var h = Math.floor(container.height * 0.5);
                    var endPos = container.localToGlobal(w, h);
                    w = endPos.x - pos.x;
                    h = endPos.y - pos.y;
    
                    var tempFilePath = canvas.toTempFilePathSync({
                        x: pos.x,
                        y: pos.y,
                        width: w,
                        height: h,
                        destWidth: w,
                        destHeight: h
                      });
                      return tempFilePath;
                }
            }
        }
        
        return VersionConfig.ShareImgUrl;
    }


    static isInited = false;
    InitWXShare()
    {
        if(ShareBtnBar.isInited)
        {
            return;
        }


        ShareBtnBar.isInited = true;
        if(window['wx'])
        {
            wx.showShareMenu() 
            wx.aldOnShareAppMessage( ()=>
            {
                ReportMonitor.OnShare(this.ShareCount);
                this.DelayShareGet();
                return this.getShareObj();
            })
            
        }
    }


    private _shareCount = 0;
    get ShareCount()
    {
        var lastDate =  Game.localStorage.getInt("ShareDate", false);
        var date = new Date().getDate();
        if(date != lastDate)
        {
            this._shareCount = 0;
        }
        else
        {
            this._shareCount = Game.localStorage.getInt("ShareCount2", false);
        }

        return this._shareCount;
         
    }

    set ShareCount(val: number)
    {
        var lastDate =  Game.localStorage.getInt("ShareDate", false);
        var date = new Date().getDate();
        if(date != lastDate)
        {
            val = 1;
            Game.localStorage.setInt("ShareDate", date)
        }
        this._shareCount = val;
        Game.localStorage.setInt("ShareCount2", val, false);
    }

    DelayShareGet()
    {
        Laya.timer.once(1000, this, this.OnShareGet);
    }

    OnShareGet()
    {
        this.ShareCount ++;
        if(this.ShareCount <= 10)
        {
            GameStatus.gold += 100;
            Game.system.toastText(`今日分享 ${this.ShareCount}/10, 获得奖励金币+100`);
        }
    }
}