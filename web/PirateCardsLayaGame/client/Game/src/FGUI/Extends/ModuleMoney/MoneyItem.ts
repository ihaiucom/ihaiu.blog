/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MoneyItemStruct from "../../Generates/ModuleMoney/MoneyItemStruct";
import Game from "../../../Game";

export default class MoneyItem extends MoneyItemStruct
{
    /*public----------------------外部接口---------------------------*/
    /** 渲染Item */
    RenderItem(itemId:number)
    {
        let config = Game.config.item.getConfig(itemId);
        this.m_labName.text = config.name;
    }
}