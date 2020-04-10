import RoomListS2C = proto.RoomListS2C;
import Game from "../Game";
var RoomListS2CHandler = function(msg: RoomListS2C)
{
    if (msg.error) 
        return
    
    Game.moduleModel.room.setRoomList(msg.roomList);
    Game.event.dispatch("ENTERROOMLIST");
}            
export {RoomListS2CHandler}
