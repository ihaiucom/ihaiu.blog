/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroIconItemButtonStruct from "../../Generates/ModuleHero/HeroIconItemButtonStruct";
import { HeroData } from "../../../GameModule/DataStructs/HeroData";
import Game from "../../../Game";

export default class HeroIconItemButton extends HeroIconItemButtonStruct
{
    iconData:HeroData;
    
    protected constructFromXML(xml: any): void {
        super.constructFromXML(xml);
    }

    public RenderItem(data: HeroData)  {
        this.iconData = data;

        let iconUrl = Game.moduleModel.hero.Icon(data.id);
        this.m_icon.url = iconUrl;
        this.m_star.m_starNum.selectedIndex = data.star;
        this.m_star.m_starPos.selectedIndex = data.star;
        this.m_quality.selectedIndex = data.Quality - 1;
        let isGet: boolean = Game.moduleModel.hero.IsGet(data.id);
        this.grayed = isGet?false:true;

        let inBattle = Game.moduleModel.battlePlan.CheckHeroInTeam(data.id);
        this.m_inBattle.selectedIndex = inBattle?1:0;
    }
}