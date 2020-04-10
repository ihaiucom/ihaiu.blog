import MWindow from '../../GameFrame/Module/MWindow';
import GuiPackageNames from '../../FGUI/Generates/GuiPackageNames';
import MenuOpenParameter from '../../GameFrame/Menu/MenuOpenParameter';
import PlayerLevelUpWindowUI from '../../FGUI/Extends/ModuleDialogs/PlayerLevelUpWindowUI';
export default class PlayerLevelUpWindow extends MWindow
{
    window: PlayerLevelUpWindowUI;
    constructor()
    {
        super();

        // 添加依赖资源
        this.addAssetForFguiComponent(PlayerLevelUpWindowUI);
        this.addAssetForFguiPackagename(GuiPackageNames._ResImageUIV1);
        this.addAssetForFguiPackagename(GuiPackageNames.CommonBase);
        this.addAssetForFguiPackagename(GuiPackageNames.CommonGame);
        
    }

    
    // 菜单创建
    protected onMenuCreate(): void
    {
        let windowUI = PlayerLevelUpWindowUI.createInstance();
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