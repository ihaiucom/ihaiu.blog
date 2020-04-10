import GamerChangeNameS2C = proto.GamerChangeNameS2C;
import Game from "../Game";
var GamerChangeNameS2CHandler = function(msg: GamerChangeNameS2C)
{
    if(!msg.error)
    {
        Game.user.changeNameNum++;
    }
}            
export {GamerChangeNameS2CHandler}
