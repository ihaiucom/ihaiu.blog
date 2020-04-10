import MWindow from "../../GameFrame/Module/MWindow";
import WelfareWindowUI from "../../FGUI/Extends/ModuleWelfare/WelfareWindowUI";
import MenuOpenParameter from "../../GameFrame/Menu/MenuOpenParameter";

export default class WelfareWindow extends MWindow 
{
    windowUI: WelfareWindowUI;

    /** 添加依赖资源 */
    constructor()
    {
        super();

        this.addAssetForFguiComponent(WelfareWindowUI);
    }

    /** 菜单创建 */
    protected onMenuCreate(): void
    {
        let windowUI = WelfareWindowUI.createInstance();
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
        
        this.windowUI.OpenWelfarePower();
    }
}