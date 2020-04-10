/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TEXT from '../../../Config/Keys/TEXT';
import Game from '../../../Game';
import GameEventKey from "../../../GameEventKey";
import TimeHelper from '../../../GameHelpers/TimeHelper';
import GashaponData from '../../../GameModule/DataStructs/GashaponData';
import {HeroData} from "../../../GameModule/DataStructs/HeroData";
import ItemData from '../../../GameModule/DataStructs/ItemData';
import {MenuId} from '../../../GameModule/MenuId';
import Skeleton from '../../Customs/Skeleton';
import GashaponWindowUIStruct from "../../Generates/GashaponUI/GashaponWindowUIStruct";

import GamerNotifyHerosChangeS2C=  proto.GamerNotifyHerosChangeS2C;
import GamerExtractGashaponS2C = proto.GamerExtractGashaponS2C;
import GashaponType =  proto.GashaponType;
import MenuValidateRed from '../../../GameModule/MenuValidateRed';
import { MenuIndexId } from '../../../GameModule/MenuIndexId';

export default class GashaponWindowUI extends GashaponWindowUIStruct
{
    skeleton: Skeleton;

    get type(): GashaponType
    {
        return this.m_GashaponType.selectedIndex + 1;
    }

    get model()
    {
        return Game.moduleModel.gashapon;
    }
    
    get gashaponList(): GashaponData[]
    {
        let _gashaponList = Game.moduleModel.gashapon.getGashaponByMenuId(MenuId.Gashapon);
        let list: GashaponData[] = [];
        for(let data of _gashaponList)
            data.config.type == this.type && (list.push(data));
        list.sort();
        return  list;
    }

    get remainTimes()
    {
        let times = 30;
        for (let ga of this.gashaponList) {
            times -= ga.todayExtractNum;
        }
        return times;
    }


    addEventHandler()
    {
        this.m_preview.addEventListener();
        this.m_rewardView.addEventListener();
        this.m_GashaponType.on(fgui.Events.STATE_CHANGED, this, this.OnTypeChanged);
        
        Game.net.gamerNotifyGashaponInfoS2C.on(this.gashaponInfoHnadler,this);
        Game.net.gamerNotifyHerosChangeS2C.on(this.heroChangeHandler,this);
        Game.net.gamerExtractGashaponS2C.on(this.itemChangeHandler,this);

        this.m_gashaponBtn.delayOnClick(this, this.gashaponBtnOnClick);
        this.m_gashapon10Btn.delayOnClick(this,this.gashapon10BtnOnClick);
        this.m_previewBtn.delayOnClick(this, this.previewBtnOnClick);
        Game.event.add(GameEventKey.GameFrame_Everyday_Update,this.updateRemainTimes,this);
        Game.net.gamerExtractGashaponS2C.on(this.updateRemainTimes, this);
    }

    removeEventHandler()
    {
        this.m_preview.removeEventListener();
        this.m_rewardView.removeEventListener();
        this.m_GashaponType.off(fgui.Events.STATE_CHANGED, this, this.OnTypeChanged);
        Game.net.gamerNotifyGashaponInfoS2C.off(this.gashaponInfoHnadler,this);
        Game.net.gamerNotifyHerosChangeS2C.off(this.heroChangeHandler,this);
        Game.net.gamerExtractGashaponS2C.off(this.itemChangeHandler,this);
        this.m_gashaponBtn.delayOffClick(this, this.gashaponBtnOnClick);
        this.m_gashapon10Btn.delayOffClick(this, this.gashapon10BtnOnClick);
        this.m_previewBtn.delayOffClick(this,this.previewBtnOnClick);
        Game.event.remove(GameEventKey.GameFrame_Everyday_Update,this.updateRemainTimes,this);
        Game.net.gamerExtractGashaponS2C.off(this.updateRemainTimes,this);
    }

    onWindowInited(): void
    {
        // this.skeleton = Skeleton.poolGet();
        // this.skeleton.Init('gashapon', this.displayObject, 800,800,this.onSkeletonLoaded.bind(this));
        // window['sk'] = this.skeleton;
        window['ga'] = this;
    }

    onSkeletonLoaded()
    {
        this.skeleton.play(0,true);
    }

    // 窗口显示
    onWindowShow(): void
    {
        this.Init();
        this.addEventHandler();

        this.m_head.SetWindow(MenuId.Gashapon);
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        this.removeEventHandler();
        Engine.timer.clearAll(this);
    }

    /** 刷新红点 */
    RefreshRed()
    {
        // 普通招募
        MenuValidateRed.getInstance().openTab(MenuIndexId.GashaponGeneral, null, this.m_btnGeneral);

        // 高级招募
        MenuValidateRed.getInstance().openTab(MenuIndexId.GashaponAdvanced, null, this.m_btnAdvanced);

        // 招募一次
        MenuValidateRed.getInstance().openTab((MenuId.Gashapon * 1000 + this.m_GashaponType.selectedIndex), null, this.m_gashaponBtn);
    }

    Init()
    {
        this.RefreshGashaponButtons();
        this.updateRemainTimes();
    }

    async gashaponBtnOnClick()
    {
        let costItem = this.gashaponList[0].costItem;
        let isFree = this.m_gashaponBtn.m_isFree.selectedPage == 'yes';
        if(this.remainTimes < 1)
        {
            Game.system.toastText(TEXT.Gashapon_Times_Not_Enough);
            return;
        }

        let isEnough = costItem.ItemNum <= Game.moduleModel.bag.getItemNum(costItem.ItemId);
        if(isEnough || isFree)
        {
            let result = await Game.sender.gashapon.extractGashapon(this.gashaponList[0].id);
            if(result)
            {
                this.updateRemainTimes();
            }
            return;
        }
        Game.system.toastItemNotEnough(costItem.ItemId);
    }

    async gashapon10BtnOnClick()
    {
        let costItem = this.gashaponList[0].costItem;
        if(this.remainTimes < 10)
        {
            Game.system.toastText(TEXT.Gashapon_Times_Not_Enough);
            return;
        }
        let isEnough = costItem.ItemNum * 10 <= Game.moduleModel.bag.getItemNum(costItem.ItemId);
        if(isEnough)
        {
            let result = await Game.sender.gashapon.extractGashapon(this.gashaponList[1].id);
            if(result)
            {
                this.updateRemainTimes();
            }
            return;
        }
        Game.system.toastItemNotEnough(costItem.ItemId);
    }

    previewBtnOnClick()
    {
        this.m_showPreView.setSelectedPage('yes');
        this.m_preview.updateView(this.type);
    }

    OnTypeChanged()
    {
        this.RefreshGashaponButtons();
        
        // 招募一次
        MenuValidateRed.getInstance().openTab((MenuId.Gashapon * 1000 + this.m_GashaponType.selectedIndex), null, this.m_gashaponBtn);
    }

    gashaponInfoHnadler()
    {
        this.RefreshGashaponButtons();
    }

    heroChangeHandler(msg: GamerNotifyHerosChangeS2C)
    {
        this.showHeroView(msg.heroList);
    }

    itemChangeHandler(msg: GamerExtractGashaponS2C)
    {
        let itemList: ItemData[] = [];
        for (let itemData of msg.items) {
            let item = ItemData.Create(itemData.id, itemData.count,itemData.type);
            itemList.push(item);
        }
        this.showRewardView(itemList);
    }

    RefreshGashaponButtons()
    {
        let list = this.gashaponList;
        let that = this;
        if(list[0].freeNum > 0) 
            this.m_gashaponBtn.m_isFree.setSelectedPage('yes');
        else
        {
            Engine.timer.clear(this, this.CountdownHandler);
            let cost = this.gashaponList[0].costItem;
            let item = ItemData.Create(cost.ItemId, cost.ItemNum, cost.ItemType)
            this.m_gashaponBtn.m_title.text = item.count+"";
            this.m_gashaponBtn.m_itemIcon.icon = item.iconUrl;
            let nextFreeTime = list[0].nextFreeTime;
            this.m_gashaponBtn.m_isFree.setSelectedPage('no');
            this.CountdownHandler(nextFreeTime);
            Engine.timer.loop(1000,this,this.CountdownHandler, [nextFreeTime],false);
        }
        
        let cost = this.gashaponList[1].costItem;
        let item = ItemData.Create(cost.ItemId, cost.ItemNum, cost.ItemType)
        this.m_gashapon10Btn.m_num.text = item.count+"";
        this.m_gashapon10Btn.m_itemIcon.icon = item.iconUrl;
        let showBtnTop = this.type == GashaponType.GeneralGashapon ? 0 : 1;
        this.m_gashapon10Btn.m_showTop.setSelectedIndex(showBtnTop);

    }

    private CountdownHandler(nextFreeTime: number)
    {
        let that = this;
        if(TimeHelper.TimeleftIsOver(nextFreeTime))
        {
            Engine.timer.clear(this, this.CountdownHandler);
            that.m_gashaponBtn.m_isFree.setSelectedPage('yes');
            return;
        }
        let str = TimeHelper.TimeleftHHMMSS(nextFreeTime);
        that.m_gashaponBtn.m_countdownLb.text = TEXT.Gashapon_NextFreeTime.format(str);
    }

    private showHeroView(heroList: proto.IGamerHero[])
    {
        let list: HeroData[] = [];
        for (let hero of heroList) {
            let data = HeroData.Create(hero);
            list.push(data);
        }
        this.m_heroView.onShow(list);
    }

    private hideHeroView()
    {
        this.m_heroView.onHide();
    }

    private showRewardView(itemList: ItemData[])
    {
        this.m_rewardView.onShow(itemList,this.gashaponList);
    }

    private hideRewardView()
    {
        this.m_rewardView.onHide();
    }

    private updateRemainTimes()
    {
        this.m_timeRemain.text = TEXT.Gashapon_Times_Remain.format(30,this.remainTimes);
        
        this.RefreshRed();
    }
}