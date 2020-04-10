/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RankSwitchStruct from "../../Generates/ModuleRank/RankSwitchStruct";

export default class RankSwitch extends RankSwitchStruct
{
    updateViewByPage(page: int, isLast: boolean)
    {
        this.m_right.visible = !isLast;
        this.m_left.visible = page > 1;
        this.m_title.text = page + "";
    }
}