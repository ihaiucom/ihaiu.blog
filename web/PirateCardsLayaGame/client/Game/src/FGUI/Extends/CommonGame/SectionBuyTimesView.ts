/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Game from '../../../Game';
import SectionType = proto.CheckPointType;
import SectionBuyTimesViewStruct from '../../Generates/CommonGame/SectionBuyTimesViewStruct';

export default class SectionBuyTimesView extends SectionBuyTimesViewStruct
{
    get sectionData()
    {
        return Game.moduleModel.section.sectionData;
    }

    type: SectionType;
    
    onShow(type: SectionType)
    {
        this.type = type;
        this.visible = true;
        this.m_panel.m_closeBtn.onClick(this, this.onHide);
        this.m_panel.m_buyBtn.onClick(this, this.onClickBuyTimes);
        Game.net.buyTimesCheckPointS2C.on(this.buyTimesHandler, this);
        this.updateView();
        
    }

    updateView()
    {
        let type = this.type;
        if(type == SectionType.Elite)
        {
            this.m_panel.m_totalTimes.text = this.sectionData.specialTotalTimesTxt;
            this.m_panel.m_buyCount.text = this.sectionData.specialCurrentTimesTxt;
            if(this.sectionData.specialTimesNotEnough)
                this.m_panel.m_buyBtn.visible = false;
            else
            {
                this.m_panel.m_buyBtn.visible = true;
                this.m_panel.m_cost.renderItem(this.sectionData.specialCost);
            }
        }
        else if(type == SectionType.Devil)
        {
            this.m_panel.m_totalTimes.text = this.sectionData.monsterTotalTimesTxt;
            this.m_panel.m_buyCount.text = this.sectionData.monsterCurrentTimesTxt;
            if(this.sectionData.monsterTimesNotEnough)
                this.m_panel.m_buyBtn.visible = false;
            else
            {
                this.m_panel.m_buyBtn.visible = true;
                this.m_panel.m_cost.renderItem(this.sectionData.monsterCost);
            }
        }
        else if(type == SectionType.SecretBook)
        {
            this.m_panel.m_totalTimes.text = this.sectionData.secretBookTotalTimesTxt;
            this.m_panel.m_buyCount.text = this.sectionData.secretBookCurrentTimesTxt;
            if(this.sectionData.secretBookTimesNotEnough)
                this.m_panel.m_buyBtn.visible = false;
            else
            {
                this.m_panel.m_buyBtn.visible = true;
                this.m_panel.m_cost.renderItem(this.sectionData.secretBookCost);
            }
        }
    }

    private onClickBuyTimes()
    {
        Game.sender.section.buySectionTimes(this.type,1);
    }

    private buyTimesHandler(msg: proto.BuyTimesCheckPointS2C)
    {
        if(!msg.error)
            this.updateView();
    }

    onHide()
    {
        this.visible = false;
        this.type = -1;
        this.m_panel.m_closeBtn.offClick(this, this.onHide);
        this.m_panel.m_buyBtn.offClick(this, this.onClickBuyTimes);
        Game.net.buyTimesCheckPointS2C.off(this.buyTimesHandler,this);
    }
}