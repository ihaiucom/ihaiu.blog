import GamerNotifyRewardS2C = proto.GamerNotifyRewardS2C;
import Game from "../Game";
var GamerNotifyRewardS2CHandler = function(msg: GamerNotifyRewardS2C)
{
    if (msg.error) {
        return;
    }

    Game.system.SystemItemShow(msg.rewardList);
}            
export {GamerNotifyRewardS2CHandler}
