import TakeOnEquipS2C = proto.TakeOnEquipS2C;
import Game from "../Game";
var TakeOnEquipS2CHandler = function(msg: TakeOnEquipS2C)
{
    if(msg.error == 0)
    {
        Game.moduleModel.equip.OnHeroChangeEquip(msg.equip)
        Game.moduleModel.hero.OnChangeEquip(msg);
    }
}            
export {TakeOnEquipS2CHandler}
