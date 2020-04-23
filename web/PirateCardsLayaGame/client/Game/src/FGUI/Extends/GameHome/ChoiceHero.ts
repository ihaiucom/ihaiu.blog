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
        this.m_card.m_infoBtn.onClick(this, this.OnClickInfoBtn);
        this.m_info.m_backBtn.onClick(this, this.OnClickBackInfo);
    }


    heroData: HeroData;
    SetData(heroData: HeroData)
    {
        this.heroData = heroData;
        this.m_card.SetData(heroData);
        this.m_info.SetData(heroData);
    }

    OnClickInfoBtn()
    {
        TweenHelper.TurnCard(this.m_card, this.m_info);
    }

    OnClickBackInfo()
    {
        TweenHelper.TurnCard(this.m_info, this.m_card);
    }
}