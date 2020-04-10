import MWindow from '../../GameFrame/Module/MWindow';
import DuelTempWindowUI from '../../FGUI/Extends/ModuleDuelTemp/DuelTempWindowUI';
import MenuOpenParameter from '../../GameFrame/Menu/MenuOpenParameter';
import Game from '../../Game';
import GuiPackageNames from '../../FGUI/Generates/GuiPackageNames';

export enum EnumDuelTempMenuType
{
    Main,
    Day,
    Week,
    Season
}

export default class DuelTempWindow extends MWindow
{
    window: DuelTempWindowUI;

    /** 添加依赖资源 */
    constructor()
    {
        super();

        this.addAssetForFguiComponent(DuelTempWindowUI);
        this.addAssetForFguiPackagename(GuiPackageNames._ResImagePic)
        this.addAssetForFguiPackagename(GuiPackageNames._ResImageUIV1);
    }

     /** 异步检查该模块是否可以打开 */
    static async AsyncEnableOpen(): Promise < boolean >
    {
        await Game.sender.pvp.getDanInfo();
        return Promise.resolve(true);
    }
    
    /** 菜单创建 */
    protected onMenuCreate(): void
    {
        let windowUI = DuelTempWindowUI.createInstance();
        this.window = windowUI;
        this.contentPane = windowUI;

        super.onMenuCreate();
    }

    /** 模块界面打开时，显示前被调用 */
    onMenuOpen(parameter: MenuOpenParameter): void  
    {
        super.onMenuOpen(parameter);
    }

    /** 打开Tab面板 */
    openTab(tabIndex: number | string)  
    {
        this.window.openTab(tabIndex);
        super.openTab(tabIndex);
    }

    /** 显示完成 */
    protected onShown(): void
    {
        super.onShown();

    }
}