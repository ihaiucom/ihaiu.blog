/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ChoiceHeroInfoStruct from "../../Generates/GameHome/ChoiceHeroInfoStruct";
import HeroData from "../../../GameModule/DataStructs/HeroData";

export default class ChoiceHeroInfo extends ChoiceHeroInfoStruct
{
    
    heroData: HeroData;
    SetData(heroData: HeroData)
    {
        this.heroData = heroData;
        
        this.m_hero.setSelectedIndex(heroData.cardConfig.id % 100 - 1);
    }
}