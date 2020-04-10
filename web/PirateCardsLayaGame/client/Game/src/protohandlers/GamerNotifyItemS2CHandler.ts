import GamerNotifyItemS2C = proto.GamerNotifyItemS2C;
import Game from "../Game";
var GamerNotifyItemS2CHandler = function(msg: GamerNotifyItemS2C)
{
    if(!msg.error) {
        Game.moduleModel.bag.updateProtoItem(msg.item);
    }
}            
export {GamerNotifyItemS2CHandler}
