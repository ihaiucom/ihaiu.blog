import PutDraugIntoPackS2C = proto.PutDraugIntoPackS2C;
import Game from "../Game";
var PutDraugIntoPackS2CHandler = function(msg: PutDraugIntoPackS2C)
{
    if (msg.error) 
        return;
    
    // 战魂放入背包成功
    let model = Game.moduleModel.draug;
    model.PutDraugIntoPack(model.awakenList);
}            
export {PutDraugIntoPackS2CHandler}
