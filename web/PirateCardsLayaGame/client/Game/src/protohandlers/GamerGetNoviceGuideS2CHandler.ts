import GamerGetNoviceGuideS2C = proto.GamerGetNoviceGuideS2C;
import Game from "../Game";
import GameLog, { EnumLogLevel } from "../GameLog";
var GamerGetNoviceGuideS2CHandler = function(msg: GamerGetNoviceGuideS2C)
{
    let guide = Game.moduleModel.guide;
    if(msg.error)
    {
        GameLog.Log(EnumLogLevel.Error, msg.error.toString());
        return;
    }
    guide.InitData(msg.noviceGuideList);
}            
export {GamerGetNoviceGuideS2CHandler}
