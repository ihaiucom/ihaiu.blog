/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BattleFaildComponentStruct from "../../Generates/BattleResult/BattleFaildComponentStruct";
import Game from "../../../Game";

export default class BattleFaildComponent extends BattleFaildComponentStruct
{
    // 窗口显示
    onWindowShow(): void
    {
        this.m_moduleHero.onClick(this, this.openMenu, [this.m_moduleHero.m_menuId.selectedPage]);
        this.m_moduleEquip.onClick(this, this.openMenu, [this.m_moduleEquip.m_menuId.selectedPage]);
        this.m_moduleDraug.onClick(this, this.openMenu, [this.m_moduleDraug.m_menuId.selectedPage]);
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        this.m_moduleHero.offClick(this, this.openMenu);
        this.m_moduleEquip.offClick(this, this.openMenu);
        this.m_moduleDraug.offClick(this, this.openMenu);
   }

    private openMenu(arg: string)
    {
        let menuId = Number(arg);
        if(Game.moduleModel.home.IsOpen(menuId))
            Game.menu.open(menuId);
        else
        {
            let menuConfig = Game.config.menu.getConfig(menuId);
            if(menuConfig)
                Game.system.toastText(menuConfig.lockText);
        }
    }
}