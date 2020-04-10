import GetQuestRewardS2C = proto.GetQuestRewardS2C;
import Game from "../Game";
import ItemData from "../GameModule/DataStructs/ItemData";
var GetQuestRewardS2CHandler = function(msg: GetQuestRewardS2C)
{
    if (msg.error) {
        return;
    }

    // GJC 提审服服务器暂未修改 暂时不屏蔽
    // Game.system.SystemItemShow(msg.itemList);
}            
export {GetQuestRewardS2CHandler}
