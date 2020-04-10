import MWindow from "../../GameFrame/Module/MWindow";
import DraugWindowUI from "../../FGUI/Extends/ModuleDraug/DraugWindowUI";
import GuiPackageNames from "../../FGUI/Generates/GuiPackageNames";
import MenuOpenParameter from "../../GameFrame/Menu/MenuOpenParameter";
import Game from "../../Game";

export default class DraugWindow extends MWindow 
{
    windowUI: DraugWindowUI;

    /** 添加依赖资源 */
    constructor()
    {
        super();

        this.addAssetForFguiComponent(DraugWindowUI);
        this.addAssetForFguiPackagename(GuiPackageNames.CommonGame);
        this.addAssetForFguiPackagename(GuiPackageNames._ResImageUIV1);
    }

    /** 菜单创建 */
    protected onMenuCreate(): void
    {
        let windowUI     = DraugWindowUI.createInstance();
        this.windowUI    = windowUI;
        this.contentPane = windowUI;

        super.onMenuCreate();
    }

    /** 模块界面打开时，显示前被调用 */
    onMenuOpen(parameter: MenuOpenParameter): void  
    {
        super.onMenuOpen(parameter);
    }

    /** 打开Tab面板 */
    openTab(tabIndex: number | string)  
    {
        super.openTab(tabIndex);

        this.windowUI.m_view.selectedIndex = Number(tabIndex);
    }

    /** 显示完成 */
    protected onShown(): void
    {
        super.onShown();

        this.windowUI.Open();
    }
}