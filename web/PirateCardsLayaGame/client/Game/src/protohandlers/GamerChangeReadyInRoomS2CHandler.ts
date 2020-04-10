import GamerChangeReadyInRoomS2C = proto.GamerChangeReadyInRoomS2C;
import Game from "../Game";
import RoomData from "../GameModule/DataStructs/RoomData";
var GamerChangeReadyInRoomS2CHandler = function(msg: GamerChangeReadyInRoomS2C)
{
    if (msg.error) 
        return;

    let roomModel = Game.moduleModel.room;
    roomModel.notifyMemberState(msg.state);
    Game.event.dispatch("ENTERROOM");
}            
export {GamerChangeReadyInRoomS2CHandler}
