import Game from '../Game';
import GamerExtractGashaponS2C = proto.GamerExtractGashaponS2C;
var GamerExtractGashaponS2CHandler = function(msg: GamerExtractGashaponS2C)
{
    if(!msg.error)
    {
        Game.moduleModel.gashapon.updateGashaponData(msg);
    }
}            
export {GamerExtractGashaponS2CHandler}
