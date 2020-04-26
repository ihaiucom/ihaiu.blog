/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CardViewFrontHeroStruct from "../../Generates/GameHome/CardViewFrontHeroStruct";
import CardConfig from "../../../Config/ConfigExtends/CardConfig";
import Card from "../../../War/Logics/Card";
import CardView from "./CardView";
import TweenHelper from "../../../War/Utils/TweenHelper";
import Game from "../../../Game";
import Hero from "../../../War/Logics/Hero";

export default class CardViewFrontHero extends CardViewFrontHeroStruct
{
    cardView: CardView;
    cardConfig: CardConfig;
    card: Hero;

    
	protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);
        this.m_shield.alpha = 1;
        this.m_shield.visible = false;
		
		
	}

    SetConfig(cardConfig: CardConfig)
    {
        this.cardConfig = cardConfig;
        this.m_icon.m_sprite.setSelectedIndex(cardConfig.id % 100 - 1);
    }

    SetCard(card: Card)
    {
        this.card = <any> card;
    }

    OnRecover()
    {
        this.cardView = null;
        this.cardConfig = null;
        this.card = null;
    }

    setArmorHide()
    {
        if(this.m_shield.visible)
        {
            TweenHelper.spriteHide(this.m_shield);
        }
    }

    
    setArmorShowOrChange()
    {
        var level = CardConfig.getArmorLevel(this.card.armor) - 1;
        this.m_shield.m_level.setSelectedIndex(level)
        TweenHelper.spriteShow(this.m_shield);
    }
}