import PowerWindowUI from "../../FGUI/Extends/ModulePower/PowerWindowUI";
import MWindow from "../../GameFrame/Module/MWindow";
import MenuOpenParameter from "../../GameFrame/Menu/MenuOpenParameter";

export default class PowerWindow extends MWindow
{
    windowUI: PowerWindowUI;

    /** 添加依赖资源 */
    constructor()
    {
        super();

        this.addAssetForFguiComponent(PowerWindowUI);
    }

    /** 菜单创建 */
    protected onMenuCreate(): void
    {
        let windowUI = PowerWindowUI.createInstance();
        this.windowUI  = windowUI;
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
    }

    /** 显示完成 */
    protected onShown(): void
    {
        super.onShown();
        
        this.windowUI.OpenPower();
    }
}