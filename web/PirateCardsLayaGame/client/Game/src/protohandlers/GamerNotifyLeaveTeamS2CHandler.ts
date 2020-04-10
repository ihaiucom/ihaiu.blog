import GamerNotifyLeaveTeamS2C = proto.GamerNotifyLeaveTeamS2C;
import Game from "../Game";
var GamerNotifyLeaveTeamS2CHandler = function(msg: GamerNotifyLeaveTeamS2C)
{
    if (msg.error) {
        return;
    }

    let model = Game.moduleModel.team;
    model.SetLeader(msg.newOwnerId);
    model.LeaveMember(msg.memberId);
}            
export {GamerNotifyLeaveTeamS2CHandler}
