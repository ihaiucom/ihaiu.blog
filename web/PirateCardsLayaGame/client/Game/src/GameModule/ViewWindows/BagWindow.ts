import MWindow from '../../GameFrame/Module/MWindow';
import BagWindowUI from '../../FGUI/Extends/ModuleBag/BagWindowUI';
import GuiPackageNames from '../../FGUI/Generates/GuiPackageNames';
import MenuOpenParameter from '../../GameFrame/Menu/MenuOpenParameter';
import SystemObtainDialog from '../../FGUI/Extends/SystemModuleDialog/SystemObtainDialog';

export enum EnumBagMenuType
{
    Item,
    Equipment,
    HeroPieces,
    ItemSell,
    ItemUse,
    ItemSplit
}

export default class BagWindow extends MWindow
{
    windowUI: BagWindowUI;

    /** 添加依赖资源 */
    constructor()
    {
        super();

        this.addAssetForFguiComponent(BagWindowUI);
        this.addAssetForFguiPackagename(GuiPackageNames._ResImageUIV1);
        this.addAssetForFguiPackagename(GuiPackageNames.CommonBase);
        this.addAssetForFguiPackagename(GuiPackageNames.CommonGame);
        // this.addAssetForFguiPackagename(GuiPackageNames.SystemModuleDialog);
        this.addAssetForFguiComponent(SystemObtainDialog);
    }

    /** 菜单创建 */
    protected onMenuCreate(): void
    {
        let windowUI     = BagWindowUI.createInstance();
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
        this.windowUI.openTab(Number(tabIndex));
        super.openTab(tabIndex);
    }

    /** 显示完成 */
    protected onShown(): void
    {
        super.onShown();

        // this.windowUI.OpenAwaken();
    }
}