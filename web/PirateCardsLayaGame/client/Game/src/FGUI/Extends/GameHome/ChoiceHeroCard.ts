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
        
        this.m_heroSprite.m_sprite.setSelectedIndex(heroData.cardConfig.id % 100 - 1);
        this.m_lock.visible = !heroData.isGeted;
    }

    
    // 窗口初始化完毕
    onWindowInited(): void
    {
    }
}