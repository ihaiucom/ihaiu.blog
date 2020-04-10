import AwakenDraugS2C = proto.AwakenDraugS2C;
import Game from "../Game";
var AwakenDraugS2CHandler = function(msg: AwakenDraugS2C)
{
    // 战魂觉醒结果
    let model = Game.moduleModel.draug;
    model.SetAwakenLevel(msg.awakenLevel);
    model.SetAwakenList(msg.draugList);
}            
export {AwakenDraugS2CHandler}
