import UpStarEquipS2C = proto.UpStarEquipS2C;
import Game from "../Game";
var UpStarEquipS2CHandler = function(msg: UpStarEquipS2C)
{
    if(msg.error == 0)
    {
        Game.moduleModel.equip.OnStarUp(msg.equip)
    }
}            
export {UpStarEquipS2CHandler}
