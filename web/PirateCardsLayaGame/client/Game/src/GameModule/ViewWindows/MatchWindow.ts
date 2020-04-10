import MWindow from "../../GameFrame/Module/MWindow";
import MatchWindowUI from "../../FGUI/Extends/GameMatchUI/MatchWindowUI";
import GuiPackageNames from "../../FGUI/Generates/GuiPackageNames";
import MenuOpenParameter from "../../GameFrame/Menu/MenuOpenParameter";
import DuelTempBackground from '../../FGUI/Extends/CommonGame/DuelTempBackground';
export default class MatchWindow extends MWindow
{
    window: MatchWindowUI;

    constructor()
    {
        super();
        // 添加依赖资源
        this.addAssetForFguiComponent(MatchWindowUI);
        this.addAssetForFguiComponent(DuelTempBackground);
        this.addAssetForFguiPackagename(GuiPackageNames.CommonGame);
    }

    
    // 菜单创建
    protected onMenuCreate(): void
    {
        let windowUI = MatchWindowUI.createInstance();
        this.window  = windowUI;
        this.contentPane = windowUI;

        super.onMenuCreate();
    }

    //模块界面打开时，显示前被调用
    onMenuOpen(parameter: MenuOpenParameter): void  {
        super.onMenuOpen(parameter);
        if (parameter.args.length > 0) 
        {
            // this.window.m_roomMainView.updateView(parameter.args[0]);    
        }
    }

    //打开Tab面板
    openTab(tabIndex: number | string)  {
        if (this.window && Number(tabIndex) != this.window.m_state.selectedIndex)  {
            this.window.m_state.selectedIndex = Number(tabIndex);
        }

        super.openTab(tabIndex);
    }

}