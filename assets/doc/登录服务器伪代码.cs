
using System.Collections.Generic;
using System.Collections;

/** 登录服务器 */
public class LoginServer
{
    /**
     * 登录--只知道Mac地址
    */
    public Role Login(string mac)
    {
        // 获取Mac地址账号
        MacAccount macAccount = GetMacAccount(mac);

        return Login(mac, macAccount.lastPlatformId, macAccount.lastServerId);
    }

    /**
     * 登录--选了平台
    */
    public Role Login(string mac, int platformId)
    {
        // 获取平台账号
        PlatformAccount platformAccount= GetPlatformAccount();
        // 最后一次登录服务器ID
        int serverId = platformAccount.lastServerId;


        return Login(mac, platformId, serverId);
    }


    /**
     * 登录--选了平台,服务器ID
    */
    public Role Login(string mac, int platformId, int serverId)
    {
        // 获取Mac地址账号
        MacAccount macAccount = GetMacAccount();
        // 保存最后一次登录信息
        macAccount.SetLast(platformId, serverId);


        // 获取平台账号
        PlatformAccount platformAccount= GetPlatformAccount();
        // 保存最后一次登录信息
        platformAccount.SetLast(serverId);



        // 获取服务器
        GameServer server = GetServer(serverId);
        // 登录游戏服务器
        Role role = server.Login();

        // return 角色信息
        return role;
    }



    

    /** [虚方法]获取Mac地址账号 */
    MacAccount GetMacAccount(string mac)
    {
        return null;
    }


    /** [虚方法]获取平台账号 */
    PlatformAccount GetPlatformAccount(string mac, int platfromId)
    {
        return null;
    }


    /** [虚方法]获取服务器 */
    GameServer GetServer(int serverId)
    {
        return null;
    }



}


/** Mac地址账号 */
class MacAccount
{
    public string uid;

    /** 平台账号列表 */
    public List<PlatformAccount> platformList = new List<PlatformAccount>();

    /** 最后登录平台ID */
    public int lastPlatformId;
    /** 最后一次登录服务器ID */
    public int lastServerId;


    /** 设置最后一次 登录平台,服务器ID */
    public void SetLast(int platformId, int serverId)
    {
        this.lastPlatformId = platformId;
        this.lastServerId = serverId;
    }


}


/** 平台账号 */
class PlatformAccount
{
    /** 名称 */
    public string name;
    /** 最后登录服务器 */
    public int      lastServerId;


    /** 设置最后一次 服务器ID */
    public void SetLast(int serverId)
    {
        this.lastServerId = serverId;
    }
}

/** 平台 */
class Platform
{
    /** 平台ID */
    public int      id;
    /** 平台名称 */
    public string   name;
}

/** 服务器 */
public class GameServer
{
    /** [虚方法]登录并返回角色信息 */
    public Role Login()
    {
        return null;
    }
}

/** 角色 */
public class Role
{
    
}