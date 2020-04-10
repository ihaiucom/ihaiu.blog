/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RoomListViewStruct from "../../Generates/GameMatchUI/RoomListViewStruct";
import Game from "../../../Game";
import { MenuId } from "../../../GameModule/MenuId";
import RoomData from "../../../GameModule/DataStructs/RoomData";
import RoomItem from "./RoomItem";
import MatchWindowUI from "./MatchWindowUI";
import RoomMainView from "./RoomMainView";

export default class RoomListView extends RoomListViewStruct
{
    static PAGE:number = 3;

    // 窗口初始化完毕
    onWindowInited(): void
    {
        this.m_listRoom.setItemRenderer(this.ItemRoomRender, this);
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

        //请求房间列表
        Game.sender.battleMatch.getRoomList();

        this.m_listRoom.on(fgui.Events.CLICK_ITEM, this, this.ItemRoomClick);
        this.m_btnBuildPvP.onClick(this, this.BuildPvPRoom);
        this.m_btnBuildPvE.onClick(this, this.BuildPvERoom);
        this.m_btnBuild2v2.onClick(this, this.Build2v2Room);
        this.m_btnBuild3v3.onClick(this, this.Build3v3Room);
        this.m_btnBuild4v4.onClick(this, this.Build4v4Room);
        this.m_btnBuild5v5.onClick(this, this.Build5v5Room);


        this.m_btnReturn.onClick(this, this.ReturnMainView);
        this.m_btnUpdate.onClick(this, this.getRoomList);
        this.m_btnEnter.onClick(this, this.EnterRoom);
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        this.ReSet();
        this.m_listRoom.off(fgui.Events.CLICK_ITEM, this, this.ItemRoomClick);
        this.m_btnBuildPvP.offClick(this, this.BuildPvPRoom);
        this.m_btnBuildPvE.offClick(this, this.BuildPvERoom);
        this.m_btnBuild2v2.offClick(this, this.Build2v2Room);
        this.m_btnBuild3v3.offClick(this, this.Build3v3Room);
        this.m_btnBuild4v4.offClick(this, this.Build4v4Room);
        this.m_btnBuild5v5.offClick(this, this.Build5v5Room);

        this.m_btnReturn.offClick(this, this.ReturnMainView);
        this.m_btnUpdate.offClick(this, this.getRoomList);
        this.m_btnEnter.offClick(this, this.EnterRoom);
    }

    get selectHeroId(): int
    {
        return Game.moduleModel.match.selectHeroId;
    }

    ReSet()
    {
        this.m_listRoom.numItems = 0;
    } 

    private roomListData:RoomData[];
    updateView()
    {
        this.roomListData = Game.moduleModel.room.getRoomList();
        this.m_listRoom.numItems = this.roomListData.length;

        let myroom = Game.moduleModel.room.MyRoom;
        this.m_state.selectedIndex = !myroom ? 0 : 1;
    }

    EnterRoom()
    {
        let myroom = Game.moduleModel.room.MyRoom;
        Game.event.dispatch("ENTERROOM", myroom);
    }

    

    ItemRoomRender(index: number, item:RoomItem)
    {
        item.RenderItem(this.roomListData[index]);
    }

    ItemRoomClick(item:RoomItem)
    {
        if (item.addRoom()) 
        {
            //进入房间
            Game.sender.battleMatch.addRoom(item.datasouce.id, this.selectHeroId);
        }
    }

    /**
     * 创建PvP房间
     */
    BuildPvPRoom()
    {
        Game.sender.battleMatch.newRoom(proto.PVPType.PVP_M1V1, this.selectHeroId, this.m_labName.text);
    }

    /**
     * 创建PvE房间
     */
    BuildPvERoom()
    {
        Game.sender.battleMatch.newRoom(proto.PVPType.PVE_M2, this.selectHeroId, this.m_labName.text);
    }

    /**
     * 创建2v2房间
     */
    Build2v2Room()
    {
        Game.sender.battleMatch.newRoom(proto.PVPType.PVP_M2V2, this.selectHeroId, this.m_labName.text);
    }

    /**
     * 创建3v3房间
     */
    Build3v3Room()
    {
        Game.sender.battleMatch.newRoom(proto.PVPType.PVP_M3V3, this.selectHeroId, this.m_labName.text);
    }

    /**
     * 创建4v4房间
     */
    Build4v4Room()
    {
        Game.sender.battleMatch.newRoom(proto.PVPType.PVP_M4V4, this.selectHeroId, this.m_labName.text);
    }

    /**
     * 创建5v5房间
     */
    Build5v5Room()
    {
        Game.sender.battleMatch.newRoom(proto.PVPType.PVP_M5V5, this.selectHeroId, this.m_labName.text);
    }

    /**
     * 返回主界面
     */
    ReturnMainView()
    {
        Game.menu.open(MenuId.Home);
        Game.menu.close(MenuId.BattleMatch);
    }

    /**
     * 获取房间列表
     */
    getRoomList()
    {
        Game.sender.battleMatch.getRoomList();
    }
}