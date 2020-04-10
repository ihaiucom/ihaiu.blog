import EatEquipsS2C = proto.EatEquipsS2C;
import Game from "../Game";
var EatEquipsS2CHandler = function(msg: EatEquipsS2C)
{
    if(msg.error == 0)
    {
        Game.moduleModel.equip.OnLevelUp(msg.equip)
    }
}            
export {EatEquipsS2CHandler}
