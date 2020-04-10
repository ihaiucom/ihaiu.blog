import UnwearDraugS2C = proto.UnwearDraugS2C;
import Game from "../Game";
var UnwearDraugS2CHandler = function(msg: UnwearDraugS2C)
{
    // 战魂卸载结果
    let draugmodel = Game.moduleModel.draug;
    // let heromodel  = Game.moduleModel.hero;

    let unweardraug = draugmodel.SetDraug(msg.unwearDraug);
    // heromodel.RemoveDraug(msg.heroId , unweardraug);
}            
export {UnwearDraugS2CHandler}
