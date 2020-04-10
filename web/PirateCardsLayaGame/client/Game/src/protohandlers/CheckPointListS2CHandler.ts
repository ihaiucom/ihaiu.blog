import Game from '../Game';
import CheckPointListS2C = proto.CheckPointListS2C;
var CheckPointListS2CHandler = function(msg: CheckPointListS2C)
{
    if(!msg.error)
        Game.moduleModel.section.setSectionData(msg);
}            
export {CheckPointListS2CHandler}
