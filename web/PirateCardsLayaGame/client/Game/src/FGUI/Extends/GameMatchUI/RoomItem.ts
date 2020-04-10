/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RoomItemStruct from "../../Generates/GameMatchUI/RoomItemStruct";
import RoomData from "../../../GameModule/DataStructs/RoomData";
import { RoomStateType } from "../../../GameModule/DataEnums/RoomStateType";
import Game from "../../../Game";

export default class RoomItem extends RoomItemStruct
{
    datasouce:RoomData;

    RenderItem(datasouce:RoomData)
    {
        this.datasouce = datasouce;

        this.m_title.text = datasouce.name;
        this.setState();
        this.setType();
    }

    setState()
    {
        let datasouce = this.datasouce;
        
        // let maxNum = 0;
        // if (datasouce.type == PKType.PVP_M2V2) 
        // {
        //     maxNum = 4;
        // } 
        // if (datasouce.type == PKType.PVP_M3V3) 
        // {
        //     maxNum = 6;
        // } 
        // if (datasouce.type == PKType.PVP_M4V4) 
        // {
        //     maxNum = 8;
        // } 
        // if (datasouce.type == PKType.PVP_M5V5) 
        // {
        //     maxNum = 10;
        // } 
        let maxNum = 0;
        switch (datasouce.type) {
            case proto.PVPType.PVE_M2:
                maxNum = 2;
                break;
            case proto.PVPType.PVP_M1V1:
                maxNum = 2;
                break;
            case proto.PVPType.PVP_M2V2:
                maxNum = 4;
                break;
            case proto.PVPType.PVP_M3V3:
                maxNum = 6;
                break;
            case proto.PVPType.PVP_M4V4:
                maxNum = 8;
                break;
            case proto.PVPType.PVP_M5V5:
                maxNum = 10;
                break;
        
            default:
                break;
        }
        
        
        if (datasouce.members.length == maxNum)
        {
            //已满员
            this.m_state.selectedIndex = 1;
        }
        else
        {
            //未满员
            this.m_state.selectedIndex = 0;
        }

        
        if (datasouce.state == RoomStateType.InMatching) 
        {
            //匹配中
            this.m_state.selectedIndex = 2;
        }
    }

    setType()
    {
        let datasouce = this.datasouce;

        switch (datasouce.type) {
            case proto.PVPType.PVE_M2:
                this.m_type.selectedIndex = 1;
                break;
            case proto.PVPType.PVP_M1V1:
                this.m_type.selectedIndex = 0;
                break;
            case proto.PVPType.PVP_M2V2:
                this.m_type.selectedIndex = 2;
                break;
            case proto.PVPType.PVP_M3V3:
                this.m_type.selectedIndex = 3;
                break;
            case proto.PVPType.PVP_M4V4:
                this.m_type.selectedIndex = 4;
                break;
            case proto.PVPType.PVP_M5V5:
                this.m_type.selectedIndex = 5;
                break;
        
            default:
                break;
        }
    }

    addRoom(): boolean
    {
        let roomdata = Game.moduleModel.room.MyRoom;

        if (roomdata) 
        {
            if (this.datasouce.id == roomdata.id) 
            {
                Game.event.dispatch("ENTERROOM", roomdata);
            } 
            else 
            {
                console.log("已加入房间，不可进入！");   
            }
            return false;
        }

        if (this.m_state.selectedIndex == 1) 
        {
            console.log("房间已满员，不可进入！");
            return false;
        }

        if (this.m_state.selectedIndex == 2) 
        {
            console.log("游戏进行中，不可进入！");
            return false;
        }

        return true;
    }
}