import GetDailyQuestRewardS2C = proto.GetDailyQuestRewardS2C;
import Game from "../Game";
var GetDailyQuestRewardS2CHandler = function(msg: GetDailyQuestRewardS2C)
{
    if (msg.error) {
        return;
    }

    let model = Game.moduleModel.quest;
    model.SetDailyActive(msg.active);
    // GJC 提审服服务器暂未修改 暂时不屏蔽
    // Game.system.SystemItemShow(msg.itemList);
}            
export {GetDailyQuestRewardS2CHandler}
