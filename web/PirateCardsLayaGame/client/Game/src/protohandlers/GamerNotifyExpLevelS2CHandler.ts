import Game from '../Game';
import GamerNotifyExpLevelS2C = proto.GamerNotifyExpLevelS2C;
import { MenuId } from '../GameModule/MenuId';
import HomeWindow from '../GameModule/ViewWindows/HomeWindow';
import { EnumGuideTriggerType } from '../GameModule/GuideModule/GuideEnum';
import { War } from '../GameWar/Logic/War';
import { EnumBattleState } from '../GameWar/Logic/Enum/EnumBattleState';
var GamerNotifyExpLevelS2CHandler = function(msg: GamerNotifyExpLevelS2C)
{
    if(msg.error)
        return;

    

    if(msg.level > Game.user.level)
    {
        Game.user.level = msg.level;
        Game.user.exp = msg.exp;
        if(War.battleState != EnumBattleState.NoneOrExit)
        {
            Game.user.isShowLevelUp = true;
        }
        else
        {
            Game.menu.open(MenuId.PlayerLevelUpWindow);
        }
        
    }
    
    let home = Game.moduleModel.home;
    let menu = home.SetOpenMenuByLvOrPoint();
    if (menu) 
    {
        // 通知服务器开启功能
        Game.sender.home.SysOpen(menu);

        // 进入引导
        // ...接雅鹏
        Game.system.guideMgr.CheckGuideList(EnumGuideTriggerType.SYSTEM_OPEN, menu);

        if (Game.menu.getLastOpenMenuId() == MenuId.Home) 
        {
            HomeWindow.setMenuShow(menu);   
        } 
        else 
        {
            HomeWindow.Show_Menu = menu;
        }
    }
    else
    {
        Game.event.dispatch("OPEN_MENU");
    }
}            
export {GamerNotifyExpLevelS2CHandler}
