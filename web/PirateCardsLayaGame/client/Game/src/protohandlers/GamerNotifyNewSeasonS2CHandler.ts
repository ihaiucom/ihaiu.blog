import Game from '../Game';
import GamerNotifyNewSeasonS2C = proto.GamerNotifyNewSeasonS2C;
import { MenuId } from '../GameModule/MenuId';
var GamerNotifyNewSeasonS2CHandler = function(msg: GamerNotifyNewSeasonS2C)
{
    if(!msg.error)
    {
        setTimeout(() => {
            Game.menu.open(MenuId.NewSeasonWindow,msg.newSeasonId);
        }, 500);
    }
}            
export {GamerNotifyNewSeasonS2CHandler}
