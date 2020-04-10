import GamerNotifyAddRoomS2C = proto.GamerNotifyAddRoomS2C;
import Game from "../Game";
import RoomData from "../GameModule/DataStructs/RoomData";
var GamerNotifyAddRoomS2CHandler = function(msg: GamerNotifyAddRoomS2C)
{
    if(msg.error)
        return;
    
    let roomModel = Game.moduleModel.room;
    let roomdata:RoomData = roomModel.notifyAddRoom(msg.member);

    Game.event.dispatch("ENTERROOM", roomdata);
    Game.event.dispatch("ENTERROOMLIST");
}            
export {GamerNotifyAddRoomS2CHandler}
