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
        console.log("PanelChooseHero onTabShow");
        this.SetData();
    }

    // 该组件所在Tab 隐藏
    onTabHide(): void
    {
        console.log("PanelChooseHero onTabHide");

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
            this.m_plusBtn.visible = true;
            this.m_playBtn.visible = false;
        }
    }

    SetData()
    {
        this.m_choiceHero.SetData(this.currentHeroData);
        this.SetBtnState(!this.currentHeroData.isGeted);
        
        this.m_prevHeroBtn.visible = Game.moduleModel.hero.hasPrev();
        this.m_nextHeroBtn.visible = Game.moduleModel.hero.hasNext();
    }

    OnClickNextHeroBtn()
    {
        this.currentHeroData = Game.moduleModel.hero.getNextItem();

        this.SetData();
    }

    OnClickPrevHeroBtn()
    {
        this.currentHeroData = Game.moduleModel.hero.getPrevItem();

        this.SetData();
    }
    


    OnClickPlayBtn()
    {
        Game.menu.openTab(MenuId.Home, HomeTabType.Shop);
    }

    OnClickPlusBtn()
    {
    }
    
}