import MakeTeamS2C = proto.MakeTeamS2C;
import Game from "../Game";
var MakeTeamS2CHandler = function(msg: MakeTeamS2C)
{
    if (msg.error) {
        return;
    }

    // 创建房间返回
    let model = Game.moduleModel.team;
    model.SetTeam(msg.team);
}            
export {MakeTeamS2CHandler}
