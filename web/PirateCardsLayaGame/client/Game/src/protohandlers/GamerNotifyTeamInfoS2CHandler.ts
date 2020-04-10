import GamerNotifyTeamInfoS2C = proto.GamerNotifyTeamInfoS2C;
import InviteType = proto.InviteType;
import Game from "../Game";
import { MenuId } from "../GameModule/MenuId";
var GamerNotifyTeamInfoS2CHandler = function(msg: GamerNotifyTeamInfoS2C)
{
    if (msg.error) {
        return;
    }

    let model = Game.moduleModel.team;
    switch (msg.type) {
        case InviteType.Friend:   // 好友邀请
            Game.system.TeamInviteShow(msg.teamId, msg.value);
            break;
        case InviteType.Reject:   // 拒绝邀请
            Game.system.toastText(`玩家${msg.value}已拒绝邀请！`);
            model.SetInviter(msg.value, InviteType.Reject, msg.timeStamp);
            break;
        case InviteType.Wait:     // 等待邀请
            Game.system.toastText(`玩家${msg.value}忙，请稍后！`);
            break;
        case InviteType.Kick:     // 被踢出
            Game.system.toastText("您已被踢出队伍！");
            model.ClearTeam();
            break;
        case InviteType.Military: // 军团邀请
            model.ClearTeam();
            break;
    
        default:
            break;
    }
}            
export {GamerNotifyTeamInfoS2CHandler}
