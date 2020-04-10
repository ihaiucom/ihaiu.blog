import MWindow from '../../GameFrame/Module/MWindow';
import RankWindowUI from '../../FGUI/Extends/ModuleRank/RankWindowUI';
import MenuOpenParameter from '../../GameFrame/Menu/MenuOpenParameter';
import DuelTempBackground from '../../FGUI/Extends/CommonGame/DuelTempBackground';

/** 排行榜 */
export enum EnumRankTab
{
    /**天梯榜-当前服 */
    LadderCurrent = 0,
    /**天梯榜-全区 */
    LadderAll = 1,
    /**名人堂-历史 */
    FameHistory = 2,
    /**名人堂-殿堂 */
    FameHall = 3

}

export default class RankWindow extends MWindow
{
    windowUI: RankWindowUI;

    /** 添加依赖资源 */
    constructor()
    {
        super();

        this.addAssetForFguiComponent(RankWindowUI);
        this.addAssetForFguiComponent(DuelTempBackground);
    }

    /** 菜单创建 */
    protected onMenuCreate(): void
    {
        let windowUI = RankWindowUI.createInstance();
        this.windowUI = windowUI;
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
        this.windowUI.openTab(Number(tabIndex));
        super.openTab(tabIndex);
    }

    /** 显示完成 */
    protected onShown(): void
    {
        super.onShown();

    }
}