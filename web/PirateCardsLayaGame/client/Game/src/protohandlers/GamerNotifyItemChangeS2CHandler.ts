import GamerNotifyItemChangeS2C = proto.GamerNotifyItemChangeS2C;
import Game from "../Game";
var GamerNotifyItemChangeS2CHandler = function(msg: GamerNotifyItemChangeS2C)
{
    if(0 == msg.error) {
        Game.moduleModel.bag.updateProtoItemList(msg.itemsChange);
        Game.moduleModel.equip.updateEquipList(msg.itemsChange);
    }
}            
export {GamerNotifyItemChangeS2CHandler}
