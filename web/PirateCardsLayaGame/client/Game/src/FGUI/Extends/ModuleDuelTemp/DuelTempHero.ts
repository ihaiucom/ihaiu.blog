/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TEXT from '../../../Config/Keys/TEXT';
import Game from '../../../Game';
import DuelTempHeroStruct from "../../Generates/ModuleDuelTemp/DuelTempHeroStruct";

export default class DuelTempHero extends DuelTempHeroStruct
{
    UpdateView(heroId:number)
    {
        let hero = Game.moduleModel.hero.GetData(heroId);
        if(hero)
        {
            this.m_icon.icon = hero.LoadingIconUrl;
            // this.m_skillBtn
            let name = hero.name ? hero.name : hero.Name;
			this.m_nameLevel.text = TEXT.BattlePlanTeamHeroNameAndLevel.format(name, hero.level);
			let posData = Game.moduleModel.pvp.SelectedHeroGroup.GetHeroByID(heroId);
			if(posData)
			this.ChangeCommonSkill(posData.skillId);
        }
	}
	
	public ChangeCommonSkill(skillIndex: number)
	{
		if(skillIndex == 0)
		{
			this.m_skillBtn.m_skillCom.url = ""
		}
		else
		{
			let url = "res/fspriteassets/icon/skillIcon/common_" + skillIndex.toString() + ".png";
			this.m_skillBtn.m_skillCom.url = url;
		}

	}
}