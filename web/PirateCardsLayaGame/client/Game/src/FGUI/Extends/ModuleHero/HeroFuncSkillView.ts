/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroFuncSkillViewStruct from "../../Generates/ModuleHero/HeroFuncSkillViewStruct";
import HeroSkillItem from "./HeroSkillItem";
import Game from "../../../Game";
import GameEventKey from "../../../GameEventKey";

export default class HeroFuncSkillView extends HeroFuncSkillViewStruct
{
    maxSkillNum = 4;
    heroID: number;

    onWindowInited(): void
    {
    }

    onWindowShow(): void  
    {
        this.m_list.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, false);
        this.m_list.on(fgui.Events.CLICK_ITEM, this, this.clickListItem);
        Game.event.add(GameEventKey.GameFrame_HeroSkillLevel, this.onLevelUp, this);
    }

    onWindowHide(): void  {
        this.heroID = null;
        this.m_list.numItems = 0;
        this.m_list.off(fgui.Events.CLICK_ITEM, this, this.clickListItem);
        Game.event.add(GameEventKey.GameFrame_HeroSkillLevel, this.onLevelUp, this);
    }

    renderListItem(index: number, item: HeroSkillItem): void
    {
        let list = Game.moduleModel.hero.GetSkillList(this.heroID)
        let data = list[index];
        item.RenderItem(data, this.heroID);
    }

    clickListItem(target: HeroSkillItem, event: Event): void
    {
    }

    updateView(id: number)
    {
        this.heroID = id;
        this.m_list.numItems = this.maxSkillNum;
    }

    onLevelUp()
    {
        this.updateView(this.heroID);
    }
}