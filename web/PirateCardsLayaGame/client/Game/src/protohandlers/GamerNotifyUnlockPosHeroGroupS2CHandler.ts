import GamerNotifyUnlockPosHeroGroupS2C = proto.GamerNotifyUnlockPosHeroGroupS2C;
import GameLog, { EnumLogLevel } from "../GameLog";
import Game from "../Game";
var GamerNotifyUnlockPosHeroGroupS2CHandler = function(msg: GamerNotifyUnlockPosHeroGroupS2C)
{
    if(msg.error != 0)
    {
        GameLog.Log(EnumLogLevel.Error, "GamerNotifyUnlockPosHeroGroupS2CHandler出错，error号:" + msg.error.toString());
        return;
    }
    let list = msg.heroGroupList;
    if(!list)
    {
        GameLog.Log(EnumLogLevel.Error, "GamerNotifyUnlockPosHeroGroupS2CHandler出错， msg.heroGroupList为空");
    }
    let model = Game.moduleModel.battlePlan;
    model.UnlockHeroList(list);
    
}            
export {GamerNotifyUnlockPosHeroGroupS2CHandler}
