import SwallowDraugS2C = proto.SwallowDraugS2C;
import Game from "../Game";
import DraugData from "../GameModule/DataStructs/DraugData";
var SwallowDraugS2CHandler = function(msg: SwallowDraugS2C)
{
    if (msg.error) 
    return;

    // 战魂吞噬结果
    let model = Game.moduleModel.draug;

    if (msg.heroId) 
    {
        // let mode = Game.moduleModel.hero;
        // mode.AddDraug(msg.heroId, DraugData.Create(msg.draug));
    } 
    else 
    {
        model.SetDraug(msg.draug);   
    }

    model.RemoveDraugByIdList(msg.beSwallowIdList); 

}            
export {SwallowDraugS2CHandler}
 