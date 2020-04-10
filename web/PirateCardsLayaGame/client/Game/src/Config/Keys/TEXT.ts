// ===========================
// 代码文本
// ---------------------------
export default class TEXT
{
    
    static NET_ERROR = "网络连接失败！请检查网络设备!加油哦！！";

    static Login = "登录";
    static Auth = "授权";
    
    static LangSelectMsg = "语言需要重启游戏才有效!";
    static FunNoOpen = "此功能暂未开放，敬请期待！";
    static ButtonSelect = "选择";
    static ButtonOk = "确定";
    static ButtonCannel = "取消";
    static ButtonYes = "是";
    static ButtonNo = "否";
    static Disable = "内容优化";
    static Lock = "无解锁配置！";
    
    static LvUpMax = "等级达到最大";
    static LvUpTo = "玩家升级 {0} → {1}";
    static Lv = "{0}级";
    static LVDot = "等级：{0}";
    static PlayerExp = "主公经验：{0}";
    static FatigueNotEnough = "体力不足，无法进行挑战";

    static cannotRecharge = "游客不能充值";
    static cannotRechargeNoIos = "只支持ios内购";
    static rechargeError = "充值失败，请稍候重试";
    static systemTip = "系统提示";
    static TitleTip = "提示";
    static ErorNoInitProto = "没有初始化网络";
    static ErorRequestServerList = "请求服务器列表失败";
    static ErorAccountFrozen = "账号被冻结";
    static ErorAccountDropped = "账号被停用";
    static TipEnterRoleName = "输入你的名称";
    static ErrorNameEmpty = "名字不能是空的";
    static ErrorContentEmpty = "内容不能是空的";
    static ErrorNameUsed = "名称已经被使用";
    static ErrorFormatName = "存在非法字符串，请修改后重试"
    static ErrorHttpSendFail = "[Error] 发送请求失败";
    static HttpTimeOut = "网络超时! 当前设置的超时时间是{0}";
    static AlertTextBuyActor = "是否花费{0}{1}增加艺人数量";
    static AlertTextScountActor = "是否花费{0}{1} 探查艺人？";
    static ToastTextItemNotEnough = "{0}数量不足";
    static ToastTextItemNotEnough2 = "数量不足，需要{0} {1}";

    //战队信息
    static ChangeNameCost = "本次改名需要 {0}";
    static DuelTempLevel = "当前决斗神殿段位：{0}";
    static DuelTempMaxLevel = "历史最高决斗神殿段位：{0}";
    static DuelTempCurrentPvpLevel = "当前竞技排名：{0}";
    static DuelTempMaxPvpLevel = "历史最高竞技排名：{0}";

    //编队
    static BattlePlanTeamHeroNameAndLevel = "{0}  {1}级";
    
    //背包
    static BagCapacity = "{0}/{1}"
    static BagItemCount = "拥有：{0}";
    static BagExpiredLimitTip = "{0}后过期";
    static BagExpiredPeriodTip = "将在{0}过期";
    static BagItemSell = "出售";
    static BagItemUse = "使用";
    static BagItemSplit = "分解";
    static BagItemForge = "锻造";
    static BagItemChangeEquip = "穿戴";
    static BagItemLevelUp = "使用可增加{0}英雄经验";

    //装备
    static EquipPropDes = "{0}+{1}";
    static EquipExclusiveTxtMsg = "{0}专属！只有{1}才可穿戴次装备";
    static EquipExclusiveTxt = "{0}专属"
    static EquipEatExp = "该装备可提供{0}的强化经验";
    static EquipTypeWeapon = "武器"
    static EquipTypeHelmet = "头盔"
    static EquipTypeArmor = "战甲"
    static EquipTypeBoots = "战靴"
    static EquipTypePendant = "玉佩"
    static EquipTypeGem = "宝物"
    static EquipNotEnough = "道具不足，无法选择"
    static EquipLevelUpStr1 = "下一级属性"
    static EquipLevelUpStr2 = "强化到{0}级时属性增加"
    static EquipAtkRange = "系数";

    //邮件
    static MailTitle = "邮件";
    static DeleteRead = "删除已读";
    static ToReader = "致玩家：";
    static ReawrdMsg = "奖励内容：";

    static Progress = "{0}/{1}";
    
    // 数字
    static N0 = "零";
    static N1 = "一";
    static N2 = "二";
    static N3 = "三";
    static N4 = "四";
    static N5 = "五";
    static N6 = "六";
    static N7 = "七";
    static N8 = "八";
    static N9 = "九";
    static N10 = "十";
    static N100 = "百";
    static N1000 = "千";
    static N10000 = "万";

    
    static RewardItemCount = "x{0}";


    // Time xx前
    static DATE_MonthBefore = "{0}个月前";
    static DATE_WeekBefore = "{0}周前";
    static DATE_DayBefore = "{0}天前";
    static DATE_HourBefore = "{0}小时前";
    static DATE_MinuteBefore = "{0}分钟前";
    static DATE_SecondeBefore = "{0}秒前";

    // 时间
    static Hour = "小时";
    static Minute = "分";
    static Second = "秒";

    static MissionNotOpen = "该关卡尚未开启";
    static Chapter = "第{0}章";
    static ChapterStarTipTitle = "本章累计{0}星可领取";
    static ChapterStarNotEnough = "星星数量不足";
    static ChapterRewardAlreadyGet = "奖励已经领取过";
    static ChapterSpecialTimes = "今日精英剩余次数：{0}";
    static ChapterMonsterTimes = "今日剩余次数：{0}";
    static SecretBookTimes = "今日剩余次数：{0}";
    static SecretBookTimesNotEnough = "该副本今日挑战次数不足";
    static SectionSpecialTotalTimes = "每日一共可购买{0}次精英奖励次数";
    static SectionMonsterTotalTimes = "每日一共可购买{0}次魔王奖励次数";
    static SecretBookTotalTimes = "每日一共可购买{0}次秘闻奖励次数";
    static SectionBuyTimesToast = "奖励次数提升";
    static SectionCurrentTimes = "今日第{0}次购买";
    static SectionTimesNotEnough = "今日次数已用完";
    static MissionUnlockCondition = "{0}级开启";
    static ChapterCurrentStarNum = "{0}/{1}";

    //秘闻本
    static SecretTimesRemain = "今日剩余次数: {0}";
    // static MissionPlayerExp = "主公经验：{0}";
    // static MissionHeroExp = "英雄经验：{0}";
    static MissionMaxTime = "通关时间低于{0}秒";
    static MissionKillBoss = "打败首领";
    static MissionHPState = "剩余生命超过{0}%";
    static MissionStamina = "x{0}";
    static SecretMissionTimesRemain = "今日剩余次数：{0}";
    //大秘境
    static SecretLand_BestScore = "最佳成绩：大秘境{0}";
    static SecretLand_CurrentKeyStone = "当前钥石：{0}级";
    static SecretLand_Buy_Roll_Tips = "是否消耗{0}点体力兑换Roll币";
    static SecretLand_Roll_tips = "当日可兑换次数为{0}，Roll积攒数量上限为{1}";
    static SecretLand_Fatigue_Not_Enough = "您没有足够的体力值，需要{0}体力兑换Roll币";
    static Keystone_LevelUp_Time_Limit = "{0}分钟";
    static SecretLand_Level_Limit = "等级达到{0}后开启{1}层大秘境";
    static SecretLand_Time_Cost = "通关时间: {0}";
    static SecretLand_New_Keystone = "获取新钥匙：{0}{1}级";//eg:兴东大秘境12
    
    //十连抽
    static Gashapon_NextFreeTime = "{0}后免费"
    static Gashapon_Rate = "概率 {0}%";
    static Gashapon_PropDisplay = "{0} +{1}";//物攻 +100
    static Gashapon_Times_Remain = "每日可招募{0}次，今日剩余{1}次";
    static Gashapon_Times_Not_Enough = "今日剩余次数不足";

    //PVP竞技大厅
    static DuelSeasonDuration = "{0} - {1}";//2020.01.01 - 2020.01.31
    static DuelSeasonRemainDays = "距离赛季结束还有{0}";
    static DuelCurrentWinTimes = "本赛季胜场：{0}";
    static DuelSelectHeroGroupFirst = "请先选择队伍";
    static DuelTempOldSeason = "恭喜您，在上赛季结算时的段位达到了{0}，赛季奖励已经发送 到您的邮箱";
    static DuelTempNewSeason = "由于您上赛季的出色表现，您在本赛季的起始段位为{0}";
    static DuelTempWinTimes = "胜场：{0}";
    // 英雄
    static HeroSkillOpenLevel = "英雄等级达到{0}级别后解锁";
    static HeroMaxLevel = "已满级";
    static HeroInBattle = "当前英雄已在队伍中！！！";
    static HeroStarProStr = "成长"
    static HeroLevelUpNotEnough = "当前无法升级，请提升战队等级";
    static HeroLevelUpItemNotEnough = "物品不足，无法升级";
    static HeroLevelUpMax = "已提升当前最高级";

    //排行榜
    static RankMyAllRank = "我的全区排行：{0}";
    static RankNotOnRank = "未上榜";
    static RankDanStar = "{0} {1}星";//青铜 2星
    static HeroSkillLevelNotLevel = "升级条件不足，需英雄{0}级";

    static SecretBookHeroLevelNotEnough = "英雄{0}级开启"

    //引导
    static GuideFinish = "现在引导结束了，你可以自由体验了";
    
    static GuideGoToBattle = "guide_go_section";

    static GuideBackHome = "guide_go_back_home";

    static GuideBack = "guide_go_back";
} 
