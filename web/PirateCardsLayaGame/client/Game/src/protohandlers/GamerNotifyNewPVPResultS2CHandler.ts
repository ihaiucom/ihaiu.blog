import GamerNotifyNewPVPResultS2C = proto.GamerNotifyNewPVPResultS2C;
import Game from "../Game";
import { MenuId } from "../GameModule/MenuId";
import { War } from "../GameWar/Logic/War";
import { EnumBattleState } from "../GameWar/Logic/Enum/EnumBattleState";
import HomeWindow from "../GameModule/ViewWindows/HomeWindow";
import GameEventKey from "../GameEventKey";
import { EnumGuideTriggerType } from "../GameModule/GuideModule/GuideEnum";
// import JJSGRuntime from "../../../JJSG/JJSGRuntime";
// import { GOW } from "../../../JJSG/gameLibs/gow/core/GOW";
// import CGameTable from "../../../JJSG/testPK/CGameTable";
var GamerNotifyNewPVPResultS2CHandler = function(msg: GamerNotifyNewPVPResultS2C)
{
    if (msg.error)
        return
    
    //TODO: 大秘境模式不应发这个通知
    if(msg.checkPointId) 
    {
        let data = Game.config.checkPoint.getConfig(msg.checkPointId);
        if(data.type == proto.CheckPointType.SecretLand)
            return;
    }
    // console.log("游戏结束！！！！！！！", msg.result.kills)
    // let pos = Game.moduleModel.match.selfPos;
    // let cResult = msg.result.kills[pos];
    // JJSGRuntime.showTestPage(cResult);

    // GOW.GetTicker().Stop();
    War.onOver();

    // if(Game.user.isShowLevelUp)
    // {
    //     Game.event.add(GameEventKey.GameFrame_Player_Levelup, ()=>{
    //         Game.menu.open(MenuId.BattleResultWindow,msg);
    //     },null);
    // }
    // 显示结算面板
    if(War.battleState != EnumBattleState.NoneOrExit)
    {
        Game.menu.open(MenuId.BattleResultWindow,msg);
    }
    if(msg.baseRewardList.length > 0 || msg.result == proto.BattleResultType.NarrowlyWin || msg.result == proto.BattleResultType.TotalWin)
    {
        Game.event.dispatch(GameEventKey.GameFrame_SectionFinishSuccess);
    }


    // 判断开启新功能
    if(msg.checkPointId &&  msg.firstRewardList.length > 0)
    {
        let data = Game.moduleModel.section.getMissionDataById(msg.checkPointId);
        if(data)
        {
            let home = Game.moduleModel.home;
            let menu = home.SetOpenMenuByLvOrPoint(msg.checkPointId);
            if (menu) 
            {
                // 通知服务器开启功能
                Game.sender.home.SysOpen(menu);
                HomeWindow.Show_Menu = menu;
                Game.system.guideMgr.CheckGuideList(EnumGuideTriggerType.SYSTEM_OPEN, menu);
                
            }
        }
    }
}            
export {GamerNotifyNewPVPResultS2CHandler}
