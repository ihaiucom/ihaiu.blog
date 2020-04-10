import MWindow from "../../GameFrame/Module/MWindow";
import LoginWindowUI from "../../FGUI/Extends/ModuleLogin/LoginWindowUI";
import MenuOpenParameter from "../../GameFrame/Menu/MenuOpenParameter";
import { MenuOpenType } from "../../GameFrame/Menu/MenuOpenType";
import Game from "../../Game";
import GuiPackageNames from "../../FGUI/Generates/GuiPackageNames";

export enum LoginTabType
{
    // 登录
    Login,
    // 游客登录
    LoginGuest,
    // 注册
    Register,
    // 注册协议
    Agreement
}

//======================
// 登录窗口
//----------------------
export default class LoginWindow extends MWindow
{

    conent: LoginWindowUI;

    constructor()
    {
        super();

        // 添加依赖资源
        this.addAssetForFguiComponent(LoginWindowUI);
    }


    // 生成动态预加载资源
    generateAssetsForDynmic(): void
    {
        super.generateAssetsForDynmic();

        // // 方式1, 自己手动加资源
        // this.addDynamicAsset({url:xxxxx, type:AssetItemType.Buffer});


        // // 方式2, 添加AvatarConfig里指定的资源
        // let list = Game.moduleModel.story.getList();
        // for(let i = 0; i < list.length; i ++)
        // {
        //     this.addDynamicAsset(list[i].avatarConfig.iconAssetItem);
        //     this.addDynamicAsset(list[i].avatarConfig.miniIconAssetItem);
        // }



        // // 方式3, 添加AvatarConfig所有的资源
        // let list = Game.moduleModel.story.getList();
        // for(let i = 0; i < list.length; i ++)
        // {
        //     this.addDynmicAssetForAvatarAll(list[i].avatarConfig);
        // }

    }


    // 菜单创建
    protected onMenuCreate(): void
    {
        let windowUI = LoginWindowUI.createInstance();
        this.conent = windowUI;
        this.contentPane = windowUI;

        super.onMenuCreate();
    }








    //=========================
    // 显示完成
    // 可以在这里添加协议消息监听
    //-------------------------
    protected onShowComplete()
    {
        super.onShowComplete();
    }

    //=========================
    // 隐藏完成
    // 可以在这里移除协议消息监听
    //-------------------------
    protected onHideComplete()
    {
        super.onHideComplete();
    }


}