import GetGamerSecretLandS2C = proto.GetGamerSecretLandS2C;
import Game from '../Game';
var GetGamerSecretLandS2CHandler = function(msg: GetGamerSecretLandS2C)
{
    if(!msg.error)
    {
        Game.moduleModel.secretLand.SetProto(msg);
    }
}            
export {GetGamerSecretLandS2CHandler}
