import MWindow from "../../GameFrame/Module/MWindow";
import War3DWindowUI from "../../FGUI/Extends/GameWar3DUI/War3DWindowUI";
import WarWindow from "./WarWindow";
import WarWindowUI from "../../FGUI/Extends/GameWarUI/WarWindowUI";
import GuiPackageNames from "../../FGUI/Generates/GuiPackageNames";

export default class War3DWindow extends MWindow 
{
    constructor()
    {
        super();

        // 添加依赖资源
        this.addAssetForFguiComponent(War3DWindowUI);
        this.addAssetForFguiComponent(WarWindowUI);
        this.addAssetForFguiPackagename(GuiPackageNames.__ResFont);
        this.addAssetForFguiPackagename(GuiPackageNames.BattleResult);

        this.addAssetForFguiPackagename(GuiPackageNames.Effect_1001_Dianguanglongqi_Skin1__Skill4_13);
        this.addAssetForFguiPackagename(GuiPackageNames.Effect_1002_Zhanji_Skin1__Skill4_13);
        this.addAssetForFguiPackagename(GuiPackageNames.Effect_13001_fade);
        this.addAssetForFguiPackagename(GuiPackageNames.Effect_13002_321go);
    }

    
    /** 菜单创建 */
    protected onMenuCreate(): void
    {
        let windowUI = War3DWindowUI.createInstance();
        this.contentPane = windowUI;

        super.onMenuCreate();
    }
}