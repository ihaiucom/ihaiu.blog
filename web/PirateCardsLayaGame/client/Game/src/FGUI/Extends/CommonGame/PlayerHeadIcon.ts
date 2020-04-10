/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PlayerHeadIconStruct from "../../Generates/CommonGame/PlayerHeadIconStruct";

export default class PlayerHeadIcon extends PlayerHeadIconStruct
{
    UpdateView(icon: string)
    {
        this.m_icon.icon = icon;
    }
}