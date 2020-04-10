import MModel from "../../GameFrame/Module/MModel";
import RoomData from "../DataStructs/RoomData";

export default class MatchRoomModel extends MModel
{
	/**房间字典 by id */
    private roomDict: Dictionary<number, RoomData> = new Dictionary<number, RoomData>();

    private myRoom:RoomData;

    set MyRoom(data:RoomData)
    {
        this.myRoom = data;
    } 

    get MyRoom():RoomData
    {
        return this.myRoom;
    }

    setRoom(msg:proto.IRoomInfo):RoomData
    {
        let roomData:RoomData = RoomData.Create(msg);
        this.roomDict.add(roomData.id, roomData);

        return roomData;
    }

    setRoomList(msgs:proto.IRoomInfo[])
    {
        this.roomDict.clear();

        for (let i = 0, len = msgs.length; i < len; i++) {
            let msg: proto.IRoomInfo = msgs[i];
            this.setRoom(msg);
        }
    }

    getRoomList():RoomData[]
    {
        return this.roomDict.getValues();
    }

    notifyAddRoom(member: proto.IRoomMemInfo): RoomData
    {
        if (!this.myRoom) 
        {
             console.log("未加入房间，无法同步玩家加入！")
             return;  
        }

        this.myRoom.members.push(member);
        this.roomDict.add(this.myRoom.id, this.myRoom);

        return this.myRoom;
    }

    notifyLeaveRoom(memberId: number, newOwnerId: number): RoomData
    {
        if (!this.myRoom) 
        {
             console.log("未加入房间，无法同步玩家离开！")
             return;  
        }

        this.myRoom.ownerId= newOwnerId;
        let members = this.myRoom.members;
        for (let i = 0, len = members.length; i < len; i++) 
        {
            if (memberId == members[i].miniInfo.id) 
            {
                this.myRoom.members.splice(i, 1);
                break;
            }
        }

        return this.myRoom;
    }

    notifyRoomState(state: proto.RoomState)
    {
        if (!this.myRoom) 
        {
             console.log("未加入房间，无法同步玩家状态！")
             return;  
        }

        this.myRoom.state = state;
        this.roomDict.add(this.myRoom.id, this.myRoom);
    }

    notifyMemberState(state: proto.GamerStatus)
    {
        if (!this.myRoom) 
        {
             console.log("未加入房间，无法同步玩家状态！")
             return;  
        }

        let members = this.myRoom.members;
        for (let i = 0, len = members.length; i < len; i++) 
        {
            if (GOW.MY_PLAYERID == members[i].miniInfo.id) 
            {
                this.myRoom.members[i].miniInfo.state = state
                break;
            }
        }
        this.roomDict.add(this.myRoom.id, this.myRoom);
    }


    // notifyRoomInfo(msg: proto.IRoomInfo, cancel: boolean):RoomData
    // {
    //     let roomData:RoomData = RoomData.Create(msg);
    //     this.dictById.add(roomData.id, roomData);

    //     return roomData;
    // }
    


    

}