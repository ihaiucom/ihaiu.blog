import MWindow from "../../GameFrame/Module/MWindow";
import BattlePlanWindowUI from "../../FGUI/Extends/ModuleBattlePlan/BattlePlanWindowUI";
import GuiPackageNames from "../../FGUI/Generates/GuiPackageNames";
import MenuOpenParameter from "../../GameFrame/Menu/MenuOpenParameter";

export default class BattlePlanWindow extends MWindow
{

    window: BattlePlanWindowUI;
    
    constructor()
    {
        super();

        // 添加依赖资源
        this.addAssetForFguiPackagename(GuiPackageNames._ResImageUIV1);
        this.addAssetForFguiPackagename(GuiPackageNames.ModuleBattlePlan);
        this.addAssetForFguiComponent(BattlePlanWindowUI);
    }

    
    // 菜单创建
    protected onMenuCreate(): void
    {
        let windowUI = BattlePlanWindowUI.createInstance();
        this.window = windowUI;
        this.contentPane = windowUI;
        
        super.onMenuCreate();
    }

    //模块界面打开时，显示前被调用
    onMenuOpen(parameter: MenuOpenParameter): void
    {
        super.onMenuOpen(parameter);
        if(parameter.args.length > 0) 
        {
            
        }
    }

    //打开Tab面板
    openTab(tabIndex: number | string)
    {
        let page = "normal";
        tabIndex == 1 && (page = "battleChoose");
        tabIndex == 2 && (page = "dueltemp");
        this.window.onMenuOpen(page);
        super.openTab(tabIndex);
    }

}