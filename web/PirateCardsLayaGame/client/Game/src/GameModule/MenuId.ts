
// 模块ID
export enum MenuId
{
    /*------------- 系统  ------------ */

    
    /** 通知 */
    Notice = 0, // 临时

    /*---------无按钮 1------ */
    /** 主界面 */
    Home = 100,

    /** 登录 */
    Login = 101,

    /** 剧情引导 */
    Plot = 102,


    /*---------方位下 2------ */
    /** 招募 */
    Gashapon = 200,

    /** 英雄 */
    Hero    = 201,
    /** 背包 */
    Bag     = 202,
    /** 装备 */
    Equip    = 203,

    /** 战魂 */
    Draug  = 204,
    /** 征战 */
    Sections = 207,

    /*---------方位左下 3------ */

    /** 任务 */
    Quest = 300,

    /** 组队大厅 */
    Team = 303,

    /** 备战 */
    BattlePlan = 304,

    PVPHall = 401,
    /** 战役 */
    PVEHall = 402,
    
    /*---------方位上 5------ */
    /** 设置 */
    SystemSetting = 500,

    /** 邮件 */
    Mail = 501,

    /** 排行榜 */
    Rank = 502,

    /** 角色信息 */
    PlayerInfo = 503,

    
    /*---------方位左上 6------ */
    /** 福利(明日可取) */
    Welfare = 601,


    /*---------方位右上 7------ */
    /** 体力 */
    Power = 700,
    
    /** 金币 */
    Money = 701,

    /** 元宝 */
    Gold = 702,

    /** 战魂币 */
    DraugCoin = 703,

    /** roll币 */
    RollCoin = 704,

    
    /** roll币 */
    SecretLandRoll = 704,
    /*------------- 主菜单  ------------ */


    
    

    

    


   

    /*------------- 子菜单组  ------------ */
    SubMenuButtonBegin = 100000,

    SubMenuSectionDetail = 1000001,

    DuelTemp = 401002,

    /** 多人匹配 */
    BattleMatch = 1000002,
    /** 战斗界面 */
    WarWindowUI = 1000003,
    /** 战斗结果 */
    BattleResultWindow = 1000004,

    /** 战队升级 */
    PlayerLevelUpWindow = 503001,
    /** 赛季更新 */
    NewSeasonWindow = 1000005,

    /***************** 战役  ****************** */
    /**秘闻本主界面 */
    SecretBook = 402100,
    /** 秘闻本列表 */
    SecretBookListWindow = 402101,
    /** 秘闻本详情 */
    SecretBookDetailWindow = 402102,
    /** 大秘境主界面 */
    SecretLand = 402200,
    /** 大秘境词缀介绍 */
    SecretLandAffix = 402201,
    /** 大秘境词缀tips */
    AffixTips = 402202,
    /** 大秘境准备界面 */
    SecretLandReady = 402203,
    
    
    /** 通用技能 */
    CommonSkill = 900,

}

window["MenuId"] = MenuId;