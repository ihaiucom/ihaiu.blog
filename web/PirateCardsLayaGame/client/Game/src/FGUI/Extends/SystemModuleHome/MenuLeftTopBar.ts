/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuLeftTopBarStruct from "../../Generates/SystemModuleHome/MenuLeftTopBarStruct";
import Game from "../../../Game";
import MenuValidateRed from "../../../GameModule/MenuValidateRed";
import MenuConfig from "../../../Config/ConfigExtends/MenuConfig";
import MenuLeftTopButton from "./MenuLeftTopButton";
import { MenuBarType } from "../../../GameFrame/Menu/MenuBarType";

export default class MenuLeftTopBar extends MenuLeftTopBarStruct
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
        Game.event.add("OPEN_MENU", this.UpdateMenu, this);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_listMenu.itemRenderer.clear();
        this.m_listMenu.off(fgui.Events.CLICK_ITEM, this, this.OpenMenu);
        Game.event.remove("OPEN_MENU", this.UpdateMenu, this);
        this.Reset();
    }

    /*private----------------------UI事件操作---------------------------*/
    /** 显示菜单 */
    private ShowMenu(index: number, item: MenuLeftTopButton)
    {
        item.UpdateIcon(this.configList[index]);
    }
    
    /** 打开菜单 */
    private OpenMenu(item: MenuLeftTopButton)
    {
        item.OpenMenu();
        // Game.system.toastText("暂未开放！");
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
            let menu = <GButton>list.getChildAt(i);
            MenuValidateRed.getInstance().openMenu(Number(menu.title), menu);
        }
    }

    /** 刷新按钮 */
    private UpdateMenu()
    {
        let configlist = Game.config.menu.getShowBarMenus(MenuBarType.Left_Top);
        this.configList = configlist;
        this.m_listMenu.numItems = configlist.length;
    }

    /*public----------------------外部接口---------------------------*/
    /** 打开界面 */
    public Open()
    {
        this.RefreshRed();
        this.UpdateMenu();
    }
}