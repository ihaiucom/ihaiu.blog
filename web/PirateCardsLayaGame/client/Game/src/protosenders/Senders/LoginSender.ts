
import Game from '../../Game';
import AntFrame from '../../AntFrame/AntFrame';
import IntMath from '../../GameWar/CoreLib/IntMath/IntMath';
export default class LoginSender
{
    async reLogin()
    {
        
    }

    /** 登录账户 */
    async login(userName?: string, password?: string, isForce?: boolean)
    {
        if(!isForce && Game.user.isLoginAndGetUserData)
        {
            return;
        }
        
        // 登录前筛选掉所有屏蔽配置
        // Game.config.shieldList();

        // if(isNullOrEmpty(userName))
        //     userName = AntFrame.RandName(2, 7);

        fgui.GRoot.inst.showModalWait();
        let s2c = await AntFrame.platform.Login2(userName, password);
        fgui.GRoot.inst.closeModalWait();
        if(s2c.error)
        {
            if (s2c.error == 45 || s2c.error == 304)   Game.launch.onNetError(s2c.error);
            if (s2c.error == 1018) Game.event.dispatch("LOGIN_CDK", s2c["session"]);
            return;
        } 
        
        Game.localStorage.username = userName;
        Game.localStorage.password = password;
        if(Engine.borwer.isBrowser && VersionConfig.IsDebugVer)
        {
            sessionStorage.setItem('username',userName);
            sessionStorage.setItem('password',password);
        }
        // Game.localStorage.addUseraccount(userName, password);

        Game.event.dispatch("SUCCESS_LOGIN", s2c["session"], s2c["roles"]);
    }

    /** 校验验证码 */
    async check(session: string, cdk: string, userName: string, password: string)
    {
        let s2c = await AntFrame.platform.CheckCdk(session, cdk);
        if(s2c.error)
        {
            Game.event.dispatch("ERROR_CDK", s2c.error);
            return;
        } 
        
        this.login(userName, password, true);
    }

    /** 校验身份证 */
    async CheckIDCard(session: string, name: string, idCard: string)
    {
        let s2c = await AntFrame.platform.CheckIDCard(session, name, idCard);

        console.log("当前验证身份状态：",s2c.error, s2c["timelong"]);

        
        if(s2c.error != 0 && s2c.error != 1023)
        {
            let model= Game.moduleModel.login;
            model.session  = session;
            model.error    = s2c.error;
            model.timeLong = s2c["timelong"];
        }
        Game.event.dispatch("ERROR_IDCARD", s2c.error);
    }

    /** 创建角色 */
    async newAndUseRole(session: string,userName: string, server:number)
    {
        let s2c = await AntFrame.platform.newAndUseRole(session, userName, server);
        if(s2c.error)
        {
            return;
        } 
        this.enter();
    }

    /** 使用角色 */
    async useRole(session: string,roleid:number)
    {
        let s2c = await AntFrame.platform.useRole(session, roleid);
        if(s2c.error)
        {
            return;
        } 
        this.enter();
    }

    /** 区服列表 */
    async areas()
    {
        let s2c = await AntFrame.platform.Areas();
        if(s2c.error)
        {
            Game.event.dispatch("ERROR_AREAS");
            return;
        } 

        Game.event.dispatch("SUCCESS_AREAS",s2c["areas"]);
    }

    /** 进入游戏 */
    async enter()
    {
        fgui.GRoot.inst.showModalWait();
        
        // 请求角色初始数据
        await Game.net.AsyncGamerLoginGetDataC2S();
        //请求关卡列表数据
        await Game.net.AsyncCheckPointListC2S();
        //获取大秘境信息
        await Game.net.AsyncGetGamerSecretLandC2S();
        // 角色数据必须在背包数据之前获取
        
        await Game.sender.guide.GetGuideData();
        await Game.sender.hero.GetHeroList();
        await Game.net.AsyncGamerGetBackpackC2S();
        await Game.net.AsyncHeroGroupListC2S();
        await Game.sender.pvp.getDanInfo();
        

        Game.sender.draug.DraugList();
        Game.sender.quest.QuestList();
        Game.sender.home.SysList();

        // 登录了并且获取了用户数据
        Game.user.isLoginAndGetUserData = true;
        Game.netStat.isLogined = true;
        fgui.GRoot.inst.closeModalWait();
        Game.launch.enterGame();
        // Game.sender.gm.gmCommand('addlevel 20');
        // Game.menu.open(402200);
    }
}