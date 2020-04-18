/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CardViewFrontHeroStruct from "../../Generates/GameHome/CardViewFrontHeroStruct";
import CardConfig from "../../../Config/ConfigExtends/CardConfig";
import Card from "../../../War/Logics/Card";
import CardView from "./CardView";
import TweenHelper from "../../../War/Utils/TweenHelper";

export default class CardViewFrontHero extends CardViewFrontHeroStruct
{
    cardView: CardView;
    cardConfig: CardConfig;
    card: Card;

    SetConfig(cardConfig: CardConfig)
    {
        this.cardConfig = cardConfig;
        this.m_icon.m_sprite.setSelectedIndex(cardConfig.id % 100 - 1);
    }

    SetCard(card: Card)
    {
        this.card = card;
    }

    OnRecover()
    {
        this.cardView = null;
        this.cardConfig = null;
        this.card = null;
    }

    setArmorHide()
    {
        TweenHelper.spriteHide(this.m_shield);
    }

    
    setArmorShowOrChange()
    {
        TweenHelper.spriteShow(this.m_shield);

    }
}