/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeadIconStruct from "../../Generates/CommonGame/HeadIconStruct";
import HeroConfig from '../../../Config/ConfigExtends/HeroConfig';
import Game from '../../../Game';
import { HeroData } from '../../../GameModule/DataStructs/HeroData';

export default class HeadIcon extends HeadIconStruct
{
    heroData: HeroData;
    RendererItem(heroConfig: HeroConfig)
    {
        this.heroData = Game.moduleModel.hero.GetData(heroConfig.id);
        this.grayed = !Game.moduleModel.hero.IsGet(heroConfig.id);
        this.m_title.text = heroConfig.name;
        this.m_icon.icon = heroConfig.heroIcon;
    }
}