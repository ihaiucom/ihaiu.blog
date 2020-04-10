/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SectionViewSpecialStruct from "../../Generates/GameSectionsUI/SectionViewSpecialStruct";
import Game from '../../../Game';
import MissionData from '../../../GameModule/DataStructs/MissionData';
import SectionType = proto.CheckPointType;
import SectionSpecialItem from './SectionSpecialItem';
import SectionWindow from "../../../GameModule/ViewWindows/SectionWindow";
import TEXT from "../../../Config/Keys/TEXT";
import { MenuId } from "../../../GameModule/MenuId";
import GameEventKey from "../../../GameEventKey";

export default class SectionViewSpecial extends SectionViewSpecialStruct
{
    moduleWindow: SectionWindow;
    
    get model()
    {
        return Game.moduleModel.section;
    }

    get dataList():MissionData[]
    {
        return this.model.specialMissions;
    }

    private get isShowAll()
    {
        return this.dataList.length >= Game.config.checkPoint.getConfigListByType(SectionType.Elite).length;
    }

    /** 占位item */
    private readonly fixedItemNum = 4;
    get configList()
    {
        return Game.config.checkPoint.getConfigListByType(SectionType.Elite);
    }

    onInit()
    {
        
    }

    onShow()
    {
        this.m_list.setItemRenderer(this.renderListItem,this);
        this.m_list.scrollItemToViewOnClick = false;
        this.m_list.numItems = this.dataList.length + this.fixedItemNum + (this.isShowAll ? 1 : 0);
        this.addEventListener();
        window['mon'] = this;
    }

    onHide()
    {
        this.removeEventListener();
    }

    addEventListener()
    {
        this.m_list.on(fgui.Events.SCROLL,this,this.doScaleEffect);
        this.m_list.on(fgui.Events.CLICK_ITEM,this,this.onClickListItem);
    }

    removeEventListener()
    {
        this.m_list.off(fgui.Events.SCROLL,this,this.doScaleEffect);
        this.m_list.off(fgui.Events.CLICK_ITEM,this,this.onClickListItem);
    }



    updateView()
    {
        this.doScaleEffect();
    }


    onClickListItem(evet)
    {
        let index = this.m_list.getChildIndex(evet);
        let data = this.dataList[index - 2];
        let midIndex = (this.m_list.getFirstChildInView() + 2) % this.m_list.numItems;
        if(data && data.isUnlock)
        {
            Game.menu.open(MenuId.SubMenuSectionDetail,data.id);
        }
        console.log(index,midIndex);

        Game.event.dispatch(GameEventKey.GameFrame_BattleSpecialList);
    }

    private doScaleEffect(): void
    {
        var midX: number = this.m_list.scrollPane.posX + this.m_list.viewWidth / 2;
        var cnt: number = this.m_list.numChildren;
        for(var i: number = 0;i < cnt;i++)
        {
            let scale1 = 1;
            let scale2 = 0.532;
            var obj: fgui.GObject = this.m_list.getChildAt(i);
            let offset = midX - obj.x - obj.width / 2;
            var dist: number = Math.abs(offset);
            let rate = 1;
            if(offset != 0)
            {
                // let x = obj.x + offset > 0 ? 5: -5;
                // obj.setXY(x,obj.y);
            }
            if(dist > obj.width * 2)
                rate = scale2;
            else
            {
                rate = (scale2 - scale1) * dist / (2 * obj.width) + scale1;
            }
            obj.setScale(rate,rate);
        }
        let index = (this.m_list.getFirstChildInView() + 2) % this.m_list.numItems;
    }
    
    renderListItem(index: number,item: SectionSpecialItem)
    {
        let length = this.dataList.length + this.fixedItemNum + (this.isShowAll ? 1 : 0);
        if(index <= 1 || index >= length - 2)
            item.m_state.setSelectedIndex(3);
        else if(this.isShowAll && index == length - 3)
            item.m_state.setSelectedIndex(2);
        else
        {
            let data = this.dataList[index - 2];
            item.rendererItem(data);
        }
    }

    clear()
    {
        
    }
}