/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GashaponHeroIconButtonStruct from "../../Generates/GashaponUI/GashaponHeroIconButtonStruct";
import { HeroData } from "../../../GameModule/DataStructs/HeroData";
import Game from "../../../Game";

export default class GashaponHeroIconButton extends GashaponHeroIconButtonStruct
{
    public RenderItem(data: HeroData)  {

        let iconUrl = Game.moduleModel.hero.Icon(data.id);
        this.m_icon.url = iconUrl;
        this.m_quality.selectedIndex = data.Quality - 1;
        this.m_frame.grayed = false;

    }
}