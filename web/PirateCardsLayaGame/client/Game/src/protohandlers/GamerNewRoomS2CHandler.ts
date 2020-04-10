import GamerNewRoomS2C = proto.GamerNewRoomS2C;
import Game from "../Game";
import RoomData from "../GameModule/DataStructs/RoomData";
var GamerNewRoomS2CHandler = function(msg: GamerNewRoomS2C)
{
    if(msg.error)
        return;

    
    let roomModel = Game.moduleModel.room;
    let roomdata:RoomData = roomModel.setRoom(msg.room);
    roomModel.MyRoom = roomdata;

    Game.event.dispatch("ENTERROOM", roomdata);
}            
export {GamerNewRoomS2CHandler}
