import GamerNotifyLeaveRoomS2C = proto.GamerNotifyLeaveRoomS2C;
import Game from "../Game";
import RoomData from "../GameModule/DataStructs/RoomData";
var GamerNotifyLeaveRoomS2CHandler = function(msg: GamerNotifyLeaveRoomS2C)
{
    if (msg.error)
        return;
    
    let roomModel = Game.moduleModel.room;
    let roomdata:RoomData = roomModel.notifyLeaveRoom(msg.memberId, msg.newOwnerId);

    Game.event.dispatch("ENTERROOM", roomdata);
    Game.event.dispatch("ENTERROOMLIST");
}            
export {GamerNotifyLeaveRoomS2CHandler}
