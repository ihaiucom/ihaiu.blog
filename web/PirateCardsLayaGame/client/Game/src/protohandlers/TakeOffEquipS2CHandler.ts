import TakeOffEquipS2C = proto.TakeOffEquipS2C;
import Game from "../Game";
var TakeOffEquipS2CHandler = function(msg: TakeOffEquipS2C)
{
    if(msg.error == 0)
    {
        Game.moduleModel.equip.OnHeroChangeEquip(msg.equip)
        Game.moduleModel.hero.OnChangeEquip(msg);
    }

}            
export {TakeOffEquipS2CHandler}
