/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MatchWindowUIStruct from "../../Generates/GameMatchUI/MatchWindowUIStruct";
import MatchWindow from "../../../GameModule/ViewWindows/MatchWindow";
import Game from "../../../Game";
import RoomData from "../../../GameModule/DataStructs/RoomData";
import { MenuId } from "../../../GameModule/MenuId";

export default class MatchWindowUI extends MatchWindowUIStruct
{

    moduleWindow: MatchWindow;

    
    // 窗口初始化完毕
    onWindowInited(): void
    {
        this.m_pvpNewMainView.ReSet();
        this.m_pveNewMainView.ReSet();
        this.m_twovtwoMainView.ReSet();
        // this.m_roomListView.ReSet();
        // this.m_roomMainView.ReSet();
        window['match'] = this;
    }

    // 窗口显示
    onWindowShow(): void
    {
        Game.event.add("ENTERROOMLIST", this.enterListView, this)
        Game.event.add("ENTERROOM", this.enterMainView, this);
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        Game.event.remove("ENTERROOMLIST", this.enterListView, this)
        Game.event.remove("ENTERROOM", this.enterMainView, this);
    }

    enterListView()
    {
        this.m_roomListView.updateView();
    }

    enterMainView(roomdata:RoomData)
    {
        this.m_state.selectedIndex = 4;
        // this.m_roomMainView.onWindowInited();
        // this.m_roomMainView.updateView(roomdata);
    }
}