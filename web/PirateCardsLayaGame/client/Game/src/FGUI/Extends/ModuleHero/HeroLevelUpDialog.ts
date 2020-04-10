/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroLevelUpDialogStruct from "../../Generates/ModuleHero/HeroLevelUpDialogStruct";
import Game from "../../../Game";
import HeroUseItem from "./HeroUseItem";
import GameEventKey from "../../../GameEventKey";
import TEXT from "../../../Config/Keys/TEXT";
import ItemData from "../../../GameModule/DataStructs/ItemData";
import GuideData from "../../../GameModule/DataStructs/GuideData";
import { GuideGroup } from "../../../GameModule/DataModels/GuideModel";
import GameLog, { EnumLogLevel } from "../../../GameLog";
import { GuideHelper } from "../../../GameModule/GuideModule/GuideHelper";
var Tickcounter = 0 ; 

var Running = true ;

var ItemConsumed = 0 ;

var timeout =null;

var MaxLevel = false ; 

var MaxLevelInLoop = false ; 
var counterInc =function() {

    //console.log("Running : ",Running);
    if (Running)
    {
        let interval = null ;
        if ( Tickcounter>= 0 && Tickcounter  <1) 
        {
            Tickcounter ++ ;
            interval =1 ;
        }
        else if   (Tickcounter >= 1 && Tickcounter  < 2 )
        {
            Tickcounter+= 1/3 ;
            interval = 3;
        }
        else if (Tickcounter >= 2 && Tickcounter  < 3)
        {
            Tickcounter += 1/4;

            interval = 4;
        }
        else if (Tickcounter >= 3 && Tickcounter  < 4)
        {
            Tickcounter += 1/6;
            interval = 6;
        }
        else 
        {
            Tickcounter += 1/8;
            interval = 8;
        }

        ItemConsumed +=1 ; 
        Game.event.dispatch(GameEventKey.GameFrame_HeroLeveling);
        
    
        // console.log("ItemConsumed: ",ItemConsumed);

        timeout = setTimeout(counterInc,1000/interval);
    }
}

export default class HeroLevelUpDialog extends HeroLevelUpDialogStruct
{
    heroID: number;
    itemID: number;

    lastSelectItemID: number;

    onLevelUpClick : boolean ;
    interval = null;

    currentEXP : number ;           // 备份  按升级按钮前的道具和经验数据
    currentItemNumber : number ;
    // private dialogCtrl: DialogCtrl;
    /** 关闭的回调 */
    private _closeCallFun : Function = null;

    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);

        // this.m_btnLevel.onClick(this, this.OnClickLevlUp);
        this.m_list.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, false);
        this.m_list.on(fgui.Events.CLICK_ITEM, this, this.clickListItem);

        this.m_btnLevel.m_button.on(fgui.Events.STATE_CHANGED,this,this.onChanged);   //获取"升级"按钮状态
    }

    OnUpdate()
    {
        this.refreshView();  //更新界面
    }

    refreshView()
    {
        // TO DO  修改道具数量  和 人物EXP
       
        // 更新人物经验值
        Game.event.dispatch(GameEventKey.GameFrame_UpdateEXP,this.heroID,this.itemID);

        // 更新道具数量
        Game.event.dispatch(GameEventKey.GameFrame_ConsumeItem,this.itemID, MaxLevel);
      
    }

    restoreView()   // 在服务器返回更新 数据信息失败时候调用
    {
        // To Do 恢复道具 数量 和人物exp 至 发送 按下升级按钮之前 数据  


    }

    backUpData()    //备份数据
    {
        //To DO
        Game.event.dispatch(GameEventKey.GameFrame_BackUpData);
        //this.currentItemNumber;
        //this.currentEXP;
    }

    onChanged()
    {
        if(Game.moduleModel.hero.IsMaxLevel(this.heroID))
        {
            Game.system.toastText(TEXT.HeroLevelUpMax);
            return;
        }

        switch (this.m_btnLevel.m_button.selectedIndex)
        {
            case 1:   //down
                this.backUpData();        //备份数据 在请求失败时恢复数据 待处理
                this.onLevelUpClick =true ;
                Tickcounter = 0 ;
                ItemConsumed = 0 ;
                Running= true;  
              
                MaxLevel = false; 
                MaxLevelInLoop = false ;
                timeout = setTimeout(counterInc, 1000);
                break;
            case 0:   //up
                if (this.onLevelUpClick)
                {
                    Running = false ;
                    clearTimeout(timeout);
                    if (ItemConsumed == 0)
                    {
                         // 更新人物经验值
                        Game.event.dispatch(GameEventKey.GameFrame_UpdateEXP,this.heroID,this.itemID);
                        // 更新道具数量
                        Game.event.dispatch(GameEventKey.GameFrame_ConsumeItem,this.itemID, MaxLevel);
                        ItemConsumed++;

                        Game.event.dispatch(GameEventKey.GameFrame_HeroExpIncreaseByItem);
                    }
                    if (MaxLevel)
                    {
                        Game.system.toastText(TEXT.HeroLevelUpNotEnough);
                    }
                    else
                    {
                        if (MaxLevelInLoop)
                        {
                            
                        }
                        this.sendItemNumber(ItemConsumed);   // 发送服务器请求
                    }
                    this.onLevelUpClick = false ; 
                }
                break;
            case 2 :   //over 
                if (this.onLevelUpClick)
                {
                    Running = false ;
                    clearTimeout(timeout);
                    if (ItemConsumed == 0)
                    {
                         // 更新人物经验值
                         Game.event.dispatch(GameEventKey.GameFrame_UpdateEXP,this.heroID,this.itemID);
                         // 更新道具数量
                         Game.event.dispatch(GameEventKey.GameFrame_ConsumeItem,this.itemID, MaxLevel);
                        
                         ItemConsumed++;
                         Game.event.dispatch(GameEventKey.GameFrame_HeroExpIncreaseByItem);
                    }
                    if (MaxLevel)
                    {
                        //ItemConsumed ++ ; 
                        Game.system.toastText(TEXT.HeroLevelUpNotEnough);
                    }
                    else
                    {
                        if (MaxLevelInLoop)
                        {
                            //ItemConsumed ++ ; 
                        }
                        this.sendItemNumber(ItemConsumed);   // 发送服务器请求
                    }
                    this.onLevelUpClick = false ; 
                }
                break;
        }
    }

    sendItemNumber(itemConsumedNumber :number)
    {
        if(this.itemID)
        {
            Game.sender.hero.HeroLevelUp(this.heroID, this.itemID, itemConsumedNumber);
        }
        else
    {
            // 未选中item 
        }
    }

    open(id: number, funCloseCall? : Function, context? : any): void {
        this.heroID = id;
        this.updateView()
        // this.dialogCtrl.open();
        // this.CheckGuide();

        Game.event.add(GameEventKey.gameFrame_GuideOpenLevelUpPanel, this.CheckGuide, this);
        // 回调
        if(funCloseCall && context)
        {
            this._closeCallFun = funCloseCall;
            this._closeCallFun.apply(this);
        }
    }

    //弹窗关闭
    close(): void  {
        this.heroID = null;
        this.itemID = null;
        this.lastSelectItemID = null;

        if(this._closeCallFun && this._closeCallFun instanceof Function)
        {
            this._closeCallFun();
            this._closeCallFun = null;
        }
        // this.dialogCtrl.close();    
    }
    ItemStop()
    {
        Running= false ;
    }
    MaxLevelStop()
    {
        Running = false ;
        MaxLevel = true;
    }

    MaxLevelStopInLoop()
    {
        Running = false ;
        MaxLevelInLoop = true;
    }

    //主窗口显示时将被调
    onWindowShow(): void  {
        Game.event.add(GameEventKey.GameFrame_HeroLevelUp, this.updateView, this);
        Game.event.add(GameEventKey.GameFrame_HeroLeveling, this.OnUpdate, this);
        Game.event.add(GameEventKey.GameFrame_ItemExceedBound, this.ItemStop, this);
        Game.event.add(GameEventKey.GameFrame_LevelExceedBound ,this.MaxLevelStop, this);
        Game.event.add(GameEventKey. GameFrame_LevelExceedMaxLevelInLoop ,this.MaxLevelStopInLoop, this);
    
        
    }

    //主窗口关闭时将被调
    onWindowHide(): void  {
        // this.close();
        Game.event.remove(GameEventKey.GameFrame_HeroLevelUp, this.updateView, this);
        Game.event.remove(GameEventKey.GameFrame_HeroLeveling, this.OnUpdate, this);
        Game.event.remove(GameEventKey.GameFrame_ItemExceedBound, this.ItemStop, this);
        Game.event.remove(GameEventKey.GameFrame_LevelExceedBound ,this.MaxLevelStop, this);
        Game.event.remove(GameEventKey. GameFrame_LevelExceedMaxLevelInLoop ,this.MaxLevelStopInLoop, this);
    }

    updateView()
    {
        this.m_list.numItems = 3;
        this.selectDefaultItem();
        this.updateDesc();
    }

    selectDefaultItem()
    {
        this.m_list.selectedIndex = -1;
        // 选中之前使用的
        if(this.lastSelectItemID)
        {
            for(let i = 0; i < 3; ++i)
            {
                let itemID = Global.heroLevelItem[i];
                let itemNum = Game.moduleModel.bag.getItemNum(itemID);
                if(this.lastSelectItemID == itemID && itemNum > 0)
                {
                    this.m_list.selectedIndex = i;
                    this.updateDesc();
                    return;
                }
            }
        }
        
        for(let i = 0; i < 3; ++i)
        {
            let itemID = Global.heroLevelItem[i];
            let itemNum = Game.moduleModel.bag.getItemNum(itemID);
            if(itemNum > 0)
            {
                this.itemID = itemID;
                this.m_list.selectedIndex = i;
                this.updateDesc();
                return;
            }
        }

        this.itemID = Global.heroLevelItem[0];
        this.updateDesc();
    }

    updateDesc()
    {
        let config = Game.config.item.getConfig(this.itemID);
        this.m_itemEXP.text = TEXT.BagItemLevelUp.format(config.value);
        this.m_itemName.text = config.zhCnName +":";
    }

    //List刷新回调
    renderListItem(index: number, item: HeroUseItem): void  {
        let itemID = Global.heroLevelItem[index];
        item.RenderItem(itemID);
    }

    //List点击回调
    clickListItem(target: HeroUseItem, event: Event): void  {
        let itemID = target.itemID;
        this.itemID = itemID;
        this.lastSelectItemID = itemID;
        this.updateDesc();

        let itemNum = Game.moduleModel.bag.getItemNum(target.itemID)
        if(itemNum <= 0)
        {
            let data = ItemData.Create(itemID,1);
            Game.system.SystemObtainShow(data.id);
            return;
        }
    }
    
    OnClickLevlUp()
    {        
        if(this.itemID)
        {
            if(Game.moduleModel.hero.CanLevle(this.heroID))
            {
                Game.sender.hero.HeroLevelUp(this.heroID, this.itemID, 1)
            }
            else
            {
                Game.system.toastText(TEXT.HeroLevelUpNotEnough)
            }
        }
    }

    private CheckGuide()
    {
        let model = Game.moduleModel.guide;
        if(!model)
        {
            return;
        }

        let data : GuideData = null;
        data = model.GetData(GuideGroup.HERO_LEVELUP);
        if(data && !data.isOver) // && data.CheckProgress(3)
        {
            this.GuideHero(data);
        }
    }

    /** 引导专用 */
    private _battleEnterParent : any = null;
    /**
     * 进入英雄引导
     * @param data 
     */
    private GuideHero(data : GuideData)
    {
        if(data)
        {
            
            let btn = this.m_btnLevel;
            let pos = GuideHelper.GetObjGlobalPosInLeftTopPovit(btn);// btn.parent.localToGlobal(btn.x, btn.y);
            Game.system.guideMgr.ChangeGuideDialog(pos.x, pos.y, btn.width, btn.height);

            this._battleEnterParent = btn.parent;
            GuideHelper.ChangeObjParent(btn, Game.system.guideMgr.otherNode);
            Game.event.add(GameEventKey.GameFrame_HeroExpIncreaseByItem, this.GuideHeroFinish, this);
            this.itemUsedCount = 0;
            
            Game.event.remove(GameEventKey.gameFrame_GuideOpenLevelUpPanel, this.CheckGuide, this);
        
            // btn.onClick(this, this.BattleRecover, [btn, beforeParent]);
        }
    }

    private itemUsedCount = 0;

    /**
     * 结束进入英雄面引导
     */
    private GuideHeroFinish()
    {
        this.itemUsedCount ++;
        if(this.itemUsedCount < 1)
        {
            return;
        }
        let model = Game.moduleModel.guide;
        if(!model || !this._battleEnterParent)
        {
          GameLog.Log(EnumLogLevel.Error, "HeroLevelUpDialog, GuideHeroFinish error");
          return;
        }
        Game.system.guideMgr.HideGuideDialog();
        GuideHelper.ChangeObjParent(this.m_btnLevel, this._battleEnterParent);
        model.DataGotoNextStep(Game.system.guideMgr.nowGuideGroup);
        Game.event.remove(GameEventKey.GameFrame_HeroExpIncreaseByItem, this.GuideHeroFinish, this);
        // this.ShowCloseGuide();
        Game.event.dispatch(GameEventKey.GameFrame_HeroLevelGuideUpClose);
        // this.dialogCtrl.close();
    }
    // TODO 先这样写了，不放在引导里面
    private ShowCloseGuide()
    {
        let guideMgr = Game.system.guideMgr;
        guideMgr.HideMask();
        guideMgr.ShowFinger(400, 300);
        let text = Game.config.msg.getConfig(TEXT.GuideBack) ? Game.config.msg.getConfig(TEXT.GuideBack).zhCnNotice : "";
        guideMgr.ShowTextNode(400, 300, 2, text);
    }

    /*******************************************连续升级*******************************************************/
    onButtonState()
    {
        let index = this.m_btnLevel.m_button.selectedIndex
        console.log("按钮状态:", index)
        switch (index)
        {
            case 0: // UP
                break;
            case 1: // DOWM
                break;
            case 2: // OVER
                break;
            default:
                break;
        }
    }
}