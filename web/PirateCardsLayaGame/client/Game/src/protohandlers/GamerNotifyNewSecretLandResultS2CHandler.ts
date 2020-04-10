import GamerNotifyNewSecretLandResultS2C = proto.GamerNotifyNewSecretLandResultS2C;
import {War} from "../GameWar/Logic/War";
import {EnumBattleState} from "../GameWar/Logic/Enum/EnumBattleState";
import Game from "../Game";
import {MenuId} from "../GameModule/MenuId";
var GamerNotifyNewSecretLandResultS2CHandler = function(msg: GamerNotifyNewSecretLandResultS2C)
{
    if(msg.error)
        return
    if(War.battleState > EnumBattleState.NoneOrExit)
        War.onOver();
    
    Game.menu.open(MenuId.BattleResultWindow,msg,proto.CheckPointType.SecretLand);
    
}            
export {GamerNotifyNewSecretLandResultS2CHandler}
