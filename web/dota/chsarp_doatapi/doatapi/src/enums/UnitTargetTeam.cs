using System;

namespace ZF
{
    /// <summary>
    /// 单位--目标队伍
    /// </summary>
    [Flags]
    public enum UnitTargetTeam
    {
        NONE = 0, // 无
        FRIENDLY = 1, // 友方
        ENEMY = 2, // 敌方
        BOTH = 3, // 双方
        CUSTOM = 4, // 普通
    }
}
