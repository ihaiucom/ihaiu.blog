import MWindow from "../../GameFrame/Module/MWindow";
import TeamWindowUI from "../../FGUI/Extends/ModuleTeam/TeamWindowUI";
import GuiPackageNames from "../../FGUI/Generates/GuiPackageNames";
import MenuOpenParameter from "../../GameFrame/Menu/MenuOpenParameter";
import Game from "../../Game";

export default class TeamWindow extends MWindow 
{
    windowUI: TeamWindowUI;

    /** 添加依赖资源 */
    constructor()
    {
        super();

        this.addAssetForFguiComponent(TeamWindowUI);
        this.addAssetForFguiPackagename(GuiPackageNames.CommonGame);
        this.addAssetForFguiPackagename(GuiPackageNames._ResImageUIV1);
    }

    /** 菜单创建 */
    protected onMenuCreate(): void
    {
        let windowUI     = TeamWindowUI.createInstance();
        this.windowUI    = windowUI;
        this.contentPane = windowUI;

        super.onMenuCreate();
    }

    /** 模块界面打开时，显示前被调用 */
    onMenuOpen(parameter: MenuOpenParameter): void  
    {
        super.onMenuOpen(parameter);

        this.windowUI.SetCheckPoint(parameter.args[0]);
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

        this.windowUI.Open();
    }
}