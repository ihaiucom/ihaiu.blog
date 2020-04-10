import GamerNotifyQuestsS2C = proto.GamerNotifyQuestsS2C;
import Game from "../Game";
var GamerNotifyQuestsS2CHandler = function(msg: GamerNotifyQuestsS2C)
{
    if (msg.error) {
        return;
    }

    // 获取任务返回
    let model = Game.moduleModel.quest;
    model.SetQuestDict(msg.questList);
    model.SetDailyActive(msg.active);
}            
export {GamerNotifyQuestsS2CHandler}
