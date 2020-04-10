import GetQuestsS2C = proto.GetQuestsS2C;
import Game from "../Game";
var GetQuestsS2CHandler = function(msg: GetQuestsS2C)
{
    if (msg.error) {
        return;
    }

    // 获取任务返回
    let model = Game.moduleModel.quest;
    model.SetQuestDict(msg.questList);
    model.SetDailyActive(msg.active);
}            
export {GetQuestsS2CHandler}
