/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import LoginPanelStruct from "../../Generates/ModuleLogin/LoginPanelStruct";
import LoginWindow from "../../../GameModule/ViewWindows/LoginWindow";
import Game from "../../../Game";
import TEXT from "../../../Config/Keys/TEXT";
import AntFrame from "../../../AntFrame/AntFrame";
import { AntPlatformWX } from "../../../AntFrame/Platform/AntWX";
import WarResId from "../../../GameWar/View/WarResId";
import { BehaviourEffectFont } from "../../../GameWar/View/Behaviours/BehaviourEffectFont";
import { WarSetting } from "../../../GameWar/Logic/WarSetting";
import { WarView } from "../../../GameWar/View/WarView";
import GameConfig from "../../../GameConfig";
import { MenuId } from "../../../GameModule/MenuId";
import War3DWindowUI from "../GameWar3DUI/War3DWindowUI";
import MenuLayer from "../../../GameFrame/Menu/MenuLayer";

export default class LoginPanel extends LoginPanelStruct
{
    
    // 窗口
    moduleWindow: LoginWindow;

   // 窗口初始化完毕
   onWindowInited(): void
   {
        console.log('LoginPanel onWindowInited');
        // 0 Mine 1 提审服
        this.m_type.selectedIndex = 1;

        this.m_btn_randomLogin.visible = VersionConfig.IsDebugVer;
        this.m_btn_testWar.visible     = VersionConfig.IsDebugVer;

        window['userAccount'] = this.m_accountInput.m_txt_account;
        window['userPassWorld'] = this.m_passwordInput.m_txt_password;
        window['loginPanel'] = this;
        
        // this.showDebugButton();
   }

   showDebugButton()
   {
        this.createDebugButton("LayaText", this.onClickDebugLayaText, 0, 0);
        this.createDebugButton("MeshText", this.onClickDebugMeshText, 1, 0);
        this.createDebugButton("SpriteText", this.onClickDebugSpriteText, 2, 0);
        this.createDebugButton("FguiText", this.onClickDebugFguiText, 3, 0);
       
        this.createDebugButton("Record", ()=>{
            WarSetting.enableRecord = !WarSetting.enableRecord;
        }, -1, 1);

        this.createDebugButton("Sound", ()=>{
            WarSetting.enableSound = !WarSetting.enableSound;
        }, 0, 1);

        this.createDebugButton("飘字", ()=>{
            WarSetting.enableText = !WarSetting.enableText;
        }, 1, 1);
        
        this.createDebugButton("AI", ()=>{
            WarSetting.openAI = !WarSetting.openAI;
        }, 2, 1);
        
        this.createDebugButton("美术特效", ()=>{
            WarSetting.enableEffectArts = !WarSetting.enableEffectArts;
        }, 3, 1);

        this.createDebugButton("多摄像机", ()=>{
            WarSetting.enableMultipleCamera = !WarSetting.enableMultipleCamera;
            if(WarView.scene)
            {
                WarView.scene.enableMultipleCamera = WarSetting.enableMultipleCamera;
            }
        }, 4, 1);

        this.createDebugButton("地图", ()=>{
            if(WarView.scene && WarView.scene.mapNode)
            {
                if(WarView.scene.mapNode.parent)
                {
                    WarView.scene.mapNode.removeSelf();
                }
                else
                {
                    WarView.scene.sceneRoot.addChild(WarView.scene.mapNode);
                }
            }
        }, 5, 1);

        this.createDebugButton("技能大招", ()=>{
            var menuCtrl = Game.menu.getMenuCtl(MenuId.WarWindowUI)
            if(menuCtrl)
            {
                (<War3DWindowUI>menuCtrl.moduleWindow.panel).m_skillView.m_btnSkillFou.visible = !(<War3DWindowUI>menuCtrl.moduleWindow.panel).m_skillView.m_btnSkillFou.visible;
            }
        }, 0, 2);
        
        this.createDebugButton("战斗界面", ()=>{
            var menuCtrl = Game.menu.getMenuCtl(MenuId.WarWindowUI)
            if(menuCtrl)
            {
                (<War3DWindowUI>menuCtrl.moduleWindow.panel).visible = !(<War3DWindowUI>menuCtrl.moduleWindow.panel).visible;
            }
        }, 1, 2);

        this.createDebugButton("角色", ()=>{
            WarSetting.enableUnitView = !WarSetting.enableUnitView;
        }, 2, 2);

        this.createDebugButton("描边", ()=>{
            WarSetting.isOutLine = !WarSetting.isOutLine;
        }, 3, 2);
        // this.createDebugButton("分辨率 x1", ()=>{
        //     Laya.stage.width = GameConfig.width;
        //     Laya.stage.height = GameConfig.height;
        // }, 0, 2);

        
        // this.createDebugButton("分辨率 x0.75", ()=>{
        //     Laya.stage.width = GameConfig.width * 0.75;
        //     Laya.stage.height = GameConfig.height * 0.75;
        // }, 1, 2);

        // this.createDebugButton("分辨率 x0.5", ()=>{
        //     Laya.stage.width = GameConfig.width * 0.5;
        //     Laya.stage.height = GameConfig.height * 0.5;
        // }, 2, 2);
   }

   createDebugButton(text: string, fun:Function, x: number, y: number)
   {
        var button = fgui.UIPackage.createObjectFromURL(this.m_btn_login.resourceURL);
        button.text = text;
        button.width = 150;
        button.height = 80;
        button.x = 200 + x * 200;
        button.y = 100 + y * 100;
        button.onClick(this, fun);
        fgui.GRoot.inst.addChild(button);
   }


   onClickDebugLayaText()
   {
        BehaviourEffectFont.useTextType = 0;
   }

   onClickDebugMeshText()
   {
        BehaviourEffectFont.useTextType = 1;

   }
   
   onClickDebugSpriteText()
   {
        BehaviourEffectFont.useTextType = 2;
   }
   onClickDebugFguiText()
   {
        BehaviourEffectFont.useTextType = 3;
   }
   
    // 账号
    get account(): string
    {
        return this.m_accountInput.m_txt_account.text.trim();
    }

    set account(value: string)
    {
        this.m_accountInput.m_txt_account.text = value;
    }

    // 账号
    get password(): string
    {
        return this.m_passwordInput.m_txt_password.text.trim();
    }

    set password(value: string)
    {
        this.m_passwordInput.m_txt_password.text = value;
    }
    
    // 窗口显示
    onWindowShow(): void
    {
        console.log('LoginPanel onWindowShow');

        
        if (isNullOrEmpty(this.account))
        {
            this.account = Game.localStorage.username;
            if(Engine.borwer.isBrowser && VersionConfig.IsDebugVer)
            {
                let username = sessionStorage.getItem('username');
                this.account = username?username:"";
            }
        }

        if (isNullOrEmpty(this.account))
        {
            this.account = AntFrame.RandName(2, 7);
        }

        if (isNullOrEmpty(this.password))
        {
            this.password = Game.localStorage.password;
            if(Engine.borwer.isBrowser && VersionConfig.IsDebugVer)
            {
                let password = sessionStorage.getItem('password');
                this.password = password?password:"";
            }
        }

        

        if(Engine.borwer.isWXGame)
        {
            // this.getAuth();
        }
    }
    
    async getAuth()
    {
        if(AntFrame.platform instanceof AntPlatformWX)
        {
            let antWx:AntPlatformWX = AntFrame.platform;
            let result = await antWx.WXGetSdkAuthSetting();
            if(!result)
            {
                this.setModel(true);
                let userInfo = await antWx.WXAuth();
                if(userInfo)
                {
                    this.setModel(false);
                }
            }
            else
            {
                this.setModel(false);
            }
        }
    }

    
    setModel(isAuth: boolean)
    {
        this.m_btn_login.title = isAuth ? TEXT.Auth : TEXT.Login;
    }


    

}