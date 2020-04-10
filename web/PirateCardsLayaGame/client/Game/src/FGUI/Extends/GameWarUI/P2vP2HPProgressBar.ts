/*
 * @Descripttion: 
 * @version: 
 * @Author: ZengFeng
 * @Date: 2019-09-25 21:51:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-11 20:28:52
 */

/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import P2vP2HPProgressBarStruct from "../../Generates/GameWarUI/P2vP2HPProgressBarStruct";
import { TempHeroType } from "../../../GameModule/DataEnums/HeroType";
import { ComponentProp } from "../../../GameWar/Logic/EcsComponents/ComponentProp";

export default class P2vP2HPProgressBar extends P2vP2HPProgressBarStruct
{
    private heroType:number;

    public heroPos:number;
    
    setInfo(gamer:proto.IGamerMatch)
    {
        if (this.heroType == gamer.hero)
            return;
        
        this.heroType = gamer.hero;
        switch (gamer.hero) 
        {
            case TempHeroType.LongQi:
                this.m_hero.selectedIndex = 0;
                break;
            case TempHeroType.ZhanJi:
                this.m_hero.selectedIndex = 2;
                break;
        
            default:
                break;
        }
    }

    private hp:number;
    private hpMax:number;
    updateValue(componentProp:ComponentProp)
    {
        let hp    = componentProp.HPView ;
        let hpmax = componentProp.HPMaxView ;

        if (hp != this.hp || hpmax != this.hpMax) 
        {
            if (hp == 0) 
            {
                this.m_hero.selectedIndex += 1;
                this.m_player.selectedIndex = 4;
            }
            this.hp    = hp
            this.hpMax = hpmax;
            this.value = hp;
            this.max   = hpmax;    
            this.m_bar.fill = hp / hpmax * 100;
        }
    }
}