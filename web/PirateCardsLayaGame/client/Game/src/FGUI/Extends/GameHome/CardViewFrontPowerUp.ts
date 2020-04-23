/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CardViewFrontPowerUpStruct from "../../Generates/GameHome/CardViewFrontPowerUpStruct";

import CardConfig from "../../../Config/ConfigExtends/CardConfig";
import Card from "../../../War/Logics/Card";
import CardView from "./CardView";
import FxSmallRing from "./FxSmallRing";

export default class CardViewFrontPowerUp extends CardViewFrontPowerUpStruct
{
    fxSmallRing:FxSmallRing;
	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
        
        this.fxSmallRing = FxSmallRing.createInstance();
        this.fxSmallRing.x = this.width * 0.5;
        this.fxSmallRing.y = this.height * 0.5;
        this.addChildAt(this.fxSmallRing, 0);
	}
    
    cardView: CardView;
    cardConfig: CardConfig;
    card: Card;

    SetConfig(cardConfig: CardConfig)
    {
        this.cardConfig = cardConfig;
        this.m_icon.url = cardConfig.spriteUrl;
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
}