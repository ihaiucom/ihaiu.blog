using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    /// <summary>
    /// 攻击记录
    /// </summary>
    public enum AttackRecord
    {
        FAIL_NO = 0, // 攻击未失败
        FAIL_TERRAIN_MISS = 1, // 攻击由于地形原因未命中
        FAIL_SOURCE_MISS = 2, // 攻击由于来源原因未命中
        FAIL_TARGET_EVADED = 3, // 攻击被目标躲避
        FAIL_TARGET_INVULNERABLE = 4, // 攻击被目标无敌保护
        FAIL_TARGET_OUT_OF_RANGE = 5, // 攻击目标超出攻击范围
        CANNOT_FAIL = 6, // 攻击不能失败
        FAIL_BLOCKED_BY_OBSTRUCTION = 7, // 攻击被障碍物挡住
    }
}
