/*
 * @Descripttion: 
 * @version: 
 * @Author: ZengFeng
 * @Date: 2019-09-25 20:55:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-11 20:28:42
 */
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AvatorViewStruct from "../../Generates/GameWarUI/AvatorViewStruct";
import { ComponentProp } from "../../../GameWar/Logic/EcsComponents/ComponentProp";
import { TempHeroType } from "../../../GameModule/DataEnums/HeroType";
import { War } from "../../../GameWar/Logic/War";
import WarWindow from "../../../GameModule/ViewWindows/WarWindow";
import WarWindowUI from "./WarWindowUI";

export default class AvatorView extends AvatorViewStruct
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

    private mp:number;
    private mpMax:number;
    update(ComponentProp:ComponentProp)
    {
        let hp    = ComponentProp.HPView;
        let hpmax = ComponentProp.HPMaxView;
    
        if (hp != this.hp || hpmax != this.hpMax) 
        {
            if (hp == 0) this.m_hero.selectedIndex += 1; 

            this.hp    = hp
            this.hpMax = hpmax;
            this.m_progressHp.value = hp;
            this.m_progressHp.max   = hpmax;    
        }


        let mp    = ComponentProp.MPView;
        let mpmax = ComponentProp.MPMaxView;
    
        if (mp != this.mp || mpmax != this.mpMax) 
        {
            if (mp == 0) this.m_hero.selectedIndex += 1; 

            this.mp    = mp
            this.mpMax = mpmax;
            this.m_progressMp.value = mp;
            this.m_progressMp.max   = mpmax;    
        }
    }

    // 窗口
    moduleWindow: WarWindow;

    get warWindowUI(): WarWindowUI
    {
        return <WarWindowUI>this.moduleWindow.contentPane;
    }
     // 窗口即将打开，可以在这里做缓动
     onWindowWillShow()
     {
        this.m_btnPause.onClick(this, this.OnClickPauseBtn);
     }
 
     // 窗口即将关闭，可以在这里做缓动
     onWindowWillHide(): void
     {
        this.m_btnPause.offClick(this, this.OnClickPauseBtn);
     }

     OnClickPauseBtn()
     {
         if(War.isPause)
         {
            War.unpause();
            this.warWindowUI.OnUnpause();
         }
         else
         {
            War.pause();
            this.warWindowUI.OnPause();
         }
     }
}