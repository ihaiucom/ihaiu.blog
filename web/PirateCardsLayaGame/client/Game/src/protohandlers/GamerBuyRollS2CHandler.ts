import Game from '../Game';
import GamerBuyRollS2C = proto.GamerBuyRollS2C;
var GamerBuyRollS2CHandler = function(msg: GamerBuyRollS2C)
{
    if(!msg.error)
    {
        Game.moduleModel.secretLand.SetRollProto(msg.rollNum);
    }
}            
export {GamerBuyRollS2CHandler}
