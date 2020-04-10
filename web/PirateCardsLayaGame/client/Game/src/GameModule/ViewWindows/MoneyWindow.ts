import MWindow from "../../GameFrame/Module/MWindow";
import MoneyWindowUI from "../../FGUI/Extends/ModuleMoney/MoneyWindowUI";
import MenuOpenParameter from "../../GameFrame/Menu/MenuOpenParameter";

export default class MoneyWindow extends MWindow 
{
    windowUI: MoneyWindowUI;

    /** 添加依赖资源 */
    constructor()
    {
        super();

        this.addAssetForFguiComponent(MoneyWindowUI);
    }

    /** 菜单创建 */
    protected onMenuCreate(): void
    {
        let windowUI = MoneyWindowUI.createInstance();
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
        
        this.windowUI.OpenMoney();
    }
}