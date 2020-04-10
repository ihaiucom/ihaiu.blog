/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GashaponHeroDetailStruct from "../../Generates/GashaponUI/GashaponHeroDetailStruct";
import {HeroData} from "../../../GameModule/DataStructs/HeroData";
import Game from '../../../Game';

export default class GashaponHeroDetail extends GashaponHeroDetailStruct
{
    heroList: HeroData[];

    onShow(heroList: HeroData[])
    {
        this.heroList = heroList;
        this.visible = true;
        this.m_backBtn.onClick(this,this.showHero);
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
        this.m_name.text = hero.name;
        this.m_hero.RenderItem(hero);
        this.m_name.text = hero.name ? hero.name : hero.Name;
        for(let index = 0;index < hero.config.propId.length;index++)
        {
            const propId = hero.config.propId[index];
            this['m_prop' + index].updateView(propId);
        }

        for(let index = 0;index < hero.config.baseSkillId.length;index++)
        {
            const skillId = hero.config.propId[index];
            let skillConfig = Game.config.skill.getConfig(skillId);
            let icon = Game.config.avatar.getConfig(skillConfig.icon).iconUrl;
            this['m_skill' + index].icon = icon;
        }
        
        // this.m_level.text = hero.
    }

    onHide()
    {
        this.m_backBtn.offClick(this,this.onHide);
        this.visible = false;

    }
}