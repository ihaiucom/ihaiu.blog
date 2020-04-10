import Game from '../Game';
import GamerNotifyGashaponInfoS2C = proto.GamerNotifyGashaponInfoS2C;
var GamerNotifyGashaponInfoS2CHandler = function(msg: GamerNotifyGashaponInfoS2C)
{
    if(!msg.error)
        Game.moduleModel.gashapon.setGashaponList(msg.infos);
    
}            
export {GamerNotifyGashaponInfoS2CHandler}
