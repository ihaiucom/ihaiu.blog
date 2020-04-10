import GamerPVPSyncS2C = proto.GamerPVPSyncS2C;
import { War } from "../GameWar/Logic/War";
import Game from "../Game";
import GameEventKey from "../GameEventKey";
import { WarLoader } from "../GameWar/View/WarLoader";
import { EnumBattleState } from "../GameWar/Logic/Enum/EnumBattleState";
var GamerPVPSyncS2CHandler = function(msg: GamerPVPSyncS2C)
{
    if(msg.error == 2300)
    {
        console.log("on error 2300 do：") 
        if(War.battleState == EnumBattleState.Loading)
        {
            Game.loader.closeAll();
            War.exit();
            return;
        }
        // War.exit(true);
        Game.event.dispatch(GameEventKey.GameBattle_onServerError2300);
    }
}            
export {GamerPVPSyncS2CHandler}
