import PowerWindowUI from "../../FGUI/Extends/ModulePower/PowerWindowUI";
import MWindow from "../../GameFrame/Module/MWindow";
import MenuOpenParameter from "../../GameFrame/Menu/MenuOpenParameter";
import SecretLandReadyWindowUI from '../../FGUI/Extends/ModuleSecretLand/SecretLandReadyWindowUI';

export default class SecretLandReadyWindow extends MWindow
{
    windowUI: SecretLandReadyWindowUI;

    /** 添加依赖资源 */
    constructor()
    {
        super();

        this.addAssetForFguiComponent(PowerWindowUI);
        this.addAssetForFguiComponent(SecretLandReadyWindowUI);
    }

    /** 菜单创建 */
    protected onMenuCreate(): void
    {
        let windowUI = SecretLandReadyWindowUI.createInstance();
        this.windowUI  = windowUI;
        this.contentPane = windowUI;
        

        super.onMenuCreate();
    }

    /** 模块界面打开时，显示前被调用 */
    onMenuOpen(parameter: MenuOpenParameter): void  
    {
        super.onMenuOpen(parameter);
    }
}