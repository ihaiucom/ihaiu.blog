import Game from '../Game';
import GamerNotifyGamerSecretLandInfoS2C = proto.GamerNotifyGamerSecretLandInfoS2C;
var GamerNotifyGamerSecretLandInfoS2CHandler = function(msg: GamerNotifyGamerSecretLandInfoS2C)
{
    if(!msg.error)
    {
        Game.moduleModel.secretLand.SetProto(msg)
    }
}            
export {GamerNotifyGamerSecretLandInfoS2CHandler}
