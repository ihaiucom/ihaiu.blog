import MWindow from "../../GameFrame/Module/MWindow";
import CommonSkillWindowUI from "../../FGUI/Extends/ModuleCommonSkill/CommonSkillWindowUI";
import GuiPackageNames from "../../FGUI/Generates/GuiPackageNames";
import MenuOpenParameter from "../../GameFrame/Menu/MenuOpenParameter";
import TopHeadIconMask from "../../FGUI/Extends/SystemModuleMenu/TopHeadIconMask";
import Game from "../../Game";

/*
 * @Descripttion: 
 * @version: 
 * @Author: yapengyu
 * @Date: 2020-03-18 21:12:41
 */
export default class CommonSkillWindow extends MWindow
{
    window: CommonSkillWindowUI;
    
    constructor()
    {
        super();
        // 添加依赖资源
        this.addAssetForFguiPackagename(GuiPackageNames._ResImageUIV1);
        this.addAssetForFguiPackagename(GuiPackageNames.ModuleBattlePlan);
        this.addAssetForFguiPackagename(GuiPackageNames.ModuleCommonSkill);
    }

    // 菜单创建
    protected onMenuCreate(): void
    {
        let windowUI = CommonSkillWindowUI.createInstance();
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
            this.window.Init(parameter.args[0], parameter.args[1] , parameter.args[2]);
        }
    }
}