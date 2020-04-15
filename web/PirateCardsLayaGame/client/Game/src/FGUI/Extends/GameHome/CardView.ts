/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CardViewStruct from "../../Generates/GameHome/CardViewStruct";
import CardViewBack from "./CardViewBack";
import CardViewFrontPowerUp from "./CardViewFrontPowerUp";

export default class CardView extends CardViewStruct
{
    back: CardViewBack;
    front: fgui.GComponent;
    constructor()
    {
        super();
        this.back = CardViewBack.createInstance();
        this.addChild(this.back);
        this.setXY(-200, -200);
    }

    showFront()
    {
        if(this.front)
        {
            this.addChild(this.front);
            this.back.removeFromParent();
        }
    }

    showBack()
    {
        this.addChild(this.back);
        if(this.front)
        {
            this.front.removeFromParent();
        }
    }

    
}