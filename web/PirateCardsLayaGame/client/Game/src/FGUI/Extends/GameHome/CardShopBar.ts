/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CardShopBarStruct from "../../Generates/GameHome/CardShopBarStruct";

export default class CardShopBar extends CardShopBarStruct
{
    useLuck()
    {
        this.m_shopHeart.visible = false;
        this.m_fxHeart.visible = true
        this.m_fxHeart.frame = 1;
        this.m_fxHeart.playing = true;
        Laya.timer.once(1000, this, this.refresh);
    }

    refresh()
    {
        
    }
}