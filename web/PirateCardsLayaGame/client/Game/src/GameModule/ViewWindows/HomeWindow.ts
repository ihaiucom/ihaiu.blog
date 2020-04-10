import MWindow from "../../GameFrame/Module/MWindow";
import Game from "../../Game";
import GuiPackageNames from "../../FGUI/Generates/GuiPackageNames";
import HomeWindowUI from "../../FGUI/Extends/SystemModuleHome/HomeWindowUI";
import MenuValidateNew from "../MenuValidateNew";
import { MenuId } from "../MenuId";
import GameEventKey from "../../GameEventKey";
import { GuideMgr } from "../GuideModule/GuideMgr";

//======================
// 游戏主界面
//----------------------
export default class HomeWindow extends MWindow
{
    static Show_Menu:number;

    windowUI: HomeWindowUI;

    /** 添加依赖资源 */
    constructor()
    {
        super();

        this.addAssetForFguiComponent(HomeWindowUI);
        this.addAssetForFguiPackagename(GuiPackageNames.SystemModuleDialog);
        this.addAssetForFguiPackagename(GuiPackageNames.CommonGame);
        this.addAssetForFguiPackagename(GuiPackageNames.CommonBase);
        this.addAssetForFguiPackagename(GuiPackageNames.SystemModuleGuide);
    }
    
    /** 菜单创建 */
    protected onMenuCreate(): void
    {
        let windowUI = HomeWindowUI.createInstance();
        this.windowUI = windowUI;
        this.contentPane = windowUI;


        
        super.onMenuCreate();

    }

    /** 设置主界面显示 */
    setHomeShow()
    {
        if (this.contentPane && !this.contentPane.visible)
        {
            this.contentPane.visible = true;
            this.onShown();
        }
    }

    /** 设置主界面隐藏 */
    setHomeHide()
    {
        if (this.contentPane && this.contentPane.visible)
        {
            this.contentPane.visible = false;
            this.onHide();
        }
    }

    /** 打开菜单动画 */
    static setMenuShow(menu:number)
    {
        // if (menu < MenuId.SubMenuButtonBegin) 
        // {
        //     Game.system.HomeOpenShow(menu);
        // } 
        // else 
        // {
        //     let config = Game.config.menuIndex.getConfig(menu);
        //     Game.system.toastText(`二级功能 ${config.name} 开启！`);
        // }
        
        let config = Game.config.unlock.getConfig(menu);
        switch (config.openShow) {
            case 0:
                // 没有展示
                break;
            case 1:
                // 通用展示
                Game.system.HomeOpenShow(menu);
                GuideMgr.isShowingHomeDialog = true;
                break;
        
            default:
                break;
        }
    }

    /** 显示完成 */
    protected onShown(): void
    {
        super.onShown();
        
        
        this.windowUI.OpenBottom();
        this.windowUI.OpenTop();
        this.windowUI.OpenLeftTop();
        this.windowUI.OpenLeftBottom();
        this.windowUI.OpenRightTop();
        this.windowUI.OpenRightBottom();
        this.windowUI.OpenCenter();

        
        // 功能打开动画
        if (HomeWindow.Show_Menu) 
        {
            Game.menu.open
            HomeWindow.setMenuShow(HomeWindow.Show_Menu);
            
            Game.system.guideMgr.HideGuide();
            HomeWindow.Show_Menu = null;
        }
        this.windowUI.onShow();
    }
}