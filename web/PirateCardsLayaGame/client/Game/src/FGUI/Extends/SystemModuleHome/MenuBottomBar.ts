/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuBottomBarStruct from "../../Generates/SystemModuleHome/MenuBottomBarStruct";
import Game from "../../../Game";
import { MenuId } from "../../../GameModule/MenuId";
import { War } from "../../../GameWar/Logic/War";
import { LauncherParameter } from "../../../GameWar/Logic/Struct/LauncherParameter";
import MenuValidateRed from "../../../GameModule/MenuValidateRed";
import WindowRed from "../CommonGame/WindowRed";
import GameEventKey from "../../../GameEventKey";
import MenuConfig from "../../../Config/ConfigExtends/MenuConfig";
import MenuBottomButton from "./MenuBottomButton";
import { MenuBarType } from "../../../GameFrame/Menu/MenuBarType";

export default class MenuBottomBar extends MenuBottomBarStruct
{
    private configList:MenuConfig[] = [];

    /** 窗口初始化完毕 */
    onWindowInited(): void
    {
        
    }

    /** 窗口显示 */
    onWindowShow(): void
    {
        this.m_listMenu.setItemRenderer(this.ShowMenu, this);
        this.m_listMenu.on(fgui.Events.CLICK_ITEM, this, this.OpenMenu);
        this.m_btnStart.onClick(this, this.OpenStart);

        Game.net.gamerNotifyItemChangeS2C.on(this.RefreshRed, this);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_listMenu.itemRenderer.clear();
        this.m_listMenu.off(fgui.Events.CLICK_ITEM, this, this.OpenMenu);
        this.m_btnStart.offClick(this, this.OpenStart);

        Game.net.gamerNotifyItemChangeS2C.off(this.RefreshRed, this);
    }

    /*private----------------------UI事件操作---------------------------*/
    /** 渲染菜单 */
    private ShowMenu(index: number, item: MenuBottomButton)
    {
        item.UpdateIcon(this.configList[index]);
    }
    
    /** 打开菜单 */
    private OpenMenu(item: MenuBottomButton)
    {
        // let config = Game.config.menu.getConfig(Number(item.title));
        switch(Number(item.DataSource.menuId))
        {
            case MenuId.Hero:
                Game.event.dispatch(GameEventKey.GameFrame_HomeHeroBtnOnClick);
                break;
            case MenuId.Equip:
                Game.event.dispatch(GameEventKey.GameFrame_HomeEquipBtnOnClick);
                break;
        }

        // config.openMenu();
        item.OpenMenu();
        // Game.system.toastText("暂未开放！");
    }

    /** 征战 */
    private OpenStart()
    {
        // Game.menu.open(Number(this.m_btnStart.title));
        // War.launchLocalSignal(MenuId.Home);
        let config = Game.config.menu.getConfig(Number(this.m_btnStart.title));
        config.openMenu();
        // 新手引导使用
        Game.event.dispatch(GameEventKey.GameFrame_BattleEnterOnClick);
    }

    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset()
    {
        this.configList = [];
    }

    /** 刷新红点 */
    private RefreshRed()
    {
        let list = this.m_listMenu;
        for (let i = 0, len = list.numChildren; i < len; i++) 
        {
            let menu = <MenuBottomButton>list.getChildAt(i);
            MenuValidateRed.getInstance().openMenu(menu.DataSource.id, menu);
        }

        let start = this.m_btnStart;
        MenuValidateRed.getInstance().openMenu(Number(start.title), start);
    }

    /** 刷新按钮 */
    private UpdateMenu()
    {
        let configlist = Game.config.menu.getBarMenus(MenuBarType.Bottom);
        this.configList = configlist;
        this.m_listMenu.numItems = configlist.length;
    }

    /*public----------------------外部接口---------------------------*/
    /** 打开界面 */
    public Open()
    {
        this.UpdateMenu();
        this.RefreshRed();
    }

    /**
     * 用于guideList的使用
     */
    public GuideOpenMenuHelper(item: any)
    {
        this.OpenMenu(item);
    }
}