import GamerLoginGetDataS2C = proto.GamerLoginGetDataS2C;
import Game from "../Game";
var GamerLoginGetDataS2CHandler = function(msg: GamerLoginGetDataS2C)
{
    if (msg.error)
        return; 

    Game.moduleModel.power.SetFatigueInfo(msg.fatigue);
}            
export {GamerLoginGetDataS2CHandler}
