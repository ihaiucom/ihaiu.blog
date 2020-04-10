/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GamePlayerDraugItemStruct from "../../Generates/GamePlayerInfoUI/GamePlayerDraugItemStruct";
import DraugData from "../../../GameModule/DataStructs/DraugData";
import Res from "../../../Config/Keys/Res";

export default class GamePlayerDraugItem extends GamePlayerDraugItemStruct
{
    renderItem(draugData: DraugData)
    {
        this.m_imgItem.url      = Res.getDraugIcon(draugData.typeName);
        this.m_labLevel.text    = `${draugData.level}`;
        this.m_Quality.selectedIndex = draugData.quality - 1;
    }


}