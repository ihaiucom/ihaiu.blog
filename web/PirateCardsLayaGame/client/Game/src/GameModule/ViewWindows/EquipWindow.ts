import MWindow from "../../GameFrame/Module/MWindow";
import MenuOpenParameter from "../../GameFrame/Menu/MenuOpenParameter";
import EquipWindowUI from "../../FGUI/Extends/ModuleEquip/EquipWindowUI";
import HeroWindowUI from "../../FGUI/Extends/ModuleHero/HeroWindowUI";

export default class EquipWindow extends MWindow 
{
    conent: EquipWindowUI;
    openParam: any[];

    constructor() {
        super();

        //添加依赖资源
        this.addAssetForFguiComponent(EquipWindowUI);
        this.addAssetForFguiComponent(HeroWindowUI);
    }

    //生成动态预加载资源
    generateAssetsForDynmic(): void  {
        super.generateAssetsForDynmic();
    }

    //模块界面创建
    protected onMenuCreate(): void 
    {
        let windowUI = EquipWindowUI.createInstance();
        this.conent = windowUI;
        this.contentPane = windowUI;

        windowUI.m_detialView.windowUI = windowUI;
        windowUI.m_selectView.windowUI = windowUI;

        // 设置关闭按钮 关闭当前窗口
        this.setCloseBtnEvent();
        super.onMenuCreate();
    }

    //模块界面打开时，显示前被调用
    onMenuOpen(parameter: MenuOpenParameter): void  
    {
        super.onMenuOpen(parameter);
        if(parameter.args.length > 0)
        {
            this.openParam = parameter.args;
        }
    }

    //打开Tab面板
    openTab(tabIndex: number | string)  
    {
        super.openTab(tabIndex);
    }

    //=========================
    // 显示完成(初始化完成)
    // 可以在这里添加协议消息监听(网络、事件)
    //-------------------------
    protected onShowComplete()  
    {
        super.onShowComplete();
    }

    //=========================
    // 隐藏完成(销毁完成)
    // 可以在这里移除协议消息监听
    //-------------------------
    protected onHideComplete()  
    {
        super.onHideComplete();
    }

    /** 显示完成 */
    protected onShown(): void
    {
        super.onShown();

        this.conent.Open();
    }
}