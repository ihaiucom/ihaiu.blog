import Game from '../Game';
import GamerNotifyDanInfoS2C = proto.GamerNotifyDanInfoS2C;
var GamerNotifyDanInfoS2CHandler = function(msg: GamerNotifyDanInfoS2C)
{
    if(!msg.error)
    {
        Game.moduleModel.pvp.setDanInfo(msg.gamerDan);
    }
}            
export {GamerNotifyDanInfoS2CHandler}
