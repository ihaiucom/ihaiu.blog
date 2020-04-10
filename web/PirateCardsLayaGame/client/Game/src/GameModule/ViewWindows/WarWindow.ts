import MWindow from "../../GameFrame/Module/MWindow";
import WarWindowUI from "../../FGUI/Extends/GameWarUI/WarWindowUI";
import GuiPackageNames from "../../FGUI/Generates/GuiPackageNames";
export default class WarWindow extends MWindow
{

    constructor()
    {
        super();

        // 添加依赖资源
        this.addAssetForFguiComponent(WarWindowUI);
        this.addAssetForFguiPackagename(GuiPackageNames.__ResFont);
    }

    
    // 菜单创建
    protected onMenuCreate(): void
    {
        let windowUI = WarWindowUI.createInstance();
        this.contentPane = windowUI;

        super.onMenuCreate();
    }

}