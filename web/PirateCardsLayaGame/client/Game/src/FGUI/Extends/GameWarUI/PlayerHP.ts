/*
 * @Descripttion: 
 * @version: 
 * @Author: ZengFeng
 * @Date: 2019-10-18 11:16:49
 * @LastEditors: ZengFeng
 * @LastEditTime: 2019-10-18 11:16:49
 */
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PlayerHPStruct from "../../Generates/GameWarUI/PlayerHPStruct";


export default class PlayerHP extends PlayerHPStruct
{
    updateHP(hp: int, maxHP: int)
    {
        this.visible = hp > 0;
        this.max = maxHP;
        this.value = hp;
    }
}