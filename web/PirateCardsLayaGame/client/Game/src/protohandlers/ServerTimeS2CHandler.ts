import ServerTimeS2C = proto.ServerTimeS2C;
import Game from "../Game";
import TimeHelper from "../GameHelpers/TimeHelper";
var ServerTimeS2CHandler = function(msg: ServerTimeS2C)
{
    if (msg.error) 
        return;

        Game.time.settingServerTime(msg.time.timestamp, msg.time.timezone);
        
        // console.log("时差",Game.time.localSubServerTimeZone, TimeHelper.TimeFormatHHMMSS(Game.time.localSubServerTimeZone));
        // console.log("服务器时间",TimeHelper.GetYMDHMS(Game.time.serverSeconds));
        // console.log("本地时间",TimeHelper.GetYMDHMS(Game.time.localTimeS));
}            
export {ServerTimeS2CHandler}
