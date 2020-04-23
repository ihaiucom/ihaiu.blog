/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ChoiceHeroCardStruct from "../../Generates/GameHome/ChoiceHeroCardStruct";
import HeroData from "../../../GameModule/DataStructs/HeroData";

export default class ChoiceHeroCard extends ChoiceHeroCardStruct
{
    
    heroData: HeroData;
    SetData(heroData: HeroData)
    {
        this.heroData = heroData;
        
        this.m_heroSprite.m_sprite.setSelectedIndex(heroData.cardConfig.spriteIndex);
        this.m_coinText.text = heroData.cardConfig.coin + "";
        this.m_coinGroup.visible = this.m_lock.visible = !heroData.isGeted;
    }

    
}