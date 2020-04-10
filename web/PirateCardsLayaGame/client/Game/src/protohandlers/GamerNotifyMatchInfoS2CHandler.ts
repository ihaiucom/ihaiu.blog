import GamerNotifyMatchInfoS2C = proto.GamerNotifyMatchInfoS2C;
import Game from "../Game";
import { War } from "../GameWar/Logic/War";
import { EnumBattleState } from "../GameWar/Logic/Enum/EnumBattleState";
import {MenuId} from "../GameModule/MenuId";
// import CGameTable from "../../../JJSG/testPK/CGameTable";
// import JJSGRuntime from "../../../JJSG/JJSGRuntime";
import GameEventKey from '../GameEventKey';
import WarTigggerHandlers from '../GameWar/Logic/WarTigggerHandlers';
var GamerNotifyMatchInfoS2CHandler = function(msg: GamerNotifyMatchInfoS2C)
{
    if (msg.error) {
        console.log("未匹配队友，重新匹配：" + msg.error)
    } else {
        console.log("已匹配成功，取消计时：")
        console.log(msg.matchInfo)

        if(War.battleState != EnumBattleState.NoneOrExit && Game.moduleModel.match.matchInfo && Game.moduleModel.match.matchInfo.session == msg.matchInfo.session)
        {
            console.log("该场战斗已经开始了， 不用在调启动战斗。");
            War.onReLogin();
        }
        else
        {
            Game.moduleModel.match.isGameLauncherEnterWar = true;
            Game.moduleModel.match.matchInfo = <proto.MatchInfo> msg.matchInfo;
            Game.event.dispatch("MATCH_END");
            Game.moduleModel.room.MyRoom = null;
            if(!msg.reconn && msg.matchInfo && msg.matchInfo.checkPointId)
            {
                let config = Game.config.checkPoint.getConfig(msg.matchInfo.checkPointId);
                if(config.type == proto.CheckPointType.SecretLand)
                {
                    Game.menu.open(MenuId.SecretLandReady);
                }
            }
            if(msg.reconn)
            {
                if(msg.matchInfo.pvpType == proto.PVPType.PVP_M1V1)
                {
                    Game.menu.openTab(MenuId.BattleMatch, 0, 1);
                }
            }
            Game.moduleModel.match.launchWar();
        }
    }
}

export {GamerNotifyMatchInfoS2CHandler}
