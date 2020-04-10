import Game from '../Game';
import GamerNotifyCheckPointListS2C = proto.GamerNotifyCheckPointListS2C;
var GamerNotifyCheckPointListS2CHandler = function(msg: GamerNotifyCheckPointListS2C)
{
    if(!msg.error)
    {
        Game.moduleModel.section.updateSectionData(msg);
    }
}            
export {GamerNotifyCheckPointListS2CHandler}
