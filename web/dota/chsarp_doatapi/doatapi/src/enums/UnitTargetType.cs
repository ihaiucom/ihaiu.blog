using System;

namespace ZF
{
    /// <summary>
    /// 单位--目标类型
    /// </summary>
    [Flags]
    public enum UnitTargetType
    {
        NONE = 0, // 无
        HERO = 1, //英雄
        CREEP = 2, // 野怪
        BUILDING = 4, // 建筑
        COURIER = 16, // 信使
        BASIC = 18, // 基本
        OTHER = 32, // 其他
        ALL = 55, // 所有
        TREE = 64, // 树木
        CUSTOM = 128, // 普通
    }
}
