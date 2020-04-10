import Game from '../Game';
import GetDanInfoS2C = proto.GetDanInfoS2C;
var GetDanInfoS2CHandler = function(msg: GetDanInfoS2C)
{
    if(!msg.error)
    {
        Game.moduleModel.pvp.setDanInfo(msg.gamerDan);
    }
}            
export {GetDanInfoS2CHandler}
