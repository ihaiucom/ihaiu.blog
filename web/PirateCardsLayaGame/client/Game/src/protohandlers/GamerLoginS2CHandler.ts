import GamerLoginS2C = proto.GamerLoginS2C;
import Game from "../Game";
// import CGameTable from "../../../JJSG/testPK/CGameTable";
// import GameServerData from "../../../JJSG/testPK/GameServerData";
// import { GOW } from "../../../JJSG/gameLibs/gow/core/GOW";
var GamerLoginS2CHandler = function(msg: GamerLoginS2C)
{
    if (msg.error) {
        // console.log("登录失败：" + msg.error)
    } else {
        Game.user.gamerMain = <any> msg.main;
        Game.user.changeNameNum = msg.changeNameNum;
        for(let key in msg.main)
        {
            Game.user[key] = msg.main[key];
        }

        console.log("登陆成功！")
        console.log(msg.main.id)
        // CGameTable.Get().MyPlayerID = msg.main.id;
        // GameServerData.LogicPlayerID= msg.main.id;
        // GOW.MY_PLAYERID = msg.main.id;
    }
}            
export {GamerLoginS2CHandler}
 