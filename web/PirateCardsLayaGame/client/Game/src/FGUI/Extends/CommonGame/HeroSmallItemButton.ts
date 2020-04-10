/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroSmallItemButtonStruct from "../../Generates/CommonGame/HeroSmallItemButtonStruct";
import {BattleItemSelectIndex} from "../ModuleHero/HeroItemButton";
import Game from "../../../Game";
import {HeroData} from "../../../GameModule/DataStructs/HeroData";
import GameEventKey from "../../../GameEventKey";

export default class HeroSmallItemButton extends HeroSmallItemButtonStruct
{
    itemData: HeroData;
    index: number;

    protected constructFromXML(xml: any): void
    {
        super.constructFromXML(xml);
        Game.event.add(GameEventKey.GameFrame_HeroStarUp,this.OnUpDateStar,this);
    }

    dispose()
    {
        Game.event.remove(GameEventKey.GameFrame_AddHero,this.OnUpDateStar,this);
        super.dispose();
    }

    private OnUpDateStar(id: number)
    {
        if(!this.itemData)
        {
            return
        }

        if(id == this.itemData.ID)
        {
            let data = Game.moduleModel.hero.GetData(id);
            this.RenderItem(data);
        }
    }

    public RenderItem(data: HeroData,isBattlePlan: boolean = false)
    {
        this.m_button.selectedIndex = 0;
        this.itemData = data;

        let cardUrl = Game.moduleModel.hero.Card(data.id);
        this.m_bg.url = cardUrl;
        this.m_quality.selectedIndex = data.Quality - 1;
        this.m_name.text = data.Name;
        this.m_star.m_starNum.selectedIndex = data.star;
        this.m_star.m_starPos.selectedIndex = data.star;
        this.m_state.selectedIndex = data.state;

        let isGet: boolean = Game.moduleModel.hero.IsGet(data.id);
        this.grayed = isGet ? false : true;
        this.m_frame.grayed = false;

        this.m_showType.selectedIndex = isBattlePlan ? 1 : 0;
        this.m_battleSelect.selectedIndex = BattleItemSelectIndex.default;
    }

    public UpdateBattleInfo(index: int)
    {
        this.m_battleSelect.selectedIndex = index;
    }
}