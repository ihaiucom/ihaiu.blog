/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CardViewFrontWarriowTrapStruct from "../../Generates/GameHome/CardViewFrontWarriowTrapStruct";

import CardConfig from "../../../Config/ConfigExtends/CardConfig";
import Card from "../../../War/Logics/Card";
import CardView from "./CardView";

export default class CardViewFrontWarriowTrap extends CardViewFrontWarriowTrapStruct
{
    cardView: CardView;
    cardConfig: CardConfig;
    card: Card;

    SetConfig(cardConfig: CardConfig)
    {
        this.cardConfig = cardConfig;
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

    SetOpen()
    {
        this.m_DoOpen.play();
    }

    SetClose()
    {
        this.m_DoClose.play();
    }

}