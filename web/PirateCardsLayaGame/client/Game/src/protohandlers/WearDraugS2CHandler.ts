import WearDraugS2C = proto.WearDraugS2C;
import Game from "../Game";
var WearDraugS2CHandler = function(msg: WearDraugS2C)
{
    // 战魂装配结果
    let draugmodel = Game.moduleModel.draug;
    // let heromodel  = Game.moduleModel.hero;

    if(msg.unwearDraug)
    {
        let unweardraug = draugmodel.SetDraug(msg.unwearDraug);
        // heromodel.RemoveDraug(msg.heroId , unweardraug);
    }

    let weardraug = draugmodel.RemoveDraugById(msg.draugId);
    // heromodel.AddDraug(msg.heroId , weardraug);
}            
export {WearDraugS2CHandler}
