import GamerNotifyFatigueS2C = proto.GamerNotifyFatigueS2C;
import Game from "../Game";
import ItemData from "../GameModule/DataStructs/ItemData";
var GamerNotifyFatigueS2CHandler = function(msg: GamerNotifyFatigueS2C)
{
    Game.moduleModel.power.SetFatigueInfo(msg.fatigueInfo);
    // TODO gjc 暂时写死为id9 后续根据ItemType修改
    let item = ItemData.Create(9, msg.fatigueInfo.fatigueNum);
    // Game.system.SystemItemShow([item]);
}            
export {GamerNotifyFatigueS2CHandler}
