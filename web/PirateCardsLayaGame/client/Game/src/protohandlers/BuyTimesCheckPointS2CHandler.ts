import Game from '../Game';
import BuyTimesCheckPointS2C = proto.BuyTimesCheckPointS2C;
var BuyTimesCheckPointS2CHandler = function(msg: BuyTimesCheckPointS2C)
{
    if(!msg.error)
    {
        Game.moduleModel.section.sectionData.updateSectionData(msg.checkPointData);
    }
}            
export {BuyTimesCheckPointS2CHandler}
