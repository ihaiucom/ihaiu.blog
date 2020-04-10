/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RoomMainViewStruct from "../../Generates/GameMatchUI/RoomMainViewStruct";
import RoomData from "../../../GameModule/DataStructs/RoomData";
import Game from "../../../Game";
import { MenuId } from "../../../GameModule/MenuId";
import RoomPlayerItem from "./RoomPlayerItem";
import TimeHelper from "../../../GameHelpers/TimeHelper";
import MatchWindowUI from "./MatchWindowUI";
import RoomListView from "./RoomListView";

export default class RoomMainView extends RoomMainViewStruct
{
    private roomData: RoomData;

    private memberListData: proto.IRoomMemInfo[];

    private _match: boolean;
    private _time: number;

    static PAGE:number = 4;

    // 窗口初始化完毕
    onWindowInited(): void
    {
        this.m_btnReady.visible = false;
        this.m_listPlayer.setItemRenderer(this.ItemRoomRender, this);
    }

    // 窗口显示
    onWindowShow(): void
    {
        let windowUI = <MatchWindowUI>this.parent
        let page = windowUI.m_state.selectedIndex
        if (page != RoomListView.PAGE && page != RoomMainView.PAGE) 
        {
            return;
        }

        this.m_btnStart.onClick(this, this.StartGame);
        this.m_btnReady.onClick(this, this.ReadyGame);
        this.m_btnLeave.onClick(this, this.LeaveGame);
        this.m_btnReturn.onClick(this, this.ReturnListView);
        Game.event.add("MATCH_START", this.StartTime, this);
        Game.event.add("MATCH_END", this.EndTime, this);
        Game.event.add("MATCH_CANCEL", this.ResetTime, this);
        Game.event.add("LEAVEMATCH", this.ResetTime, this);
        Game.event.add("ENTERMATCH", this.StartTime, this);
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        this.ReSet();
        this.m_btnStart.offClick(this, this.StartGame);
        this.m_btnReady.offClick(this, this.ReadyGame);
        this.m_btnLeave.offClick(this, this.LeaveGame);
        this.m_btnReturn.offClick(this, this.ReturnListView);
        Game.event.remove("MATCH_START", this.StartTime, this);
        Game.event.remove("MATCH_END", this.EndTime, this);
        Game.event.remove("MATCH_CANCEL", this.ResetTime, this);
        Game.event.remove("LEAVEMATCH", this.ResetTime, this);
        Game.event.remove("ENTERMATCH", this.StartTime, this);
    }

    ReSet()
    {
        this.m_btnStart.title = "开始匹配";
        this.m_btnReady.title = "开始准备"
        this.m_btnStart.touchable = true;
        this._match= false;
        this._time = 0;
        this.m_labTime.text =  TimeHelper.TimeFormatFixedHHMMSSCN(this._time);
        this.m_listPlayer.numItems = 0;
    }

    ItemRoomRender(index: number, item:RoomPlayerItem)
    {
        item.RenderItem(this.memberListData[index], index);
    }

    StartGame()
    {
        if (!this._match) 
        {
            this._match = true;
            this.m_btnStart.title = "取消匹配";
            // Game.sender.battleMatch.matchStart(this.roomData.type, Game.moduleModel.match.selectHeroId, this.roomData.id);
        } 
        else 
        {
            this._match = false;
            this.m_btnStart.title = "开始匹配";
            Game.sender.battleMatch.matchCancel();
        }
    }

    ReadyGame()
    {
        Game.sender.battleMatch.changeReady(this.roomData.id);
    }

    StartTime()
    {
        Engine.timer.loop(1000, this, this.CheckTime);
    }

    

    CheckTime()
    {
        this.m_labTime.text = TimeHelper.TimeFormatFixedHHMMSSCN(this._time);
        this._time++;
    }

    EndTime()
    {
        this.m_btnStart.title= "进入中..."
        this.m_btnStart.touchable = false;
        this.m_labTime.text  = "匹配成功！";
        Engine.timer.clear(this, this.CheckTime);
    }

    ResetTime()
    {
        Engine.timer.clear(this, this.CheckTime);
        this._time = 0;
        this.m_labTime.text = TimeHelper.TimeFormatFixedHHMMSSCN(this._time);
    }

    LeaveGame()
    {
        let roomdata: RoomData = this.roomData;
        Game.sender.battleMatch.leavelRoom(roomdata.id);

        this.ReturnListView();
    }

    ReturnListView()
    {
        Game.sender.battleMatch.getRoomList();
        Game.menu.openTab(MenuId.BattleMatch, 3);
    }

    updateView(roomdata:RoomData)
    {
        this.roomData = roomdata;

        this.m_labName.text = roomdata.name;
        this.memberListData = roomdata.members;
        this.m_listPlayer.numItems = roomdata.members.length;

        if ( Game.user.id == roomdata.ownerId) 
        {
            this.m_state.selectedIndex = 0;
        } 
        else 
        {
            this.m_state.selectedIndex = 1;
        }
    }


}