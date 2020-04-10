import MWindow from "../../GameFrame/Module/MWindow";
import BattleResultWindowUI from "../../FGUI/Extends/BattleResult/BattleResultWindowUI";
import Game from "../../Game";
import GuiPackageNames from '../../FGUI/Generates/GuiPackageNames';
import SecretLandRollWindowUI from '../../FGUI/Extends/ModuleSecretLand/SecretLandRollWindowUI';

export default class BattleResultWindow extends MWindow
{

    constructor()
    {
        super();

        // 添加依赖资源
        this.addAssetForFguiComponent(BattleResultWindowUI);
        this.addAssetForFguiPackagename(GuiPackageNames._ResImagePic);
        this.addAssetForFguiPackagename(GuiPackageNames._ResImageUIV1);
        this.addAssetForFguiPackagename(GuiPackageNames.CommonGame);
        this.addAssetForFguiComponent(SecretLandRollWindowUI);
        this.addAssetForFguiPackagename(GuiPackageNames.CommonBase);
    }

    
    // 菜单创建
    protected onMenuCreate(): void
    {
        let windowUI = BattleResultWindowUI.createInstance();
        this.contentPane = windowUI;
        
        super.onMenuCreate();
    }

}