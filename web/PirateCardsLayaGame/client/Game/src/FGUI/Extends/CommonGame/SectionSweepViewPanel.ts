/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SectionSweepViewPanelStruct from "../../Generates/CommonGame/SectionSweepViewPanelStruct";
import Game from '../../../Game';
import SweepRewardData from '../../../GameModule/DataStructs/SweepRewardData';
import SectionSweepViewPanelItem from './SectionSweepViewPanelItem';

export default class SectionSweepViewPanel extends SectionSweepViewPanelStruct
{
    sweepData: SweepRewardData;
    // 窗口显示
    onWindowWillShow(): void
    {
        this.m_sweep.delayOnClick(this,this.sweepOnClick);
        this.m_sweep10.delayOnClick(this,this.sweep10OnClick);
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        if(this.m_list.itemRenderer)
            this.m_list.itemRenderer.recover();
        this.m_sweep.delayOffClick(this,this.sweepOnClick);
        this.m_sweep10.delayOffClick(this,this.sweep10OnClick);
    }
    updateView(missionId: number, autoSweep: boolean = false)
    {
        this.m_list.setItemRenderer(this.renderListItem,this);
        this.sweepData = new SweepRewardData();
        this.sweepData.checkPointId = missionId;
        this.m_list.numItems = this.sweepData.times;
        this.m_sweep.visible = this.m_sweep10.visible = !autoSweep;
        if(autoSweep)
        {
            this.sweep(1);
        }
    }

    renderListItem(index: number, item: SectionSweepViewPanelItem)
    {
        item.updateView(this.sweepData, index);
    }

    sweep10OnClick()
    {
        this.sweep(10);
    }

    async sweepOnClick()
    {
        this.sweep(1);
    }

    private async sweep(times: number)
    {
        let fatigue = Game.moduleModel.power;
        let missionId = this.sweepData.checkPointId;
        let t = Math.min(10, Math.floor(fatigue.fatigueNum / times))
        t = Math.min(t,times);
        if(t <= 0)
        {
            Game.system.toastText("体力不足");
            return;
        }
        let s2c = await Game.sender.section.SweepMission(missionId,t);
        this.sweepData.SetProto(s2c);
        this.m_list.numItems = this.sweepData.times;
    }

}