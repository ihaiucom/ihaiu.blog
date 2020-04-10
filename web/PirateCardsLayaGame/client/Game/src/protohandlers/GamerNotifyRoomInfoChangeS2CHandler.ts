import GamerNotifyRoomInfoChangeS2C = proto.GamerNotifyRoomInfoChangeS2C;
import Game from "../Game";
import RoomData from "../GameModule/DataStructs/RoomData";
var GamerNotifyRoomInfoChangeS2CHandler = function(msg: GamerNotifyRoomInfoChangeS2C)
{
    if (msg.error) 
        return;

    // let roomModel = Game.moduleModel.room;
    // let roomdata:RoomData = roomModel.notifyRoomInfo(msg.room, msg.cancel);
    
}            
export {GamerNotifyRoomInfoChangeS2CHandler}
