import MWindow from '../../GameFrame/Module/MWindow';
import PVPHallWindowUI from '../../FGUI/Extends/ModulePVPHall/PVPHallWindowUI';
import MenuOpenParameter from '../../GameFrame/Menu/MenuOpenParameter';
import FguiHelper from '../../Libs/Helpers/FguiHelper';
import GuiPackageNames from '../../FGUI/Generates/GuiPackageNames';
import DuelTempBackground from '../../FGUI/Extends/CommonGame/DuelTempBackground';
export default class PVPHallWindow extends MWindow
{
    windowUI: PVPHallWindowUI;

    /** 添加依赖资源 */
    constructor()
    {
        super();

        this.addAssetForFguiComponent(PVPHallWindowUI);
		this.addAssetForFguiComponent(DuelTempBackground);
		this.addAssetForFguiPackagename(GuiPackageNames.CommonGame);
        this.addAssetForFguiPackagename(GuiPackageNames._ResImageUIV1);
    }

    /** 菜单创建 */
    protected onMenuCreate(): void
    {
        let windowUI = PVPHallWindowUI.createInstance();
        this.windowUI = windowUI;
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

    }
}