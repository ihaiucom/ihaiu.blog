/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SectionViewMonsterStruct from "../../Generates/GameSectionsUI/SectionViewMonsterStruct";
import SectionViewMonsterItem from './SectionViewMonsterItem';
import MissionData from '../../../GameModule/DataStructs/MissionData';
import Game from '../../../Game';
import SectionWindow from "../../../GameModule/ViewWindows/SectionWindow";
import TEXT from "../../../Config/Keys/TEXT";
import SectionType = proto.CheckPointType;
import {MenuId} from "../../../GameModule/MenuId";

export default class SectionViewMonster extends SectionViewMonsterStruct
{

    moduleWindow: SectionWindow;

    get model()
    {
        return Game.moduleModel.section;
    }
    
    get dataList(): MissionData[]
    {
        return Game.moduleModel.section.MonsterMissions;
    }

    private get isShowAll()
    {
        return this.dataList.length >= Game.config.checkPoint.getConfigListByType(SectionType.Devil).length;
    }

    /** 占位item */
    private readonly fixedItemNum = 4;

    onInit()
    {
    }

    onShow()
    {
        this.m_list.setItemRenderer(this.renderListItem,this);
        this.m_list.scrollItemToViewOnClick = false;
        this.m_list.numItems = this.dataList.length + this.fixedItemNum+(this.isShowAll?1:0);
        this.addEventListener();
        window['mon'] = this;
    }

    updateRewardTimes()
    {
        this.m_times.text = this.model.getMonsterTimesTxt();
    }
    
    updateView()
    {
        this.doScaleEffect();
        this.updateRewardTimes();
    }

    onHide()
    {
        this.removeEventListener();

    }

    addEventListener()
    {
        this.m_list.on(fgui.Events.SCROLL,this,this.doScaleEffect);
        this.m_list.on(fgui.Events.CLICK_ITEM, this, this.onClickListItem);
        Game.net.buyTimesCheckPointS2C.on(this.buyTimesHandler,this);
        this.m_addTimesBtn.onClick(this,this.onClickAddTimes);
    }

    removeEventListener()
    {
        this.m_list.off(fgui.Events.SCROLL,this,this.doScaleEffect);
        this.m_list.off(fgui.Events.CLICK_ITEM, this, this.onClickListItem);
        Game.net.buyTimesCheckPointS2C.off(this.buyTimesHandler,this);
        this.m_addTimesBtn.offClick(this,this.onClickAddTimes);
    }
    private onClickAddTimes()
    {
        this.moduleWindow.window.showBuyTimesView(SectionType.Devil);
    }

    private doScaleEffect(): void
    {
        var midX: number = this.m_list.scrollPane.posX + this.m_list.viewWidth / 2;
        var cnt: number = this.m_list.numChildren;
        for(var i: number = 0;i < cnt;i++)
        {
            let scale1 = 1;
            let scale2 = 0.7;
            var obj: fgui.GObject = this.m_list.getChildAt(i);
            var dist: number = Math.abs(midX - obj.x - obj.width / 2);
            let rate = 1;
            if(dist > obj.width * 2)
                rate = 0.7;
            else
            {
                rate = (scale2 - scale1) * dist / (2 * obj.width) + scale1;
            }
            let width = 387;
            obj.setScale(rate,rate);
        }
        let index = (this.m_list.getFirstChildInView() + 2) % this.m_list.numItems;
    }


    renderListItem(index: number, item: SectionViewMonsterItem)
    {
        let length = this.dataList.length + this.fixedItemNum + (this.isShowAll?1:0);
        if(index <= 1 || index >= length-2)
            item.m_state.setSelectedIndex(3);
        else if(this.isShowAll && index == length-3)
            item.m_state.setSelectedIndex(2);
        else
        {
            let data = this.dataList[index-2];
            item.rendererItem(data);
        }
    }

    onClickListItem(evet)
    {
        let index = this.m_list.getChildIndex(evet);
        let data = this.dataList[index-2];
        let midIndex = (this.m_list.getFirstChildInView() + 2) % this.m_list.numItems;
        if(data && data.isUnlock)
        {
            Game.menu.open(MenuId.SubMenuSectionDetail,data.id);
        }
        console.log(index,midIndex);
    }

    private buyTimesHandler(msg: proto.BuyTimesCheckPointS2C)
    {
        if(!msg.error)
        {
            Game.system.toastText(TEXT.SectionBuyTimesToast);
            this.updateRewardTimes();
        }
    }

    clear()
    {

    }
}