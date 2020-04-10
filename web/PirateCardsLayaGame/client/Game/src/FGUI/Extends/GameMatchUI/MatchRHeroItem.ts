/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MatchRHeroItemStruct from "../../Generates/GameMatchUI/MatchRHeroItemStruct";
import Game from "../../../Game";
import { HeroData } from '../../../GameModule/DataStructs/HeroData';

export default class MatchRHeroItem extends MatchRHeroItemStruct
{
    UpdateView(heroId: number)
    {
        let heroData = Game.moduleModel.hero.GetData(heroId);
        if(heroData)
            this.m_imgHero.icon = heroData.LoadingIconUrl;
    }

    RunAnimation(heroId: number, duration: number = 1)
    {
        let heroData = new HeroData();
        heroData.id = heroId;
        heroData.setConfig(heroId);
        this.m_imgHero.icon = heroData.LoadingIconUrl;
        this.m_imgHero.x = 0;
        // Laya.Tween.to(this.m_imgHero, {x:this.width}, duration); 
    }

    StopAnimation()
    {
        this.m_imgHero.x = 0;
        // Laya.Tween.clearAll(this);
    }
}