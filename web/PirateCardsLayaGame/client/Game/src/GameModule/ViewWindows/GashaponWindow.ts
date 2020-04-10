import MWindow from '../../GameFrame/Module/MWindow';
import GashaponWindowUI from '../../FGUI/Extends/GashaponUI/GashaponWindowUI';
import GuiPackageNames from '../../FGUI/Generates/GuiPackageNames';
export default class GahsaponWindow extends MWindow
{
    conent: GashaponWindowUI;
    constructor()
    {
        super();

        // 添加依赖资源
        this.addAssetForFguiPackagename(GuiPackageNames.GashaponUI);
        this.addAssetForFguiPackagename(GuiPackageNames._ResImageUIV1);
        this.addAssetForFguiPackagename(GuiPackageNames._ResImagePic);
        this.addAssetForFguiPackagename(GuiPackageNames.CommonBase);
        this.addAssetForFguiPackagename(GuiPackageNames.CommonGame);
        this.addAssetForFguiPackagename(GuiPackageNames.SystemModuleDialog);


    }


    // 菜单创建
    protected onMenuCreate(): void
    {
        let windowUI = GashaponWindowUI.createInstance();
        this.conent = windowUI;
        this.contentPane = windowUI;
        super.onMenuCreate();

    }
}