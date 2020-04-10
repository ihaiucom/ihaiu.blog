
import MWindow from "../../GameFrame/Module/MWindow";
import GuiPackageNames from "../../FGUI/Generates/GuiPackageNames";
import MenuOpenParameter from "../../GameFrame/Menu/MenuOpenParameter";
import SecretBookDetailWindowUI from '../../FGUI/Extends/ModuleSecretBook/SecretBookDetailWindowUI';


export default class SecretBookDetailWindow extends MWindow
{
    window: SecretBookDetailWindowUI;
    constructor()
    {
        super();

        // 添加依赖资源
        this.addAssetForFguiComponent(SecretBookDetailWindowUI);
        this.addAssetForFguiPackagename(GuiPackageNames._ResImageUIV1);
        this.addAssetForFguiPackagename(GuiPackageNames.CommonBase);
        this.addAssetForFguiPackagename(GuiPackageNames.CommonGame);
        this.addAssetForFguiPackagename(GuiPackageNames.SystemModuleDialog);
    }

    
    // 菜单创建
    protected onMenuCreate(): void
    {
        let windowUI = SecretBookDetailWindowUI.createInstance();
        this.contentPane = windowUI;
        this.window = windowUI;

        super.onMenuCreate();
    }

    
    //模块界面打开时，显示前被调用
    onMenuOpen(parameter: MenuOpenParameter): void  {
        super.onMenuOpen(parameter);
        if (parameter.args.length > 0) 
        {
        }
        else
        {
        }
    }

    //打开Tab面板
    openTab(tabIndex: number | string)  {
        super.openTab(tabIndex);
    }

}