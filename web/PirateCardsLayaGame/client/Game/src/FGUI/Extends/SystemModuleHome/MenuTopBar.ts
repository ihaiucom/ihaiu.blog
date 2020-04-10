/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuTopBarStruct from "../../Generates/SystemModuleHome/MenuTopBarStruct";
import Game from '../../../Game';
import MenuValidateRed from "../../../GameModule/MenuValidateRed";
import TEXT from "../../../Config/Keys/TEXT";
import MenuTopButton from "./MenuTopButton";
import MenuConfig from "../../../Config/ConfigExtends/MenuConfig";
import { MenuBarType } from "../../../GameFrame/Menu/MenuBarType";
import { MenuId } from "../../../GameModule/MenuId";

export default class MenuTopBar extends MenuTopBarStruct
{
    private configList:MenuConfig[] = [];

    /** 窗口初始化完毕 */
    onWindowInited(): void
    {
        window['MenuTopBar'] = this;
    }

    /** 窗口显示 */
    onWindowShow(): void
    {
        this.m_listMenu.setItemRenderer(this.ShowMenu, this);
        this.m_listMenu.on(fgui.Events.CLICK_ITEM, this, this.OpenMenu);
        this.m_btnPlayer.onClick(this, this.OpenPlayer);
        Game.net.gamerNotifyExpChangeS2C.on(this.ExpChangeHandler, this);
        Game.net.gamerNotifyExpLevelS2C.on(this.LevelChangeHandler, this);
        Game.net.gamerNewHeroS2C.on(this.RefreshRed, this);
        Game.event.add("OPEN_MENU", this.UpdateMenu, this);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_listMenu.itemRenderer.clear();
        this.m_listMenu.off(fgui.Events.CLICK_ITEM, this, this.OpenMenu);
        this.m_btnPlayer.offClick(this, this.OpenPlayer);
        Game.net.gamerNotifyExpChangeS2C.off(this.ExpChangeHandler, this);
        Game.net.gamerNotifyExpLevelS2C.off(this.LevelChangeHandler, this);
        Game.net.gamerNewHeroS2C.off(this.RefreshRed, this);
        Game.event.remove("OPEN_MENU", this.UpdateMenu, this);

        this.Reset();
    }

    /*private----------------------UI事件操作---------------------------*/
    /** 显示菜单 */
    private ShowMenu(index: number, item: MenuTopButton)
    {
        item.UpdateIcon(this.configList[index]);
    }

    /** 打开菜单 */
    private OpenMenu(item: MenuTopButton)
    {
        item.OpenMenu();
        // Game.system.toastText("暂未开放！");
    }

    /** 玩家 */
    private OpenPlayer()
    {
        let config = Game.config.menu.getConfig(Number(this.m_btnPlayer.title));
        config.openMenu();
        // Game.system.toastText("暂未开放！");
    }

    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset()
    {
        this.configList = [];
        this.m_listMenu.numItems = 0;
        this.m_listMenu.itemPool.clear();
    }

    /** 刷新红点 */
    private RefreshRed()
    {
        let list = this.m_listMenu;
        for (let i = 0, len = list.numChildren; i < len; i++) 
        {
            let menu = <GButton>list.getChildAt(i);
            MenuValidateRed.getInstance().openMenu(Number(menu.title), menu);
        }

        let player = this.m_btnPlayer;
        MenuValidateRed.getInstance().openMenu(Number(player.title), player);
    }

    private ExpChangeHandler()
    {
        this.m_exp.value = 0;
        this.m_exp.max = Game.user.maxExp;
        this.m_exp.value = Game.user.exp;
    }

    private LevelChangeHandler()
    {
        this.m_exp.value = 0;
        this.m_exp.max = Game.user.maxExp;
        this.m_exp.value = Game.user.exp;
        this.m_labLevel.text = TEXT.Lv.format(Game.user.level);
    }

    private UpdateView()
    {
        this.m_btnPlayer.icon = Game.user.headIconUrl;
        this.m_labName.text = Game.user.name;
        this.m_labLevel.text = TEXT.Lv.format(Game.user.level);

        this.m_exp.value = 0;
        this.m_exp.max = Game.user.maxExp;
        this.m_exp.value = Game.user.exp;
    }

    private UpdateMenu()
    {
        let configlist = Game.config.menu.getShowBarMenus(MenuBarType.Top);
        this.configList = configlist;
        this.m_listMenu.numItems = configlist.length;
    }

    /*public----------------------外部接口---------------------------*/
    /** 打开界面 */
    public Open()
    {
        this.RefreshRed();
        this.UpdateView();
        this.UpdateMenu();
    }
}