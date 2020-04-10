import GamerCancelMatchS2C = proto.GamerCancelMatchS2C;
import Game from "../Game";
var GamerCancelMatchS2CHandler = function(msg: GamerCancelMatchS2C)
{
    if (msg.error) {
        console.log("取消匹配失败：" + msg.error)
    } else {
        console.log("取消匹配成功：")
        Game.event.dispatch("MATCH_CANCEL");
    }
}            
export {GamerCancelMatchS2CHandler}
