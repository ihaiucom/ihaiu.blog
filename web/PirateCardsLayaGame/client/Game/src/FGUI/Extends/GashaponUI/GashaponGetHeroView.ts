/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GashaponGetHeroViewStruct from "../../Generates/GashaponUI/GashaponGetHeroViewStruct";
import { HeroData } from "../../../GameModule/DataStructs/HeroData";

export default class GashaponGetHeroView extends GashaponGetHeroViewStruct
{
    heroList: HeroData[];
    
    onShow(heroList: HeroData[])
    {
        this.heroList = heroList;
        this.visible = true;
        this.m_backBtn.onClick(this, this.showHero);
        this.showHero();
    }

    private showHero()
    {
        if(!this.heroList || this.heroList.length <= 0)
        {
            this.onHide();
            return;
        }
        let hero = this.heroList.shift();
        this.m_nameIcon.icon = hero.NameIcon;
        this.m_hero.icon =hero.Display;
        this.m_quality.setSelectedIndex(hero.Quality);
    }

    onHide()
    {
        this.m_backBtn.offClick(this, this.onHide);
        this.visible = false;

    }
}