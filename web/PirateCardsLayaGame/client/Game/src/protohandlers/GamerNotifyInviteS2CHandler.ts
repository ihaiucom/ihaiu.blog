import GamerNotifyInviteS2C = proto.GamerNotifyInviteS2C;
import Game from "../Game";
import { MenuId } from "../GameModule/MenuId";
var GamerNotifyInviteS2CHandler = function(msg: GamerNotifyInviteS2C)
{
    // switch (msg.status) 
    // {
    //     case 1:
    //     case 4:
    //         Game.system.confirmText("是否接受邀请？", "邀请函：", this, 
    //         ()=>{
    //             let hero = Game.moduleModel.hero.GetRandomData();
    //             if (!hero) {
    //                 Game.system.toastText("请获取英雄！");
    //                 return;
    //             }
    //             Game.sender.team.TeamJoin(msg.tid, hero);
    //         },
    //         ()=>{
    //             // Game.sender.team.TeamReject(msg.tid, Game.user.id);
    //         }, 
    //         "接受", "拒绝", false);
    //         break;
    //     case 2:
    //         Game.system.toastText("对方已拒绝邀请！");
    //         break;
    //     case 3:
    //         Game.menu.close(MenuId.Team);
    //         Game.moduleModel.team.ClearTeam();
    //         Game.system.toastText("您已被踢出队伍！");
    //         break;
    // }
}            
export {GamerNotifyInviteS2CHandler}
