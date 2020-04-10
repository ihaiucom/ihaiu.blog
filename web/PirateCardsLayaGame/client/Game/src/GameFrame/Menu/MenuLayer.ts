
import { MenuLayerType } from "./MenuLayerType";
import Game from "../../Game";
// import BGModel from "../../FGUI/Extends/GameLaunch/BGModel";

/**
 * 模块UI 层
 */
export default class MenuLayer
{
    // 根容器
    static root: fgui.GRoot;

    // 主界面
    static home: fgui.GRoot;

    // 战斗UI层
    static warUI: fgui.GRoot;

    // 模块
    static module: fgui.GRoot;

    // 主UI
    static mainUI: fgui.GRoot;

    // 弹框
    static dialog: fgui.GRoot;

    // 引导
    static guide: fgui.GRoot;

    // 加载面板
    static loader: fgui.GRoot;

    // gm面板
    static gm: fgui.GRoot;

    // 浮动对话框
    static floatMsg: fgui.GRoot;

    // 字典
    static dict: Dictionary<MenuLayerType, fgui.GRoot> = new Dictionary<MenuLayerType, fgui.GRoot>();

    // 对话框model
    static _dialogModel: fgui.GComponent;
    static get dialogModel(): fgui.GComponent
    {
        if (!MenuLayer._dialogModel)
        {
            MenuLayer._dialogModel = new fgui.GComponent();
            // MenuLayer._dialogModel = BGModel.createInstance();
        }
        return MenuLayer._dialogModel;
    }

    static showDialogModel()
    {
        MenuLayer.dialog.width = Game.screenSetting.screenWidth;
        MenuLayer.dialog.height = Game.screenSetting.screenHeight;
        MenuLayer.dialogModel.alpha = 0.8;
        MenuLayer.dialogModel.width = Game.screenSetting.screenWidth;
        MenuLayer.dialogModel.height = Game.screenSetting.screenHeight;
        if (MenuLayer.dialogModel)
            MenuLayer.dialog.addChildAt(MenuLayer.dialogModel, 0);
    }

    static resetDialogModelSize()
    {
        MenuLayer.dialog.width = Game.screenSetting.screenWidth;
        MenuLayer.dialog.height = Game.screenSetting.screenHeight;
        MenuLayer.dialogModel.width = Game.screenSetting.screenWidth;
        MenuLayer.dialogModel.height = Game.screenSetting.screenHeight;
    }

    static hideDialogModel()
    {
        if (MenuLayer.dialogModel)
            MenuLayer.dialogModel.removeFromParent();
    }


    // 初始化
    static install()
    {
        // 根容器
        Laya.stage.addChild(fgui.GRoot.inst.displayObject);
        MenuLayer.root = fgui.GRoot.inst;


        MenuLayer.home = MenuLayer.createLayer(MenuLayerType.Home, "MenuLayer-home");
        MenuLayer.warUI = MenuLayer.createLayer(MenuLayerType.WarUI, "MenuLayer-warUI");
        MenuLayer.module = MenuLayer.createLayer(MenuLayerType.Module, "MenuLayer-module");
        MenuLayer.mainUI = MenuLayer.createLayer(MenuLayerType.MainUI, "MenuLayer-mainUI");
        MenuLayer.dialog = MenuLayer.createLayer(MenuLayerType.Dialog, "MenuLayer-dialog");
        MenuLayer.guide = MenuLayer.createLayer(MenuLayerType.Guide, "MenuLayer-guide");
        MenuLayer.loader = MenuLayer.createLayer(MenuLayerType.Loader, "MenuLayer-loader");
        MenuLayer.gm = MenuLayer.createLayer(MenuLayerType.GM, "MenuLayer-gm");
        MenuLayer.floatMsg = MenuLayer.createLayer(MenuLayerType.FloatMsg, "MenuLayer-floatMsg");

        MenuLayer.dict.add(MenuLayerType.Home, MenuLayer.home);
        MenuLayer.dict.add(MenuLayerType.WarUI, MenuLayer.warUI);
        MenuLayer.dict.add(MenuLayerType.Module, MenuLayer.module);
        MenuLayer.dict.add(MenuLayerType.MainUI, MenuLayer.mainUI);
        MenuLayer.dict.add(MenuLayerType.Dialog, MenuLayer.dialog);
        MenuLayer.dict.add(MenuLayerType.Guide, MenuLayer.guide);
        MenuLayer.dict.add(MenuLayerType.Loader, MenuLayer.loader);
        MenuLayer.dict.add(MenuLayerType.GM, MenuLayer.gm);
        MenuLayer.dict.add(MenuLayerType.FloatMsg, MenuLayer.floatMsg);
    }

    static getLayer(layerType: MenuLayerType): fgui.GRoot
    {
        return MenuLayer.dict.getValue(layerType);
    }

    private static createLayer(menuLayer:MenuLayerType ,  name?: string): fgui.GRoot
    {
        let root = MenuLayer.root;
        let v = new fgui.GRoot();
        v["menuLayer"] = menuLayer;
        if (name)
        {
            v.name = name;
        }

        if(Engine.borwer.isLiuHai)
        {
            switch(menuLayer)
            {
                case MenuLayerType.Loader:
                    v.x =0;
                    v.y =0;
                    v.setSize(root.width, root.height);
                    break;
                default:
                    if(Game.screenSetting.isLandsape)
                    {
                        v.x = Game.screenSetting.liuHaiHeightTop;
                        v.setSize(Game.screenSetting.screenWidthLiuHai, root.height);
                    }
                    else
                    {
                        v.y = Game.screenSetting.liuHaiHeightTop;
                        v.setSize(root.width, root.height - Game.screenSetting.screenHeightLiuHai);
                    }
            }
            
        }
        else
        {
            v.setSize(root.width, root.height);
        }
        root.addChild(v);
        return v;
    }

    public static getLayerHeight(menuLayer:MenuLayer)
    {
        if(Engine.borwer.isLiuHai)
        {
            switch(menuLayer)
            {
                case MenuLayer.loader:
                    return  Game.screenSetting.screenHeight;
    
                default:
                    return  Game.screenSetting.screenHeightLiuHai;
                    
            }
        }
        return  Game.screenSetting.screenHeight;
    }
    
    public static getLayerWidth(menuLayer:MenuLayer)
    {
        if(Engine.borwer.isLiuHai)
        {
            switch(menuLayer)
            {
                case MenuLayer.loader:
                    return  Game.screenSetting.screenWidth;
    
                default:
                    return  Game.screenSetting.screenWidthLiuHai;
                    
            }
        }
        return  Game.screenSetting.screenWidth;
    }


}
window["MenuLayer"] = MenuLayer;