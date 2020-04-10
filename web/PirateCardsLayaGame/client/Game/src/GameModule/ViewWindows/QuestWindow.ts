import MWindow from "../../GameFrame/Module/MWindow";
import QuestWindowUI from "../../FGUI/Extends/ModuleQuest/QuestWindowUI";
import GuiPackageNames from "../../FGUI/Generates/GuiPackageNames";
import MenuOpenParameter from "../../GameFrame/Menu/MenuOpenParameter";

export default class QuestWindow extends MWindow {
    windowUI: QuestWindowUI;

    /** 添加依赖资源 */
    constructor()
    {
        super();

        this.addAssetForFguiComponent(QuestWindowUI);
        this.addAssetForFguiPackagename(GuiPackageNames._ResImageUIV1);
        this.addAssetForFguiPackagename(GuiPackageNames.SystemModuleDialog);
    }

    /** 菜单创建 */
    protected onMenuCreate(): void
    {
        let windowUI     = QuestWindowUI.createInstance();
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
    }

    /** 显示完成 */
    protected onShown(): void
    {
        super.onShown();

        this.windowUI.OpenGrowUp();
        this.windowUI.OpenDaily();
    }
}