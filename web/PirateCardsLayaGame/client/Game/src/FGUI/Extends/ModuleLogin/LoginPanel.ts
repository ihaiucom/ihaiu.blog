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
import GameConfig from "../../../GameConfig";
import { MenuId } from "../../../GameModule/MenuId";
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