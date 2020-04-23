/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PanelChooseHeroStruct from "../../Generates/GameHome/PanelChooseHeroStruct";
import HomeWindow, { HomeTabType } from "../../../GameModule/ViewWindows/HomeWindow";
import Game from "../../../Game";
import { MenuId } from "../../../GameModule/MenuId";
import CardConfig from "../../../Config/ConfigExtends/CardConfig";
import HeroData from "../../../GameModule/DataStructs/HeroData";

export default class PanelChooseHero extends PanelChooseHeroStruct
{
    
    // 窗口
    moduleWindow: HomeWindow;

    // 英雄列表
    heroDataList: HeroData[] = [];

    // 当前英雄
    currentHeroData: HeroData;

    // 窗口初始化完毕
    onWindowInited(): void
    {
        this.m_playBtn.onClick(this, this.OnClickPlayBtn);
        this.m_plusBtn.onClick(this, this.OnClickPlusBtn);
        this.m_nextHeroBtn.onClick(this, this.OnClickNextHeroBtn);
        this.m_prevHeroBtn.onClick(this, this.OnClickPrevHeroBtn);

        this.heroDataList = Game.moduleModel.hero.list;
        this.currentHeroData = Game.moduleModel.hero.selectHero;
    }

    
    // 窗口显示
    onWindowShow(): void
    {
    }

    
    // 该组件所在Tab 显示
    onTabShow(): void
    {
        this.SetData();
    }

    // 该组件所在Tab 隐藏
    onTabHide(): void
    {

    }



    SetBtnState(isPlay: boolean = true)
    {
        if(isPlay)
        {
            this.m_plusBtn.visible = false;
            this.m_playBtn.visible = true;
        }
        else
        {
            this.m_playBtn.visible = false;
            this.m_plusBtn.visible = Game.moduleModel.hero.enableBuy();
        }
    }

    SetData()
    {
        this.m_choiceHero.SetData(this.currentHeroData);
        this.SetBtnState(this.currentHeroData.isGeted);
        
        this.m_prevHeroBtn.visible = Game.moduleModel.hero.hasPrev();
        this.m_nextHeroBtn.visible = Game.moduleModel.hero.hasNext();
    }

    OnClickNextHeroBtn()
    {
        this.currentHeroData = Game.moduleModel.hero.getNextItem();

        this.SetData();
        this.m_choiceHero.SetFront();
    }

    OnClickPrevHeroBtn()
    {
        this.currentHeroData = Game.moduleModel.hero.getPrevItem();

        this.SetData();
        this.m_choiceHero.SetFront();
    }
    


    OnClickPlayBtn()
    {
        Game.moduleModel.hero.selectHero = this.currentHeroData;
        Game.menu.openTab(MenuId.Home, HomeTabType.Shop);
    }

    OnClickPlusBtn()
    {
        Game.moduleModel.hero.buy();
        this.SetData();
    }
    
}