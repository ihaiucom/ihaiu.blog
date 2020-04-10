import GamerNotifySecretLandInfoS2C = proto.GamerNotifySecretLandInfoS2C;
import Game from "../Game";
var GamerNotifySecretLandInfoS2CHandler = function(msg: GamerNotifySecretLandInfoS2C)
{
    if(!msg.error)
    {
        Game.moduleModel.secretLand.SetAffixProto(msg);
    }
}            
export {GamerNotifySecretLandInfoS2CHandler}
