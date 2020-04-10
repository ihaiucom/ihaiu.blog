import GamerLeaveRoomS2C = proto.GamerLeaveRoomS2C;
import Game from "../Game";
var GamerLeaveRoomS2CHandler = function(msg: GamerLeaveRoomS2C)
{
    if (msg.error)
        return;
    
    Game.moduleModel.room.MyRoom = null;
}            
export {GamerLeaveRoomS2CHandler}
