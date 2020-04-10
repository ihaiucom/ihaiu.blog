import GamerSettlePVES2C = proto.GamerSettlePVES2C;
import Game from "../Game";
import HomeWindow from "../GameModule/ViewWindows/HomeWindow";
import { EnumGuideTriggerType } from "../GameModule/GuideModule/GuideEnum";
import { War } from "../GameWar/Logic/War";
import GameEventKey from "../GameEventKey";
import { EnumBattleState } from "../GameWar/Logic/Enum/EnumBattleState";
import { MenuId } from "../GameModule/MenuId";
import { EnumOverType } from "../GameWar/Logic/Enum/EnumOverType";
var GamerSettlePVES2CHandler = function(msg: GamerSettlePVES2C)
{
    if(msg.error)
    {
        return;
    }

    War.onOver();
    // TODO 暂时这样写，等合并代码后再修改
    if(War.battleState != EnumBattleState.NoneOrExit)
    {
        let params = new proto.GamerNotifyNewPVPResultS2C();
        params.battleStar = msg.battleType;
        params.battleType = proto.PVPType.PVE_M1;
        params.checkPointId = msg.checkPointId;
        params.baseRewardList = msg.baseReward.ItemList;
        params.ItemRewardList = msg.itemReward.ItemList;
        params.firstRewardList = msg.firstReward.ItemList;
        params.costTime = 0;
        Game.menu.open(MenuId.BattleResultWindow, params);
    }
    
    // 该协议发过来表示战斗必然胜利
    if(msg.baseReward.ItemList.length > 0 )
    {
        Game.event.dispatch(GameEventKey.GameFrame_SectionFinishSuccess);
    }
    // 判断开启新功能
    if(msg.checkPointId &&  msg.firstReward.ItemList.length > 0)
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
export {GamerSettlePVES2CHandler}
