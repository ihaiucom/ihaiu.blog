/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DuelTempInfoViewStruct from "../../Generates/ModuleDuelTemp/DuelTempInfoViewStruct";
import Game from '../../../Game';

export default class DuelTempInfoView extends DuelTempInfoViewStruct
{
    // 窗口隐藏
    onWindowHide(): void
    {
        Engine.timer.clearAll(this);
    }

    get danInfo()
    {
        return Game.moduleModel.pvp.danInfo;
    }
    
    updateView()
    {
        let that = this;
        let danInfo = this.danInfo;
        this.m_time.text = danInfo.seasonDuration;
        this.m_danLevel.UpdateView(danInfo);
        if(danInfo.seasonDaysLeft <= 0)
        {
            this.updateRemainTime();
            Engine.timer.loop(1000,this, this.updateRemainTime,null,false);
        }
        this.m_winTiimes.text = danInfo.currentWinTimes;
        this.m_star.m_star_count.setSelectedPage(danInfo.starCount+"");
        this.m_star.m_star_num.setSelectedIndex(danInfo.star);
    }

    private updateRemainTime()
    {
        if(this.danInfo.timeIsOver)
        {
            Engine.timer.clear(this, this.updateRemainTime);
            return;
        }
        this.m_timeLeft.text = this.danInfo.seasonRemainTime;
    }
}