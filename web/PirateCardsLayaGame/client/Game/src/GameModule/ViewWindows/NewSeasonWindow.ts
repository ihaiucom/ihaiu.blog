import MWindow from '../../GameFrame/Module/MWindow';
import NewSeasonWindowUI from '../../FGUI/Extends/ModuleDialogs/NewSeasonWindowUI';
import GuiPackageNames from '../../FGUI/Generates/GuiPackageNames';
import MenuOpenParameter from '../../GameFrame/Menu/MenuOpenParameter';
export default class NewSeasonWindow extends MWindow
{
    window: NewSeasonWindowUI;
    constructor()
    {
        super();

        // 添加依赖资源
        this.addAssetForFguiComponent(NewSeasonWindowUI);
        this.addAssetForFguiPackagename(GuiPackageNames._ResImageUIV1);
        this.addAssetForFguiPackagename(GuiPackageNames._ResImagePic);
        this.addAssetForFguiPackagename(GuiPackageNames.CommonBase);
        this.addAssetForFguiPackagename(GuiPackageNames.CommonGame);
        
    }

    
    // 菜单创建
    protected onMenuCreate(): void
    {
        let windowUI = NewSeasonWindowUI.createInstance();
        this.contentPane = windowUI;
        this.window = windowUI;

        super.onMenuCreate();
    }

    
    //模块界面打开时，显示前被调用
    onMenuOpen(parameter: MenuOpenParameter): void  {
        super.onMenuOpen(parameter);
     
    }

    //打开Tab面板
    openTab(tabIndex: number | string)  {
        super.openTab(tabIndex);
    }
}