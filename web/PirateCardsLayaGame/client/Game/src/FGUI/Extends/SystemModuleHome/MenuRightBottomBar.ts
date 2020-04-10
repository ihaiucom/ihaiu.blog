/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuRightBottomBarStruct from "../../Generates/SystemModuleHome/MenuRightBottomBarStruct";
import Game from "../../../Game";
import RoomData from "../../../GameModule/DataStructs/RoomData";
import { MenuId } from "../../../GameModule/MenuId";
import { WarSetting } from "../../../GameWar/Logic/WarSetting";

export default class MenuRightBottomBar extends MenuRightBottomBarStruct
{
    /** 窗口初始化完毕 */
    onWindowInited(): void
    {
        // 公开赛
        let random = Game.config.unlock.getConfig(Number(this.m_btnRandom.title));
        this.m_btnRandom.visible = (random.showType != 2);

        // 对决
        let duel   = Game.config.unlock.getConfig(Number(this.m_btnRandom.title));
        this.m_btnDuel.visible   = (duel.showType != 2);

        // 战役
        let battle = Game.config.unlock.getConfig(Number(this.m_btnBattle.title));
        this.m_btnBattle.visible = (battle.showType != 2);
    }

    /** 窗口显示 */
    onWindowShow(): void
    {
        this.m_btnRandom.onClick(this, this.OpenRandom);
        this.m_btnDuel.onClick(this, this.OpenDuel);
        this.m_btnBattle.onClick(this, this.OpenBattle);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_btnRandom.offClick(this, this.OpenRandom);
        this.m_btnDuel.offClick(this, this.OpenDuel);
        this.m_btnBattle.offClick(this, this.OpenBattle);
    }

    private OpenRandom()
    {
        // Game.menu.open(Number(this.m_btnRandom.title));
        Game.system.toastText("暂未开放！");
    }

    private OpenDuel()
    {
        let config = Game.config.menu.getConfig(Number(this.m_btnDuel.title));
        config.openMenu();
    }

    private OpenBattle()
    {
        let config = Game.config.menu.getConfig(Number(this.m_btnBattle.title));
        config.openMenu();
    }
}