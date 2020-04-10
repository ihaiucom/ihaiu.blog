import GamerMatchS2C = proto.GamerMatchS2C;
import Game from "../Game";
var GamerMatchS2CHandler = function(msg: GamerMatchS2C)
{
    if (msg.error) {
        console.log("匹配失败，重新匹配：" + msg.error)
    } else {
        console.log("匹配开始，开始计时：")
        Game.event.dispatch("MATCH_START");
    }
}            
export {GamerMatchS2CHandler}
