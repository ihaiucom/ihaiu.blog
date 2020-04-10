import MWindow from '../../GameFrame/Module/MWindow';
import GamePlayerInfoWindowUI from '../../FGUI/Extends/GamePlayerInfoUI/GamePlayerInfoWindowUI';
import GuiPackageNames from '../../FGUI/Generates/GuiPackageNames';
export default class GamePlayerInfoWindow extends MWindow
{
    window: GamePlayerInfoWindowUI;

    constructor()
    {
        super();

        // 添加依赖资源
        this.addAssetForFguiComponent(GamePlayerInfoWindowUI);
        this.addAssetForFguiPackagename(GuiPackageNames._ResImageUIV1);
        this.addAssetForFguiPackagename(GuiPackageNames.CommonBase);
        this.addAssetForFguiPackagename(GuiPackageNames.CommonGame);
    }

    
    // 菜单创建
    protected onMenuCreate(): void
    {
        let windowUI = GamePlayerInfoWindowUI.createInstance();
        this.window  = windowUI;
        this.contentPane = windowUI;

        super.onMenuCreate();
    }
}