/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MatchLHeroItemStruct from "../../Generates/GameMatchUI/MatchLHeroItemStruct";
import { HeroData } from '../../../GameModule/DataStructs/HeroData';
import Game from '../../../Game';

export default class MatchLHeroItem extends MatchLHeroItemStruct
{
    UpdateView(heroId: number)
    {
        let heroData = Game.moduleModel.hero.GetData(heroId);
        if(heroData)
            this.m_imgHero.icon = heroData.LoadingIconUrl;
    }
}