import GamerAddRoomS2C = proto.GamerAddRoomS2C;
import Game from "../Game";
import RoomData from "../GameModule/DataStructs/RoomData";
var GamerAddRoomS2CHandler = function(msg: GamerAddRoomS2C)
{
    if(msg.error)
        return;

    let roomModel = Game.moduleModel.room;
    let roomdata:RoomData = roomModel.setRoom(msg.room);
    roomModel.MyRoom = roomdata;

    Game.event.dispatch("ENTERROOM", roomdata);
}            
export {GamerAddRoomS2CHandler}
