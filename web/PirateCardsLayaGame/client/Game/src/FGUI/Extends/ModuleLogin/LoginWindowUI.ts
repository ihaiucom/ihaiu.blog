/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import LoginWindowUIStruct from "../../Generates/ModuleLogin/LoginWindowUIStruct";
import Game from "../../../Game";
import AntFrame from "../../../AntFrame/AntFrame";
import WarResId from "../../../GameWar/View/WarResId";
import GamerLoginS2C = proto.GamerLoginS2C;
import { AntPlatformWX } from "../../../AntFrame/Platform/AntWX";

export default class LoginWindowUI extends LoginWindowUIStruct
{

    private login_session:string;
    
    // 窗口显示
    onWindowShow(): void
    {
        this.m_panelBulletin.m_bg.m_btn_Close.onClick(this, this.onCloseBulletin);
        this.m_panelServer.m_btnChange.onClick(this, this.onChangeServer);
        this.m_panelServer.m_btnStart.onClick(this, this.onStartGame);
        this.m_panelServer.m_bg.m_btn_Close.onClick(this, this.onReturnServer)
        this.m_panelCheckID.m_btnClose.onClick(this, this.onCloseCheckID);
        this.m_panelCheckID.m_btnClose.visible = false;
        this.m_panelCheckID.m_btnMake.onClick(this, this.onMakeCheckID);

        this.m_loginPanel.m_btn_login.onClick(this, this.onClickLogin);
        this.m_loginPanel.m_btn_offLine.onClick(this, this.onClickOffline);
        this.m_loginPanel.m_btn_randomLogin.onClick(this, this.onClickRandomLogin);
        this.m_loginPanel.m_btn_testWar.onClick(this, this.onClickTestButton);
        this.m_cdkPanel.m_btn_cdk.onClick(this, this.onClickCdk);
        

        Game.net.gamerLoginS2C.on(this.GamerLoginS2C, this);
        Game.event.add("SUCCESS_LOGIN", this.LoginSuccess, this);
        Game.event.add("LOGIN_CDK", this.LoginCdk, this);
        Game.event.add("ERROR_CDK", this.ErrorCdk, this);
        Game.event.add("ERROR_IDCARD", this.ErrorIdCard, this);
        Game.event.add("ERROR_AREAS", this.ErrorAreas, this);
        Game.event.add("SUCCESS_AREAS", this.SucessAreas, this);
        Game.event.add("INDULGE_END", this.IndulgeEnd, this);

        this.Init();
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_panelBulletin.m_bg.m_btn_Close.offClick(this, this.onCloseBulletin);
        this.m_panelServer.m_btnChange.offClick(this, this.onChangeServer);
        this.m_panelServer.m_btnStart.offClick(this, this.onStartGame);
        this.m_panelServer.m_bg.m_btn_Close.offClick(this, this.onReturnServer);
        this.m_panelCheckID.m_btnClose.onClick(this, this.onCloseCheckID);
        this.m_panelCheckID.m_btnMake.onClick(this, this.onMakeCheckID);

        this.m_loginPanel.m_btn_login.offClick(this, this.onClickLogin);
        this.m_loginPanel.m_btn_offLine.offClick(this, this.onClickOffline);
        this.m_loginPanel.m_btn_randomLogin.offClick(this, this.onClickRandomLogin);
        this.m_loginPanel.m_btn_testWar.offClick(this, this.onClickTestButton);
        this.m_cdkPanel.m_btn_cdk.offClick(this, this.onClickCdk);

        Game.net.gamerLoginS2C.off(this.GamerLoginS2C, this);
        Game.event.remove("SUCCESS_LOGIN", this.LoginSuccess, this);
        Game.event.remove("LOGIN_CDK", this.LoginCdk, this);
        Game.event.remove("ERROR_CDK", this.ErrorCdk, this);
        Game.event.remove("ERROR_IDCARD", this.ErrorIdCard, this);
        Game.event.remove("ERROR_AREAS", this.ErrorAreas, this);
        Game.event.remove("SUCCESS_AREAS", this.SucessAreas, this);
        Game.event.remove("INDULGE_END", this.IndulgeEnd, this);

        this.Reset();
    }

    /*private----------------------UI事件操作---------------------------*/
    /** 关闭公告 */
    private onCloseBulletin()
    {
        this.m_Show.selectedIndex = 3;
    }

    /** 切换服务器 */
    private onChangeServer()
    {
        this.m_panelServer.m_Server.selectedIndex = 1;
    }

    /** 返回主界面 */
    private onReturnServer()
    {
        this.m_panelServer.m_Server.selectedIndex = 0;
    }

    /** 关闭身份验证 */
    private onCloseCheckID()
    {
        this.GetServer();
    }

    /** 确认身份验证 */
    private onMakeCheckID()
    {
        let index = this.m_panelCheckID.m_Type.selectedIndex;
        switch (index) {
            case 3:
                if (Game.moduleModel.login.isIndulge) {
                    this.m_Show.selectedIndex = 0;
                } else {
                    this.GetServer();
                }
                
                break;
            case 1:
                this.SendIDCard();
                break;
        }
    }

    /** 进入服务器 */
    private onStartGame()
    {
        let server = this.m_panelServer.lastServer
        if (!server) 
        {
            Game.system.toastText("尚未获取服务器列表！")
            return;    
        }
        Game.localStorage.server = server.id;

        let role = this.m_panelServer.GetRole(server.id);
        if (role) 
        {
            Game.sender.login.useRole(this.login_session, role.id);
        }
        else
        {
            Game.sender.login.newAndUseRole(this.login_session, this.m_loginPanel.account, server.id);
        }
    }

    /** 点击按钮--登录 */
    private onClickLogin()
    {
        this.m_loginPanel.password = "123";

        if (!Boolean(this.m_loginPanel.account) || !Boolean(this.m_loginPanel.password)) 
        {
            Game.system.toastText("请输入账号和密码！");
            return;
        }

        Game.sender.login.login(this.m_loginPanel.account, this.m_loginPanel.password, true);
    }
    
    /** 点击按钮--随机账号登录 */
    private onClickRandomLogin()
    {
        this.m_loginPanel.account = AntFrame.RandName(2, 7);
        Game.sender.login.login(this.m_loginPanel.account, "123", true);
    }

    /** 点击按钮--离线登录 */
    private onClickOffline()
    {
        Laya.SoundManager.playSound(WarResId.GetSoundPath(WarResId.GetSoundBehit(1, 1)));
        // Game.launch.enterGame();
    }

    /** 点击按钮--测试战斗 */
    private onClickTestButton()
    {
        Game.launch.enterTestWar();
    }

    /** 点击按钮--取消登录 */
    private onClickCancel()
    {
        this.m_Show.selectedIndex = 0;
    }

    /** 点击按钮--验证验证码 */
    private onClickCdk()
    {
        let session = this.login_session;
        let cdk = this.m_cdkPanel.cdk;
        let userName = this.m_loginPanel.account;
        let password = this.m_loginPanel.password;
        Game.sender.login.check(session, cdk, userName, password);
    }

    /*private----------------------EVENT事件操作-----------------------*/
    /** 登录成功返回 */
    private GamerLoginS2C(msg: GamerLoginS2C)
    {
        if (msg.error) 
        {
            return;    
        }
    }

    /** 登录成功返回 */
    private LoginSuccess(session:string, roles:any[])
    {
        this.login_session = session;
        this.m_panelServer.SetRoles(roles);

        // gjc 中高级账户无需验证，节约验证次数。
        let nocheck = ["jjsg1", "jjsg2", "jjsg3", "jjsg4", "jjsg5", "jjsg6"];
        let name = this.m_loginPanel.account;

        if (VersionConfig.IsOpenIDCard && nocheck.indexOf(name) == -1) {
            this.SendIDCard();
        } else {
            this.GetServer();
        }

        this.m_Show.selectedIndex = 1;
    }

    /** 登录失败返回 */
    private LoginCdk(session:string)
    {
        this.login_session = session;
        this.m_Show.selectedIndex = 4;
    }

    /** 验证码错误返回 */
    private ErrorCdk(error:number)
    {
        switch (error) {
            case 1017:
                Game.system.toastText("验证码错误！");
                break;
            case 1001:
                Game.system.toastText("验证时间超时！");
                this.onStartGame();
                break;
            
            default:
                break;
        }
        
    }

    /** 身份证错误返回 */
    private ErrorIdCard(error:number)
    {
        switch (error) {
            case 0:
            case 1023:
                if(this.m_panelCheckID.m_labName.text != "" && this.m_panelCheckID.m_labID.text != "")
                {
                    Game.system.toastText("实名制验证成功！");
                }
                
                this.GetServer();
                break;
            case 1021:
            case 1022:
            case 1026:
                Game.system.toastText("实名制验证失败！");
            case 1025:
                this.m_Show.selectedIndex = 5;
                this.m_panelCheckID.m_Type.selectedIndex = 1;
                break;
            case 1024:
                this.m_Show.selectedIndex = 5;
                this.m_panelCheckID.m_Type.selectedIndex = 3;
                break;
            
            default:
                break;
        }
    }

    /** 拉取服务器错误返回 */
    private ErrorAreas()
    {
        Game.system.toastText("拉取服务器错误！");
    }

     /** 拉取服务器成功返回 */
    private SucessAreas(areas:any[])
    {
        areas.sort((a,b)=>{
            return a.id - b.id;
        })
        this.m_panelServer.Open(areas)

    }

    /** 防沉迷时间结束 */
    private IndulgeEnd()
    {
        if (this.m_Show.selectedIndex != 5) 
        {
            let model = Game.moduleModel.login;
            switch (model.error) {
                case 1024:
                    this.m_panelCheckID.m_Type.selectedIndex = 0;
                    break;
                default:
                    this.m_panelCheckID.m_Type.selectedIndex = 3;
                    break;
            }
        }
    }

    /*private----------------------内部接口---------------------------*/
    /** 初始化 */
    private Init()
    {
        this.m_txt_gamever.text = "GameVersion:" + Game.version.localAppVersionData.toString();
        this.m_txt_resVer.text  = "ResVersion:" + Game.version.localResVersionData.toString();
        

        this.StartGame();
    }

    /** 重置 */
    private Reset()
    {
        this.m_txt_gamever.text = "";
        this.m_txt_resVer.text  = "";
        this.m_Show.selectedIndex = 0;
    }

    /** 获取服务器列表 */
    private GetServer()
    {
        Game.sender.login.areas();
    }

    /** 开始游戏 */
    private StartGame()
    {
        if (AntFrame.platform instanceof AntPlatformWX && VersionConfig.IsEnableWx) 
        {
            // TODO 直接走微信登录
            Game.sender.login.login("", "")
            this.m_Show.selectedIndex = 3;
        } 
        else 
        {
            this.m_Show.selectedIndex = 0;
        }
    }

    /** 请求身份验证 */
    private SendIDCard()
    {
        // 身份验证
        let session = this.login_session;
        let name    = this.m_panelCheckID.m_labName.text;
        let idcard  = this.m_panelCheckID.m_labID.text;
        Game.sender.login.CheckIDCard(session, name, idcard);
    }
}