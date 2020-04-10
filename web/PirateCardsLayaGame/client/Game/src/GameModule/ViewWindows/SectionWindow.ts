import MWindow from "../../GameFrame/Module/MWindow";
import SectionWindowUI from '../../FGUI/Extends/GameSectionsUI/SectionWindowUI';
import GuiPackageNames from '../../FGUI/Generates/GuiPackageNames';
import MenuOpenParameter from "../../GameFrame/Menu/MenuOpenParameter";


export default class SectionWindow extends MWindow
{
    window: SectionWindowUI;
    constructor()
    {
        super();

        // 添加依赖资源
        this.addAssetForFguiComponent(SectionWindowUI);
        this.addAssetForFguiPackagename(GuiPackageNames._ResImageUIV1);
        this.addAssetForFguiPackagename(GuiPackageNames.CommonBase);
        this.addAssetForFguiPackagename(GuiPackageNames.CommonGame);
        this.addAssetForFguiPackagename(GuiPackageNames.SystemModuleDialog);
    }

    
    // 菜单创建
    protected onMenuCreate(): void
    {
        let windowUI = SectionWindowUI.createInstance();
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
            // this.window.m_head.m_type.setSelectedIndex(0);
        }
    }

    //打开Tab面板
    openTab(tabIndex: number | string)  {
        this.window.m_sectionType.setSelectedIndex(Number(tabIndex));
        super.openTab(tabIndex);
    }

}