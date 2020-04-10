/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroInfoViewStruct from "../../Generates/ModuleHero/HeroInfoViewStruct";
import HeroWindowUI from "./HeroWindowUI";
import Game from "../../../Game";
import HeroIconButton from "./HeroIconButton";
import ItemData from "../../../GameModule/DataStructs/ItemData";
import GameEventKey from "../../../GameEventKey";
import GuideData from "../../../GameModule/DataStructs/GuideData";
import { GuideGroup } from "../../../GameModule/DataModels/GuideModel";
import { GuideHelper } from "../../../GameModule/GuideModule/GuideHelper";
import GameLog, { EnumLogLevel } from "../../../GameLog";
import MenuValidateRed from "../../../GameModule/MenuValidateRed";
import { MenuId } from "../../../GameModule/MenuId";

export default class HeroInfoView extends HeroInfoViewStruct
{
    windowUI: HeroWindowUI;
    heroID: number;
    heroList: any[];
    // guide使用
    private _battleEnterParent : any = null;

    onWindowInited(): void 
    {
    }
    
    onWindowShow(): void  
    {
        this.m_btnAdd.onClick(this, this.onClickAdd);
        this.m_list.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, false);
        this.m_list.on(fgui.Events.CLICK_ITEM, this, this.clickListItem);
        this.m_list.setVirtual();
        Game.event.add(GameEventKey.GameFrame_HeroStarUp, this.onUpStar, this);
        

        // guide
        Game.event.add(GameEventKey.GameFrame_HeroChooseFinish, this.CheckGuide, this)
        
        // red
        Game.event.add(GameEventKey.GameFrame_HeroSelectEquip, this.updateList, this);
        Game.event.add(GameEventKey.GameFrame_HeroLevelUp, this.updateList, this);
        Game.event.add(GameEventKey.GameFrame_HeroSkillLevel, this.updateList, this);
        Game.event.add(GameEventKey.GameFrame_HeroStarUp, this.updateList, this);
    }

    onWindowHide(): void  
    {
        this.m_list.off(fgui.Events.CLICK_ITEM, this, this.clickListItem);
        this.m_btnAdd.offClick(this, this.onClickAdd);
        this.m_list.numItems = 0;
        this.m_list.itemRenderer.clear()
        Game.event.remove(GameEventKey.GameFrame_HeroStarUp, this.onUpStar, this);

        // red
        Game.event.remove(GameEventKey.GameFrame_HeroSelectEquip, this.updateList, this);
        Game.event.remove(GameEventKey.GameFrame_HeroLevelUp, this.updateList, this);
        Game.event.remove(GameEventKey.GameFrame_HeroSkillLevel, this.updateList, this);
        Game.event.remove(GameEventKey.GameFrame_HeroStarUp, this.updateList, this);
    }

    resetListItemPos()
    {
        let num = this.m_list.numItems;
        for(let i = 0; i < num; ++i)
        {
            if(i%2 != 0)
            {
                let item = this.m_list.getChildAt(i);
                item.y = item.y + 50;
            }
        }
    }

    renderListItem(index: number, item: HeroIconButton): void  
    {
        let id = this.heroList[index];
        let data = Game.moduleModel.hero.GetData(id);
        item.RenderItem(data);

        MenuValidateRed.getInstance().openItem(MenuId.Hero, data, item);
        if (index == this.m_list.numItems - 1)
        {
            Laya.timer.frameOnce(1, this, this.resetListItemPos);
        }
    }

    clickListItem(target: HeroIconButton, event: Event): void  
    {
        if(this.heroID == target.iconData.id)
        {
            // 不要重复点击同一个
            return;
        }
        this.updateView(target.iconData.config.id)
    }

    onClickAdd()
    {
        let config = Game.config.hero.getConfig(this.heroID);
        let itemID = config.heroItem;
        let data = ItemData.Create(itemID,1);
        Game.system.SystemObtainShow(data.id);
    }
    
    get DefaultSelectIndex(): number
    {
        let list = this.heroList
        if(list && list.length > 0)
        {
            let index = 0;
            let selectID = this.windowUI.m_listView.selectItemID
            for(let id of list)
            {
                if(selectID == id)
                {
                    return index;
                }
                index ++;
            }
        }
        return 0;
    }

    selectItem()
    {
        // let index = this.windowUI.m_listView.selectItemIndex;
        let index = this.DefaultSelectIndex;
        // let index = Game.moduleModel.hero.GetSimpleID(this.heroID) - 1
        this.m_list.scrollToView(index);
        this.m_list.selectedIndex = index;
    }

    updateList()
    {
        let list = Game.config.hero.getConfigIDs();
        list = Game.moduleModel.hero.Sort(list, true);
        this.heroList = list;
        this.m_list.numItems = list.length;
        this.updateListPos();
    }

    updateListPos()
    {
        return
        for(let i = 0; i<this.heroList.length; ++i)
        {
            let item = this.m_list.getChildAt(i);
            if(i%2 == 0)
            {
                item.height = item.height + 100;
            }
        }
    }   

    onUpStar()
    {
        this.updateList();
        this.updateView(this.heroID, false)
    }

    initView(id: number)
    {
        this.updateList();
        this.updateView(id)
        this.selectItem();
    }

    updateView(id: number, needUpdate: boolean = true)
    {
        if(id != this.heroID)
        {
            this.m_detialView.initView(id);
        }
        else
        {
            if(needUpdate)
            {
                this.m_detialView.updateView(id);
            }
        }

        this.heroID = id;
        let data = Game.moduleModel.hero.GetData(id);
        this.m_quality.selectedIndex = data.Quality - 1;
        this.m_name.text = data.Name;
        this.m_star.m_starNum.selectedIndex = data.star;
        this.m_star.m_starPos.selectedIndex = data.star;

        let drawingUrl = Game.moduleModel.hero.Drawing(id);
        this.m_hero.url = drawingUrl;

        let config = Game.config.heroType.getConfig(data.config.type[0])
        let url = Game.config.avatar.getConfig(config.icon).iconUrl;
        this.m_typeIcon.url = url;

        if(!Game.moduleModel.hero.IsGet(id))
        {
            this.m_state.selectedIndex = 1;
            let config = Game.config.hero.getConfig(id);
            let itemID = config.heroItem;
            let itemNum = Game.moduleModel.bag.getItemNum(itemID);
            let needNum = config.heroItemNum;
            this.m_labelNum.text = itemNum + "/" + needNum;

            let ItemData =  Game.config.item.getConfig(itemID)
            if(ItemData)
            {
                this.m_labelItemName.text = ItemData.name + "：";
            }
            else
            {
                this.m_labelItemName.text = "";
            }
        }
        else
        {
            this.m_state.selectedIndex = 0;
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
        if(data && !data.isOver) // && data.CheckProgress(2)
        {
            this.GuideHero(data);
        }
        data = model.GetData(GuideGroup.HERO_EQUIP);
        if(data && !data.isOver) // && data.CheckProgress(2)
        {
            this.GuideEquip(data);
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
            
            let btn = this.m_detialView.m_baseView.m_btnAdd;
            let pos = GuideHelper.GetObjGlobalPosInLeftTopPovit(btn);// btn.parent.localToGlobal(btn.x, btn.y);
            Game.system.guideMgr.ChangeGuideDialog(pos.x, pos.y, btn.width, btn.height);

            this._battleEnterParent = btn.parent;
            GuideHelper.ChangeObjParent(btn, Game.system.guideMgr.otherNode);
            Game.event.add(GameEventKey.GameFrame_HeroInfoShowAddExpPanel, this.GuideHeroFinish, this);
            
            // btn.onClick(this, this.BattleRecover, [btn, beforeParent]);
        }
    }

    /**
     * 结束进入英雄面引导
     */
    private GuideHeroFinish()
    {
        let model = Game.moduleModel.guide;
        if(!model || !this._battleEnterParent)
        {
          GameLog.Log(EnumLogLevel.Error, "HeroInfoView, GuideHeroFinish error");
          return;
        }
        GuideHelper.ChangeObjParent(this.m_detialView.m_baseView.m_btnAdd, this._battleEnterParent);
        model.DataGotoNextStep(Game.system.guideMgr.nowGuideGroup);
        Game.event.remove(GameEventKey.GameFrame_HeroInfoShowAddExpPanel, this.GuideHeroFinish, this);
        Game.event.dispatch(GameEventKey.gameFrame_GuideOpenLevelUpPanel);
    }


    private _detialBtnParent : any = null;
    /**
     * 英雄装备引导
     * @param data 
     */
    private GuideEquip(data : GuideData)
    {
        if(data)
        {
            let btn = this.m_detialView.m_btnEquip;
            this._detialBtnParent = btn.parent;
            let pos = GuideHelper.GetObjGlobalPosInLeftTopPovit(btn);// btn.parent.localToGlobal(btn.x, btn.y);
            Game.system.guideMgr.ChangeGuideDialog(pos.x, pos.y, btn.width, btn.height);
            GuideHelper.ChangeObjParent(btn, Game.system.guideMgr.otherNode);

            Game.event.add(GameEventKey.GameFrame_HeroWindowEquipPanel, this.FinishGuideEquip, this);

        }
    }

    private FinishGuideEquip()
    {
        let model = Game.moduleModel.guide;
        if(!model || !this._detialBtnParent)
        {
          GameLog.Log(EnumLogLevel.Error, "HeroInfoView, FinishGuideEquip error");
          return;
        }
        model.DataGotoNextStep(Game.system.guideMgr.nowGuideGroup);
        GuideHelper.ChangeObjParent(this.m_detialView.m_btnEquip, this._detialBtnParent);
        Game.event.remove(GameEventKey.GameFrame_HeroWindowEquipPanel, this.GuideHeroFinish, this);
        Game.event.dispatch(GameEventKey.GameFrame_FinishGuideOpenHeroEquip);
    }

}