/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroSkillItemStruct from "../../Generates/ModuleHero/HeroSkillItemStruct";
import { SkillData } from "../../../GameModule/DataStructs/SkillData";
import TEXT from "../../../Config/Keys/TEXT";
import { EnumSkillState } from "../../../GameWar/Logic/Enum/EnumSkill";
import Game from "../../../Game";
import MsgKey from "../../../Config/Keys/MsgKey";
import MenuValidateRed from "../../../GameModule/MenuValidateRed";
import { MenuId } from "../../../GameModule/MenuId";

export default class HeroSkillItem extends HeroSkillItemStruct
{
    data: SkillData;
    heroID: int;
    protected constructFromXML(xml: any): void 
    {
        super.constructFromXML(xml);
        this.m_btnLevel.onClick(this, this.OnClickLevel)
        this.m_icon.onClick(this, this.OnClickIcon)
    }

    OnClickLevel()
    {   
        let heroData = Game.moduleModel.hero.GetData(this.heroID);
        let data = this.data
        let lv = data.config.upSkillLv[data.lv - 1];
        if(heroData.level < lv)
        {
            let str = TEXT.HeroSkillLevelNotLevel.format(lv)
            Game.system.toastText(str);
            return
        }

        Game.system.HeroSkillLevelUpShow(this.heroID, this.data.id);
        // Game.sender.hero.SkillLevelUp(this.heroID, this.data.id);
    }

    OnClickIcon()
    {
        Game.system.HeroSkillTipsShow(this.heroID, this.data.id);
    }

    public RenderItem(data: SkillData, heroID: int)
    {
        this.heroID = heroID;
        this.data = data;
        if(!data)
        {
            this.m_state.selectedIndex = 0;
            return    
        }

        this.m_state.selectedIndex = data.state;
        this.m_icon.m_icon.url = data.icon;
        this.m_name.text = data.name;
        this.m_labelType.text = data.config.tips;
        this.m_level.text = data.lv.toString();
        this.m_maxLevel.text = "/" + data.maxLv;
        if(data.state == EnumSkillState.lock)
        {
            this.m_labelOpen.text = TEXT.HeroSkillOpenLevel.format(data.config.openSkillLv);
        }

        MenuValidateRed.getInstance().openItem(MenuId.Hero, data, this.m_btnLevel);
    }
}