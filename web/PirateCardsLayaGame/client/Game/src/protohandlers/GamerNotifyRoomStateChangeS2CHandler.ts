import GamerNotifyRoomStateChangeS2C = proto.GamerNotifyRoomStateChangeS2C;
import Game from "../Game";
var GamerNotifyRoomStateChangeS2CHandler = function(msg: GamerNotifyRoomStateChangeS2C)
{
    if(msg.error)
        return

    let roomModel = Game.moduleModel.room;
    roomModel.notifyRoomState(msg.state);
    Game.event.dispatch("ENTERROOMLIST");
    
    switch (msg.state) {
        case 1:
            Game.event.dispatch("LEAVEMATCH");
            break;
        case 2:
            Game.event.dispatch("ENTERMATCH");
            break
        default:
            break;
    }
    
}            
export {GamerNotifyRoomStateChangeS2CHandler}
