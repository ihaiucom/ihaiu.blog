
namespace ZF
{
    /// <summary>
    /// 英雄选择状态
    /// </summary>
    public enum HeroPickState
    {
        NONE = 0, // 无选择
        AP_SELECT = 1, // 全阵营选择
        SD_SELECT = 2, // SD模式选择
        INTRO_SELECT_UNUSED = 3, // 介绍模式？等待测试，预计为英雄排序？如辅助排序，力量型英雄排序等？
        RD_SELECT_UNUSED = 4, // 	RD模式选择
        CM_INTRO = 5, // 队长介绍模式
        CM_CAPTAINPICK = 6,
        CM_BAN1 = 7, // *可用1-10代替，队长BAN人，1-10为BAN的顺序
        CM_BAN2 = 8,
        CM_BAN3 = 9,
        CM_BAN4 = 10,
        CM_BAN5 = 11,
        CM_BAN6 = 12,
        CM_BAN7 = 13,
        CM_BAN8 = 14,
        CM_BAN9 = 15,
        CM_BAN10 = 16,
        CM_BAN11 = 17,
        CM_BAN12 = 18,
        CM_BAN13 = 19,
        CM_BAN14 = 20,
        CM_SELECT1 = 21, // *可用1-10代替，队长选人，1-10为选的顺序
        CM_SELECT2 = 22,
        CM_SELECT3 = 23,
        CM_SELECT4 = 24,
        CM_SELECT5 = 25,
        CM_SELECT6 = 26,
        CM_SELECT7 = 27,
        CM_SELECT8 = 28,
        CM_SELECT9 = 29,
        CM_SELECT10 = 30,
        CM_PICK = 31,  // 队长模式
        AR_SELECT = 32, // AR模式
        MO_SELECT = 33, // 中路模式
        FH_SELECT = 34,
        CD_INTRO = 35,
        CD_CAPTAINPICK = 36,
        CD_BAN1 = 37,
        CD_BAN2 = 38,
        CD_BAN3 = 39,
        CD_BAN4 = 40,
        CD_BAN5 = 41,
        CD_BAN6 = 42,
        CD_SELECT1 = 43,
        CD_SELECT2 = 44,
        CD_SELECT3 = 45,
        CD_SELECT4 = 46,
        CD_SELECT5 = 47,
        CD_SELECT6 = 48,
        CD_SELECT7 = 49,
        CD_SELECT8 = 50,
        CD_SELECT9 = 51,
        CD_SELECT10 = 52,
        CD_PICK = 53,
        BD_SELECT = 54,
        ABILITY_DRAFT_SELECT = 55,
        ARDM_SELECT = 56,
        ALL_DRAFT_SELECT = 57,
        CUSTOMGAME_SELECT = 58,
        SELECT_PENALTY = 59,
        CUSTOM_PICK_RULES = 60,
        SCENARIO_PICK = 61,
    }
}
