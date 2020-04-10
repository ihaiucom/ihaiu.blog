/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GamePlayerInfoHeroViewStruct from "../../Generates/GamePlayerInfoUI/GamePlayerInfoHeroViewStruct";
import Game from '../../../Game';
import GamePlayerInfoHeroListTab from './GamePlayerInfoHeroListTab';
import GamePlayerInfoHeroListItem from './GamePlayerInfoHeroListItem';
import HeroGroupData from '../../../GameModule/DataStructs/HeroGroupData';
import HeroGroupPosData from '../../../GameModule/DataStructs/HeroGroupPosData';

export default class GamePlayerInfoHeroView extends GamePlayerInfoHeroViewStruct
{
    get heroPosList()
    {
        if(!this.heroGroupList || this.heroGroupList.length <= 0)
            return [];
        let list = this.heroGroupList[this.m_tabList.selectedIndex].posList;
        let list2 = []
        for (let group of list) {
            group.heroId > 0 && (list2.push(group));
        }
        return list2;
    }

    get heroGroupList(): HeroGroupData[]
    {
        return Game.moduleModel.battlePlan.battleTeamDict.getValues();
    }

    get heroGroup()
    {
        return this.heroGroupList[this.m_tabList.selectedIndex];
    }
    
    async onShow()
    {
        //我的队伍
        this.m_teamCount.setSelectedIndex(this.heroGroupList.length);
        for (let index = 0; index < this.heroGroupList.length; index++) {
            let heroGroup = this.heroGroupList[index];
            let tab: GamePlayerInfoHeroListTab = <GamePlayerInfoHeroListTab>this['m_tab'+index];
            tab.title = heroGroup.name;
        }
        this.m_tabList.on(fgui.Events.STATE_CHANGED, this, this.updateHeroList);
        this.m_heroList.itemRenderer = Laya.Handler.create(this,this.itemRenderer,null, false);
        this.updateHeroList();
    }

    itemRenderer(index: number, item: GamePlayerInfoHeroListItem)
    {
        let hero = this.heroGroup.GetHeroData(index);
        item.m_bgType.setSelectedIndex(index%2);
        item.itemRenderer(hero);
    }

    updateHeroList()
    {
        this.m_heroList.numItems = this.heroPosList.length;
    }

    onHide()
    {
        this.m_heroList.itemRenderer.recover();
        this.m_tabList.off(fgui.Events.STATE_CHANGED, this, this.updateHeroList);
    }
    
}