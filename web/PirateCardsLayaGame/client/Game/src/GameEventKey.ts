export default class GameEventKey
{
    static Test = "Test";
    
    
    /* --------------------- 战斗消息 --------------------*/
    /** 同步模式--正常跑帧 */
    static GameBattle_onSyncNormal = "GameFrame_onSyncNormal";
    /** 同步模式--追帧（进度百分比） */
    static GameBattle_onSyncChasingFrame = "GameBattle_onSyncChasingFrame";
    /** 创建实体 */
    static GameBattle_onEntityCreate = "GameBattle_onEntityCreate";
    /** 移除实体 */
    static GameBattle_onEntityRemove = "GameFrame_onEntityRemove";
    /** 回滚帧数据， 回滚前 */
    static GameBattle_onEntityRollbackBegin = "GameFrame_onEntityRollbackBegin";
    /** 回滚帧数据， 回滚后 */
    static GameBattle_onEntityRollbackEnd = "GameBattle_onEntityRollbackEnd";
    /** 伤害跳字 */
    static GameBattle_onShowDamageUI = "GameBattle_onShowDamageUI";
    /** 连击跳字 */
    static GameBattle_onShowHitUI = "GameFrame_onShowHitUI";
    /** 震屏事件 */
    static GameBattle_onShakeScreen = "GameFrame_onShakeScreen";
    /** 屏幕缩放事件 */
    static GameBattle_onScreenScale = "GameBattle_onScreenScale";
    /** 移动屏幕事件 */
    static GameBattle_onScreenMove = "GameBattle_onScreenMove";
    /** 动画改变通知,刷新动画视图。 */
    static GameBattle_onAnimNotify = "GameFrame_onAnimNotify";
    /** 换人通知 */
    static GameBattle_onChangeNotify = "GameFrame_onChangeNotify";
    /** 角色出生 通知视图显示血条 */
    static GameBattle_onCharacterBorn = "GameBattle_onCharacterBorn";

    static GameBattle_OnViewAlphaChange = "GameBattle_OnViewAlphaChange";
    /** 播放声音 */
    static GameBattle_onPlaySound = "GameFrame_onPlaySound";
    /** 播放受击 */
    static GameBattle_onPlaySoundBehit = "GameFrame_onPlaySoundBehit";
    /** 触发器显示 屏幕特效 */
    static GameBattle_onTiggerEffectScreenShow = "GameBattle_onTiggerEffectScreenShow";
    /** 触发器隐藏 屏幕特效 */
    static GameBattle_onTiggerEffectScreenHide = "GameBattle_onTiggerEffectScreenHide";
    /** 场景 + UI 淡入淡出 */
    static GameBattle_onSceneFadeOut = "GameFrame_onSceneFadeOut";

     /** 触发器显示 2DUI资源 */
    static GameBattle_onTiggerUIScreenShow = "GameBattle_onTiggerUIScreenShow";
     /** 触发器隐藏 2DUI资源 */
    static GameBattle_onTiggerUIScreenHide = "GameBattle_onTiggerUIScreenHide";

    /**触发场景错层*/
    static GameBattle_onTriggerChangeSceneBg = "GameBattle_onTriggerChangeSceneBg";

     /**副本终极boss出现了*/
    static GameBattle_onBossAppear = "GameBattle_onBossAppear";

    /**通知展示boss立绘资源*/
    static GameBttle_showBossSpecialView = "GameBttle_showBossSpecialView";

     /**显示321go动画*/
     static GameBattle_onShowGameStart = "GameBattle_onShowGameStart";

    static GameBattle_onServerError2300 = "GameBattle_onServerError2300";
    /** 下一个空气墙的怪 */
    static GameBattle_MonsterCreater = "GameBattle_nextAirWallMonster"
    /** 抵御模式波次改变 */
    static GameBattle_WaveChange = "GameBattle_WaveChange";
    /** 怪物血量改变 */
    static GameBattle_MonsterHpChange = "GameBattle_MonsterHpChange";
    /** 实体传送 */
    static GameBattle_EntityTeleport = "GameBattle_EntityTeleport";
    /** 玩家复活 */
    static GameBattle_PlayerRevive = "GameBattle_PlayerRevive";
    /** 实体死亡 */
    static GameBattle_EntityDead = "GameBattle_EntityDead";
    /* --------------------- 框架消息 --------------------*/
    // 打开窗口消息 (menuId:MenuId, openType:MenuOpenType, openIndex?: number | string)
    static GameFrame_OpenMenu = "GameFrame_OpenMenu";
    // 关闭窗口 (menuId: MenuId)
    static GameFrame_CloseMenu = "GameFrame_CloseMenu";
    // 重刷登录数据--处理数据之前
    static GameFrame_ReLoginData_Begin = "GameFrame_ReLoginData_Begin";
    // 重刷登录数据--处理数据之后
    static GameFrame_ReLoginData_End = "GameFrame_ReLoginData_End";
    //隔日更新事件
    static GameFrame_Everyday_Update = "GameFrame_Everyday_Update";
    
    /* --------------------- Home --------------------*/
    /** 功能开启动画隐藏 */
    static GameFrame_HideOpenDialog = "GameFrame_HideOpenDialog";
    /** 功能开启动画 */
    static GameFrame_ShowOpenDialog = "GameFrame_ShowOpenDialog";

    
    /* --------------------- 组队 --------------------*/
    /** 队伍状态改变 */
    static GameFrame_TeamMemberNetStateChange = "GameFrame_TeamMemberStateChange";
    /** 队伍玩家逃跑 */
    static GameFrame_TeamMemberLeave = "GameFrame_TeamMemberLeave";

    /* --------------------- 物品 --------------------*/
    // 使用物品
    static GameFrame_UseItem = "GameFrame_UseItem";

    static GameFrame_ConsumeItem = "GameFrame_ConsumeItem";

    /* --------------------- 战队 --------------------*/
    // static GameFrame_Player_Levelup = "GameFrame_Player_Levelup";

    /* --------------------- 邮件 --------------------*/
   
    
    /** --------------------- 英雄 --------------------- */
    // 升级
    static GameFrame_HeroLevelUp = "GameFrame_HeroLevelUp";
    // 升星
    static GameFrame_HeroStarUp = "GameFrame_HeroStarUp";
    // 激活新英雄
    static GameFrame_AddHero = "GameFrame_AddHero";
    // 英雄技能升级
    static GameFrame_HeroSkillLevel = "GameFrame_HeroSkillLevel";
    // 持续升级
    static GameFrame_HeroLeveling = "GameFrame_HeroLeveling";
    // 增加英雄经验值 和更新经验条
    static GameFrame_UpdateEXP = "GameFrame_UpdateEXP";
    // 更新属性信息
    static GameFrame_UpdateProp = "GameFrame_UpdateProp";
    //英雄升星前本地备份数据(EXP和道具量)
    static GameFrame_BackUpData = "GameFrame_BackUpData";
    //恢复本地数据 (升级请求服务器返回失败时)
    //升级时超出限制 (道具数量限制 和 人物等级限制)
    static GameFrame_RestoreData = "GameFrame_RestoreData";
    static GameFrame_ItemExceedBound = "GameFrame_ItemExceedBound";
    //单次升级时候等级到达限制  // 不发送服务器请求
    static GameFrame_LevelExceedBound ="GameFrame_LevelExceedBound";
    //持续升级时候等级到达限制  // 仍然发送到限制前的item 数量消耗请求到服务器
    static GameFrame_LevelExceedMaxLevelInLoop ="GameFrame_LevelExceedMaxLevelInLoop";
    /** --------------------- 装备 --------------------- */
    // 升星
    static GameFrame_EquipStarUp = "GameFrame_EquipStarUp";
    // 升级
    static GameFrame_EquipLevelUp = "GameFrame_EquipLevelUp";
    // 品质选择
    static GameFrame_EquipQualitySelect = "GameFrame_EquipQualitySelect";
    // 品质排序（升/降）
    static GameFrame_EquipQualitySort = "GameFrame_EquipQualitySort";
    // 装备选择
    static GameFrame_EquipItemSelect = "GameFrame_EquipItemSelect";
    // 英雄穿装备
    static GameFrame_HeroSelectEquip = "GameFrame_HeroSelectEquip";
    
    /** --------------------- 备战 --------------------- */
    // 备战系统的数据更新
    static GameFrame_BattlePlanDataUpdate = "GameFrame_BattlePlanDataUpdate";
    // 备战系统解锁新的队伍
    static GameFrame_BattlePlanUnlockNewTeam = "GameFrame_BattlePlanUnlockNewTeam";
    // 备战系统改变队伍名字
    static GameFrame_BattlePlanChangeTeamName = "GameFrame_BattlePlanChangeTeamName";
    // 备战系统换英雄
    static GameFrame_BattlePlanChangeHero = "GameFrame_BattlePlanChangeHero";
    // 备战系统点击右下角的挑战或者确定时间
    static GameFrame_BattlePlanTeamCentern = "GameFrame_BattlePlanTeamCentern";
    // 备战系统解锁新的英雄栏位
    static GameFrame_BattlePlanUnlockNewHeroChair = "GameFrame_BattlePlanUnlockNewHeroChair";
    //
    static GameFrame_BattlePlanSelectedTeam = "GameFrame_BattlePlanSelectedTeam";
    // 备战系统点击第二个备战位按钮
    static GameFrame_BattlePlanSecondHero = "GameFrame_BattlePlanSecondHero";
    // 备战刷新通用技能
    static GameFrame_BattlePlanRefreshCommonSkill = "GameFrame_BattlePlanRefreshCommonSkill";

    /** --------------------- 按钮 --------------------- */

    // 主界面征战按钮事件 
    static GameFrame_HomeWindowBattleStartBtn = "GameFrame_HomeWindowBattleStartBtn";
    /** 英雄界面装备页面打开 */
    static GameFrame_HeroWindowEquipPanel = "GameFrame_HeroWindowEquipPanel";
    /** 英雄界面返回 */
    static GameFrame_HeroPanelBack = "GameFrame_HeroPanelBack";
    /** 英雄装备界面关闭 */
    static Gameframe_HeroEquipClose = "Gameframe_HeroEquipClose";

    /** --------------------- 通用技能 --------------------- */

    /** --------------------- 引导 --------------------- */
    
    /** 征战进入 */
    static GameFrame_BattleEnterOnClick = "GameFrame_BattleEnterOnClick";
    /** 关卡选择点击 */
    static GameFrame_SectionEnterOnClick = "GameFrame_SectionEnterOnClick"
    /** 关卡详情选择点击 */
    static GameFrame_SectionDeltaEnterOnClick = "GameFrame_SectionDeltaEnterOnClick"
    /** 备战进入 */
    static GameFrame_BattlePlanEnter = "GameFrame_BattlePlanEnter";

    /** 遥感引导结束 */
    static GameFrame_GuideJoystickFinish = "GameFrame_GuideJoystickFinish";
    /** 攻击引导开始 */
    static GameFrame_BattleOneWave = "GameFrame_GuideAttackStart";
    /** 攻击引导结束 */
    static GameFrame_GuideAttackFinish = "GameFrame_GuideAttackFinish";
    /** 一技能引导开始 */
    static GameFrame_GuideFirSkillStart = "GameFrame_GuideFirSkillStart";
    /** 一技能引导结束*/
    static GameFrame_GuideFirSkillEnd = "GameFrame_GuideFirSkillEnd";
    /** 战斗结束（失败、超时等）引导结束*/
    static GameFrame_GuideBattleEndRemove = "GameFrame_GuideBattleEndRemove";
    /** 关卡返回*/
    static GameFrame_SectionBackBtnOnClick = "GameFrame_SectionBackBtnOnClick";
    /** 主界面点击英雄*/
    static GameFrame_HomeHeroBtnOnClick = "GameFrame_HomeHeroBtnOnClick";
    /** 英雄界面选中英雄*/
    static GameFrame_HeroPanelChooseHero = "GameFrame_HeroPanelChooseHero";
    /** 英雄备战选择第二个英雄 */
    static GameFrame_HeroBattleChooseHero = "GameFrame_HeroBattleChooseHero";
    /** 英雄备战选择第二个英雄,点击确定按钮 */
    static GameFrame_HeroBattleHero = "GameFrame_HeroBattleHero";
    /** 打开经验获取界面*/
    static GameFrame_HeroInfoShowAddExpPanel = "GameFrame_HeroInfoShowAddExpPanel";
    /** 经验获取事件*/
    static GameFrame_HeroExpIncreaseByItem = "GameFrame_HeroExpIncreaseByItem";
    /** 英雄选取结束 */
    static GameFrame_HeroChooseFinish = "GameFrame_HeroChooseFinish";
    /** 打开完升级界面 */
    static gameFrame_GuideOpenLevelUpPanel = "gameFrame_GuideOpenLevelUpPanel";
    /** 英雄界面打开已装备UI */
    static gameFrame_GuideEquipUIFinish = "gameFrame_GuideEquipUIFinish";
    /** 英雄界面打开装备列表UI */
    static gameFrame_GuideEquipList = "gameFrame_GuideEquipUIFinish";
    /** 英雄装备物品 */
    static gameFrame_HeroEquip = "gameFrame_HeroEquip";
    /** 结束打开英雄引导 */
    static GameFrame_FinishGuideOpenHeroEquip = "GameFrame_FinishOpenHeroEquip";
    /** 结束打开英雄引导 */
    static GameFrame_OpenHeroEquipList = "GameFrame_OpenHeroEquipList";
    /**表示战局*/
    static GameFrame_gameStart = "GameFrame_onShowGameStart";
    /** 表示关卡成功通关 */
    static GameFrame_SectionFinishSuccess = "GameFrame_SectionFinishSuccess";
    /** 主界面点击装备*/
    static GameFrame_HomeEquipBtnOnClick = "GameFrame_HomeEquipBtnOnClick";
    /** 装备界面选中第一个装备 */
    static GameFrame_EquipSelectFirst = "GameFrame_EquipSelectFirst";
    /** 装备界面强化按钮 */
    static GameFrame_EquipStrengthenBtn = "GameFrame_EquipStrengthenBtn";
    /** 装备界面强化按钮2 */
    static GameFrame_EquipStrengthenBtn2 = "GameFrame_EquipStrengthenBtn2";
    /** 装备界面确认强化按钮 */
    static GameFrame_EquipStrengthenEnterBtn = "GameFrame_EquipStrengthenEnterBtn";
    /** 点击通常副本按钮 */
    static GameFrame_BattleNormalBtn = "GameFrame_BattleNormal";
    /** 点击精英副本按钮 */
    static GameFrame_BattleSpecialBtn = "GameFrame_BattleSpecialBtn";
    /** 点击精英副本列表 */
    static GameFrame_BattleSpecialList = "GameFrame_BattleSpecialList";

    static GameFrame_GuideChangeHero= "GameFrame_GuideChangeHero";
    
    static GameFrame_BtnBackOnClick = "GameFrame_BtnBackOnClick";
    
    static GameFrame_HeroLevelGuideUpClose = "GameFrame_HeroLevelUpClose";
}