/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ChoiceHeroStruct from "../../Generates/GameHome/ChoiceHeroStruct";
import HeroData from "../../../GameModule/DataStructs/HeroData";
import TweenHelper from "../../../War/Utils/TweenHelper";

export default class ChoiceHero extends ChoiceHeroStruct
{
    // 窗口初始化完毕
    onWindowInited(): void
    {
        this.m_card.m_infoBtn.onClick(this, this.ShowBack);
        this.m_info.m_backBtn.onClick(this, this.ShowFront);
    }


    heroData: HeroData;
    SetData(heroData: HeroData)
    {
        this.heroData = heroData;
        this.m_card.SetData(heroData);
        this.m_info.SetData(heroData);
    }

    ShowBack()
    {
        TweenHelper.TurnCard(this.m_card, this.m_info);
    }

    ShowFront()
    {
        TweenHelper.TurnCard(this.m_info, this.m_card);
    }

    SetFront()
    {
        this.m_card.visible = true;
        this.m_info.visible = false;
        this.m_card.setScale(1, 1);
    }
}