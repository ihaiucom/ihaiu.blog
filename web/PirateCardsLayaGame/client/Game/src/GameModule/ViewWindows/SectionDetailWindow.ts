import MWindow from "../../GameFrame/Module/MWindow";
import GuiPackageNames from '../../FGUI/Generates/GuiPackageNames';
import MenuOpenParameter from "../../GameFrame/Menu/MenuOpenParameter";
import SectionDetailUI from '../../FGUI/Extends/GameSectionsUI/SectionDetailUI';


export default class SectionDetailWindow extends MWindow
{
    window: SectionDetailUI;
    constructor()
    {
        super();

        // 添加依赖资源
        this.addAssetForFguiComponent(SectionDetailUI);
        this.addAssetForFguiPackagename(GuiPackageNames._ResImageUIV1);
        this.addAssetForFguiPackagename(GuiPackageNames.CommonBase);
        this.addAssetForFguiPackagename(GuiPackageNames.CommonGame);
        
    }

    
    // 菜单创建
    protected onMenuCreate(): void
    {
        let windowUI = SectionDetailUI.createInstance();
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