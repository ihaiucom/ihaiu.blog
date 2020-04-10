import DecomposeDraugS2C = proto.DecomposeDraugS2C;
import Game from "../Game";
var DecomposeDraugS2CHandler = function(msg: DecomposeDraugS2C)
{
    if (msg.error) 
        return;
    
    // 战魂分解结果
    let model = Game.moduleModel.draug;
    model.RemoveDraugByIdList(msg.draugIdList);

}            
export {DecomposeDraugS2CHandler}
