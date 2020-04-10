/** 触发条件枚举 */
export enum EnumGuideTriggerType
{
    /** 新账号进入游戏触发 */
    BATTLE_GUIDE = 1,
    /** 功能开放触发 */
    SYSTEM_OPEN = 4,
    /** 新手引导组结束触发 */
    GUIDE_GROUP_FINISH = 7,
}

/** 强制类型枚举 */
export enum EnumGuideType
{
    /** 非强制 */
    NON_COERCION = 0,
    /** 强制 */
    COERCION = 1

}


export enum EnumTextPosType
{
    LEFT_TOP = 1,
    LEFT_BOTTOM = 2,
    RIGHT_TOP = 3,
    RIGHT_BOTTOM = 4
}