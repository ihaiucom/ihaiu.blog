/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CardShopBarStruct from "../../Generates/GameHome/CardShopBarStruct";
import GameStatus from "../../../War/Datas/GameStatus";
import TweenHelper from "../../../War/Utils/TweenHelper";

export default class CardShopBar extends CardShopBarStruct
{
    shopList: fgui.GObject[] = [];
	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
        
        this.shopList.push(this.m_shopHeart);
        this.shopList.push(this.m_shopKey);
        this.shopList.push(this.m_shopLock);
        this.shopList.push(this.m_shopHorseshoe);
    }

    /** 使用道具， 解药 */
    useLuck()
    {
        TweenHelper.spriteHide(<any>this.m_shopLock);
        this.m_shopHeart.visible = false;
        Laya.timer.once(800, this, this.refresh);
    }

    
    /** 使用道具， 复活 */
    useHeart()
    {
        this.m_fxHeart.x = this.m_shopHeart.x;
        this.m_fxHeart.y = this.m_shopHeart.y;
        this.m_fxHeart.visible = true
        this.m_fxHeart.frame = 1;
        this.m_fxHeart.playing = true;
        Laya.timer.once(2000, this, this.refresh);
    }



    refresh()
    {
        this.m_shopHeart.visible = GameStatus.isHeart;
        this.m_shopKey.visible = GameStatus.isKey;
        this.m_shopLock.visible = GameStatus.isLuck;
        this.m_shopHorseshoe.visible = false;
        
        
        this.m_fxHeart.visible = false
        this.m_fxHeart.frame = 1;
        this.m_fxHeart.playing = false;

        var x = 0;
        for(var i = 0, len = this.shopList.length; i < len; i ++)
        {
            var itemIcon = this.shopList[i];
            if(itemIcon.visible)
            {
                itemIcon.x = x + itemIcon.width * 0.5;
                x += itemIcon.width + 3;
            }
        }
    }
}