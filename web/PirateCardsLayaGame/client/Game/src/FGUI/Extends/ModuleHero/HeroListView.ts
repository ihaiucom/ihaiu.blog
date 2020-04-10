/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroListViewStruct from "../../Generates/ModuleHero/HeroListViewStruct";
import { HeroState, HeroViewType, HeroWindowOpenType } from "../../../GameModule/DataEnums/HeroType";
import Game from "../../../Game";
import { HeroData } from "../../../GameModule/DataStructs/HeroData";
import HeroWindowUI from "./HeroWindowUI";
import GameEventKey from "../../../GameEventKey";
import HeroItemButton, { BattleItemSelectIndex } from "./HeroItemButton";
import HeroPageButton from "./HeroPageButton";
import TEXT from "../../../Config/Keys/TEXT";
import { GuideHelper } from "../../../GameModule/GuideModule/GuideHelper";
import GuideData from "../../../GameModule/DataStructs/GuideData";
import GameLog, { EnumLogLevel } from "../../../GameLog";
import { GuideGroup } from "../../../GameModule/DataModels/GuideModel";
import MenuValidateRed from "../../../GameModule/MenuValidateRed";
import { MenuId } from "../../../GameModule/MenuId";

export default class HeroListView extends HeroListViewStruct
{
    windowUI: HeroWindowUI;
    private heroList: any[] = [];
    private btnNum = 6;
    private fromType: HeroWindowOpenType = HeroWindowOpenType.Default;
    public selectItemIndex: number = 0;
    public selectItemID: number = 0;

    //窗口初始化完毕
    onWindowInited(): void 
    {
    }
    
    //主窗口显示时将被调
    onWindowShow(): void  
    {
        this.m_btnAtlas.onClick(this, this.onClickAtlas);
        this.m_btnView.m_btnOK.onClick(this, this.OnClickBattleOK);
        this.m_btnView.m_btnCancel.onClick(this, this.OnClose);
        
        this.m_battleList.itemRenderer = Laya.Handler.create(this, this.renderBattleListItem, null, false);
        this.m_battleList.on(fgui.Events.CLICK_ITEM, this, this.clickBattleListItem);
        this.m_battleList.setVirtual();
        
        this.m_list.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, false);
        this.m_list.on(fgui.Events.CLICK_ITEM, this, this.clickListItem);
        this.m_list.setVirtual();
        
        this.m_btnList.m_list.itemRenderer = Laya.Handler.create(this, this.renderBtnListItem, null, false);
        this.m_btnList.m_list.on(fgui.Events.CLICK_ITEM, this, this.clickBtnListItem);
        
        Game.event.add(GameEventKey.GameFrame_AddHero, this.OnClickAll, this);

    }

    //主窗口关闭时将被调
    onWindowHide(): void  
    {
        this.m_btnAtlas.offClick(this, this.onClickAtlas);
        this.m_btnView.m_btnOK.offClick(this, this.OnClickBattleOK);
        this.m_btnView.m_btnCancel.offClick(this, this.OnClose);

        this.m_list.itemRenderer.recover();
        this.m_battleList.itemRenderer.recover();
        this.m_list.numItems = 0;
        this.m_battleList.numItems = 0;
        this.m_list.itemPool.clear();
        this.m_battleList.itemPool.clear();
        
        Game.event.remove(GameEventKey.GameFrame_AddHero, this.OnClickAll, this);

        this.onReset();
    }

    renderListItem(index: number, item: HeroItemButton): void  {
        let id = this.heroList[index]
        let data = Game.moduleModel.hero.GetData(id);
        item.RenderItem(data);
        item.index = index;
        
        MenuValidateRed.getInstance().openItem(MenuId.Hero, data, item);
    }

    clickListItem(target: HeroItemButton, event: Event): void  {
        if(target.itemData.state == HeroState.CanGet)
        {
            Game.sender.hero.NewHero(target.itemData.config.id);
        }
        else
        {
            this.selectItemIndex = target.index;
            this.selectItemID = target.itemData.ID;
            this.windowUI.showView(HeroViewType.Info, target.itemData.config.id);
            Game.event.dispatch(GameEventKey.GameFrame_HeroPanelChooseHero);
        }
    }

    renderBtnListItem(index: number, item: HeroPageButton): void  {
        item.index = index;
       
        let iconIndex = index
        if(index == 0)
        {
            iconIndex = 99;
        }
        let config = Game.config.heroType.getConfig(iconIndex)
        let url1 = Game.config.avatar.getConfig(config.buttonIcon1).iconUrl;
        let url2 = Game.config.avatar.getConfig(config.buttonIcon2).iconUrl;
        item.m_typeIconBg.url = url1;
        item.m_typeIcon.url = url2;
    }

    clickBtnListItem(target: HeroPageButton, event: Event): void  {
        let index = target.index;
        if(index == 0)
        {
            this.OnClickAll();
        }
        else
        {
            this.OnClickButton(index);
        }
    }

    renderBattleListItem(index: number, item: HeroItemButton): void  {
        let id = this.heroList[index]
        let data = Game.moduleModel.hero.GetData(id);
        item.RenderItem(data, true);
        item.UpdateBattleInfo(this.GetBattleItemState(id));

    }

    clickBattleListItem(target: HeroItemButton, event: Event): void  {
        this.OnBattleItemClick(target);
        Game.event.dispatch(GameEventKey.GameFrame_HeroBattleChooseHero);
    }

    // 图鉴
    onClickAtlas()
    {
        this.m_btnList.m_list.selectedIndex = -1;
        this.heroList = Game.config.hero.getConfigIDs();
        // this.heroList.sort((a: number, b:number)=> {return a - b;})

        Game.moduleModel.hero.SortAtlas(this.heroList);
        this.updateList();
    }

    // 全部
    OnClickAll()
    {
        this.heroList = Game.config.hero.getConfigIDs();
        this.sortList()
        this.updateList()
    }

    // 类型按钮
    OnClickButton(index: number)
    {
        this.heroList = Game.config.hero.getTypeList(index);
        this.sortList()
        this.updateList();
    }

    updateList()
    {
        if(this.fromType == HeroWindowOpenType.BattlePlan || this.fromType == HeroWindowOpenType.Team)
        {
            this.initBattleList();
        }
        else
        {
            this.m_list.numItems = this.heroList.length;
        }
    }

    initView(param: any[] = null)
    {
        if(param)
        {
            let fromType = param[0]
            this.fromType = fromType;
            if(fromType == HeroWindowOpenType.BattlePlan || fromType == HeroWindowOpenType.Team)
            {
                this.inBattleHeroID = param[1];
                this.inBattleHeroList = param[2];
                this.onCloseCallback = param[3];
                this.m_showState.selectedIndex = 1;
            }
            else
            {
                this.m_showState.selectedIndex = 0;
            }
        }
        else
        {
            this.m_showState.selectedIndex = 0;
        }
        
        this.m_btnList.m_list.numItems = this.btnNum;
        this.m_btnList.m_list.selectedIndex = 0;        
        this.OnClickAll();
        
        // 引导
        Laya.timer.once(20, this, this.CheckGuide);
    }

    onReset()
    {
        this.heroList = [];
        this.fromType = null;
        this.inBattleHeroID = null;
        this.inBattleHeroList = null;
        this.selectBattleHeroID = null;
    }

    /**
     * 排序规则: 1：可获取；2：已上阵；3：星级；4：等级；5: ID
     */
    sortList()
    {
        if(this.fromType == HeroWindowOpenType.BattlePlan || this.fromType == HeroWindowOpenType.Team)
        {
            this.OnBattleSortList();
            return;
        }

        this.heroList = Game.moduleModel.hero.Sort(this.heroList);
    }

    /*************************选择上阵功能*****************************/
    // TODO 可以选择优化
    /**
     * 排序规则: 1：当前选择；3：星级；4：等级；5: ID
     */
    private inBattleHeroID: int; // 当前已经上阵的角色
    private inBattleHeroList: int[]; // 当前队伍上阵的角色，在当前选择列表内删除
    private selectBattleHeroID: int; // 当前选中的角色
    private onCloseCallback: Function;

    initBattleList()
    {
        this.m_battleList.numItems = this.heroList.length;
        this.m_battleList.selectedIndex = -1;
    }

    GetBattleItemState(heroID: int)
    {
        if(heroID == this.inBattleHeroID)
        {
            return BattleItemSelectIndex.dowm;
        }

        return BattleItemSelectIndex.default;
    }

    OnBattleItemClick(item: HeroItemButton)
    {
        let heroID = item.itemData.id;
        if(this.selectBattleHeroID == heroID)
        {
            return;
        }

        if(this.inBattleHeroID == heroID)
        {
            this.onCloseCallback(heroID,true);
            this.OnClose();
            return;
        }

        this.selectBattleHeroID = heroID;
    }

    OnClickBattleOK()
    {
        if(this.selectBattleHeroID != null && this.inBattleHeroID == this.selectBattleHeroID)
        {
            Game.system.toastText(TEXT.HeroInBattle);
            return
        }

        Game.event.dispatch(GameEventKey.GameFrame_HeroBattleHero);
        if(this.selectBattleHeroID != null && this.onCloseCallback)
        {
            this.onCloseCallback( this.selectBattleHeroID, false )
        }

        this.OnClose()
    }

    OnClickBattleCancel()
    {
        this.OnClose()
    }

    OnBattleSortList()
    {
        let list = this.heroList.concat()
        let tmpList = []

        // 拿出当前角色的
        for(let i = list.length - 1; i >= 0; i--)
        {
            let id = list[i]
            if(id == this.inBattleHeroID)
            {
                tmpList.push(id);
                list.splice(i,1);
            }
        }

        // 删除可招募和未获得的角色
        for(let i = list.length - 1; i >= 0; i--)
        {
            let id = list[i]
            let data: HeroData = Game.moduleModel.hero.GetData(id)
            if(data.state == HeroState.CanGet)
            {
                list.splice(i,1);
            }
            else if(data.state == HeroState.NotGet)
            {
                list.splice(i,1);
            }

            // 删除当前上阵队伍中的角色
            if(this.inBattleHeroList.length && this.inBattleHeroList.length > 0)
            {
                for(let _id of this.inBattleHeroList)
                {
                    if(_id == id)
                    {
                        list.splice(i,1);
                    }
                }
            }
        }

        // list = this.baseSortList(list);
        list = Game.moduleModel.hero.baseSortList(list);
        tmpList.push.apply(tmpList,list);
        this.heroList = tmpList;
    }

    OnClose()
    {        
        this.onReset();
        this.windowUI.onBack();
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
        if(data && !data.isOver) // && data.CheckProgress(1)
        {
            this.GuideHero(data);
        }

        data = model.GetData(GuideGroup.HERO_EQUIP);
        if(data && !data.isOver) // && data.CheckProgress(1)
        {
            this.GuideHero(data);
        }

        data = model.GetData(GuideGroup.BATTLE_PLAN_SECOND);
        if(data && !data.isOver) // && data.CheckProgress(3)
        {
            this.GuideBattleHero(data);
        }
    }

    /**
     * 进入英雄引导
     * @param data 
     */
    private GuideHero(data : GuideData)
    {
        if(data)
        {
            
            let btn = this.m_list.getChildAt(0);
            let pos = GuideHelper.GetObjGlobalPosInLeftTopPovit(btn);// btn.parent.localToGlobal(btn.x, btn.y);
            Game.system.guideMgr.ChangeGuideDialog(pos.x, pos.y, btn.width, btn.height);
            GuideHelper.FguiListChangeByIndex(0, this.m_list, this.clickListItem, this);
            // this._battleEnterParent = btn.parent;
            // GuideHelper.ChangeObjParent(btn, Game.system.guideMgr.otherNode);
            Game.event.add(GameEventKey.GameFrame_HeroPanelChooseHero, this.GuideHeroFinish, this);
            
            // btn.onClick(this, this.BattleRecover, [btn, beforeParent]);
        }
    }

    /**
     * 结束进入英雄面引导
     */
    private GuideHeroFinish()
    {
        let model = Game.moduleModel.guide;
        if(!model )
        {
          GameLog.Log(EnumLogLevel.Error, "HeroWindowUI, GuideHeroFinish error");
          return;
        }
        model.DataGotoNextStep(Game.system.guideMgr.nowGuideGroup);
        Game.event.remove(GameEventKey.GameFrame_HeroPanelChooseHero, this.GuideHeroFinish, this);
        Game.event.dispatch(GameEventKey.GameFrame_HeroChooseFinish);
    }

    /**
     * 备战选择第二个英雄
     * @param data 
     */
    private GuideBattleHero(data: GuideData)
    {
        if(data)
        {
            let index = 0;
            let btn = this.m_battleList.getChildAt(index);
            let pos = GuideHelper.GetObjGlobalPosInLeftTopPovit(btn);// btn.parent.localToGlobal(btn.x, btn.y);
            Game.system.guideMgr.ChangeGuideDialog(pos.x, pos.y, btn.width, btn.height);
            GuideHelper.FguiListChangeByIndex(index, this.m_battleList, this.clickBattleListItem, this);
            // this._battleEnterParent = btn.parent;
            // GuideHelper.ChangeObjParent(btn, Game.system.guideMgr.otherNode);
            Game.event.add(GameEventKey.GameFrame_HeroBattleChooseHero, this.GuideBattleHeroChooseFinish, this);
        }
    }

    /**
     * 备战选择第二个英雄
     */
    private _battleEnterParent
    private GuideBattleHeroChooseFinish()
    {
        let model = Game.moduleModel.guide;
        if(!model )
        {
        //   GameLog.Log(EnumLogLevel.Error, "HeroWindowUI, GuideHeroFinish error");
          return;
        }
        model.DataGotoNextStep(Game.system.guideMgr.nowGuideGroup);
        Game.event.remove(GameEventKey.GameFrame_HeroBattleChooseHero, this.GuideBattleHeroChooseFinish, this);
        
        // 进入确定按钮的引导
        let obj = this.m_btnView.m_btnOK;
        let pos = GuideHelper.GetObjGlobalPosInLeftTopPovit(obj);//obj.parent.localToGlobal(obj.x, obj.y);
        Game.system.guideMgr.ChangeGuideDialog(pos.x, pos.y, obj.width, obj.height);

        this._battleEnterParent = obj.parent;
        GuideHelper.ChangeObjParent(obj, Game.system.guideMgr.otherNode);
        Game.event.add(GameEventKey.GameFrame_HeroBattleHero, this.GuideBattleHeroFinish, this);
    }

    /**
     * 备战选择第二个英雄， 确定按钮
     */
    private GuideBattleHeroFinish()
    {
        let model = Game.moduleModel.guide;
        if(!model )
        {
        //   GameLog.Log(EnumLogLevel.Error, "HeroWindowUI, GuideHeroFinish error");
          return;
        }
        GuideHelper.ChangeObjParent(this.m_btnView.m_btnOK, this._battleEnterParent);
        Game.system.guideMgr.HideGuideDialog();
        model.DataGotoNextStep(Game.system.guideMgr.nowGuideGroup);
        Game.event.remove(GameEventKey.GameFrame_HeroBattleHero, this.GuideBattleHeroFinish, this);
    }
}