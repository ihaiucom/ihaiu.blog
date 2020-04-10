/*
 * @Descripttion: 
 * @version: 
 * @Author: ZengFeng
 * @Date: 2019-09-25 20:55:00
 * @LastEditors: ZengFeng
 * @LastEditTime: 2019-09-25 20:55:00
 */
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EnemyAvatorViewStruct from "../../Generates/GameWarUI/EnemyAvatorViewStruct";
import { ComponentProp } from "../../../GameWar/Logic/EcsComponents/ComponentProp";
import { TempHeroType } from "../../../GameModule/DataEnums/HeroType";

export default class EnemyAvatorView extends EnemyAvatorViewStruct
{
    private heroType:number;

    setInfo(gamer:proto.IGamerMatch)
    {
        if (this.heroType == gamer.hero)
            return;
        
        this.heroType = gamer.hero;
        switch (gamer.hero) 
        {
            case TempHeroType.LongQi:
                this.m_otherHero.selectedIndex = 0;
                break;
            case TempHeroType.ZhanJi:
                this.m_otherHero.selectedIndex = 2;
                break;
        
            default:
                break;
        }
    }

    private hp:number;
    private hpMax:number;
    update(ComponentProp:ComponentProp)
    {
        let hp    = ComponentProp.HPView;
        let hpmax = ComponentProp.HPMaxView;

        if (hp != this.hp || hpmax != this.hpMax) 
        {
            if (hp == 0) this.m_otherHero.selectedIndex += 1; 

            this.hp    = hp
            this.hpMax = hpmax;
            this.m_otherHPProgress.value = hp;
            this.m_otherHPProgress.max   = hpmax;    
        }
    }
}